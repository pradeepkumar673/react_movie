import React from 'react'
import { createContext } from 'react';
export const WatchlistContext = React.createContext();

const toogleWatchlist = (film) => {
    const index = watchlist.findIndex((f) => f.id === film.id);
    if (index ===-1) {
        setWatchlist([...watchlist, film]);
    }
    else {
        setWatchlist([...watchlist.slice(0, index), ...watchlist.slice(index + 1)]);
    }
}
export const WatchlistProvider = (props) => {
    const [watchlist, setWatchlist] = React.useState([]);
    const toogleWatchlist = (film) => {
        const index = watchlist.findIndex((f) => f.id === film.id);
        if (index === -1) {
            setWatchlist([...watchlist, film]);
        } else {
            setWatchlist([...watchlist.slice(0, index), ...watchlist.slice(index + 1)]);
        }
    };
    return (
        <WatchlistContext.Provider value={{ watchlist, setWatchlist, toogleWatchlist }}>
            {props.children}
        </WatchlistContext.Provider>
    );
};
export default WatchlistProvider