import React from 'react'
import { createContext } from 'react';
const WatchlistContext = React.createContext();

const toogleWatchlist = (film) => {
    const index = watchlist.indexOf(film);
    if (index > -1) {
        watchlist.splice(index, 1);
    }
    else {
        watchlist.push(film);
    }
}
export const WatchlistProvider = () => {
    const [watchlist, setWatchlist] = React.useState([]);
    return (
        <WatchlistContext.Provider value={[watchlist, setWatchlist]}>
            {props.children}
        </WatchlistContext.Provider>
    )
}