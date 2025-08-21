import GeneFilter from "../Components/GeneFilter"
import { WatchlistContext } from "../context/WatchlistContext"
import Cards from "../Components/cards"
import React, { useEffect, useState } from "react";
import { useContext } from "react";

const Watchlist = () => {
    const [search, setSearch] = useState('');
    const { watchlist } = useContext(WatchlistContext);

    const filterWatchlist = watchlist.filter((film) => {
        return film.title.toLowerCase().includes(search.toLowerCase());
    }); 
    return (
        <div className="watchlist_container p-4 pt-16">
            <input
                type="text"
                placeholder="🪄 Search for any movies"
                className="px-3 py-1 rounded-xl w-1/3 md:w-1/2 lg:w-1/3 border-2 border-[#000000]
        bg-[#6f111a] opacity-85 backdrop-blur-2xl shadow-lg fixed top-16 
        left-1/2 transform -translate-x-1/2
        hover:opacity-100  z-30 text-white hover:scale-105 transition-transform duration-200"
        onChange={(e) => setSearch(e.target.value)}
/>
            <GeneFilter/>
            <div className="movies_container mt-20">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filterWatchlist.map((film, idx) => (
                        <Cards key={idx} film={film} />
                    ))}
                </div>
            </div>

        </div>

    )
}

export default Watchlist