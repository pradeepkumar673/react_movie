import { FaHeart, FaRegHeart } from "react-icons/fa";
import React, { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";
import { FaStar } from "react-icons/fa";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

function Cards({ film }) {
    const { toogleWatchlist, watchlist } = useContext(WatchlistContext);
    const isInWatchlist = watchlist.some(f => f.id === film.id);

    return (
        <div className="bg-[#6f111a] shadow-lg relative overflow-hidden border-2 border-[#000000] rounded-lg p-4 w-auto hover:scale-95 transition-transform duration-300">
            <img
                src={film.poster_path ? `${IMG_BASE_URL}${film.poster_path}` : "https://via.placeholder.com/500x750?text=No+Image"}
                alt={film.title}
                className="w-full h-80 object-cover rounded-lg"
            />

            <div className="p-4 flex flex-col align-center justify-center gap-2">
                <h3 className="text-lg font-semibold mt-4">{film.title}</h3>
                <p className="text-sm text-gray-500">Release Date: {film.release_date}</p>
                <p className="text-sm text-gray-500">Rating: {film.vote_average}</p>
                <p className="text-sm text-gray-500">Language: {film.original_language}</p>
                <p className="text-sm text-gray-500">Popularity: {film.popularity}</p>
            </div>
            <button
                onClick={() => toogleWatchlist(film)}
                className="absolute bottom-4 right-4 text-3xl text-white"
                aria-label="Toggle Watchlist"
            >
                {isInWatchlist ? <FaHeart /> : <FaRegHeart />}
            </button>
        </div>
    );
}

export default Cards;