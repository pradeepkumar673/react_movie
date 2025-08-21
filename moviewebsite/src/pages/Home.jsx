import GeneFilter from "../Components/GeneFilter";
import Cards from "../Components/cards";
import React, { useEffect, useState } from "react";

const Home = () => {
    const [films, setFilms] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?page=${2}&api_key=e92f39b1bbc9f0b69ce7fdc6e6e7bc8e`)
            .then((res) => res.json())
            .then((data) => setFilms(data.results));
    }, []);

    return (
        <div className="home_container p-4 pt-16">
            <input
                type="text"
                placeholder="🪄 Search for any movies"
                className="px-3 py-1 rounded-xl w-1/3 md:w-1/2 lg:w-1/3 border-2 border-[#000000]
        bg-[#6f111a] opacity-85 backdrop-blur-2xl shadow-lg fixed top-16 
        left-1/2 transform -translate-x-1/2
        hover:opacity-100  z-30 text-white hover:scale-105 transition-transform duration-200  "
            />

            <div className="movies_container mt-20 ">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {films.map((film, idx) => (
                        <Cards key={idx} film={film} />
                    ))}
                </div>
            </div>
            <div className="page_shift mt-8 flex align-ceter text-center justify-between">
                <button className="bg-[#6f111a] text-white px-4 py-2 rounded-lg mr-2 hover:bg-[#8a2b2b] transition-colors">
                    Previous
                </button>
                <button className="bg-[#6f111a] text-white px-4 py-2 rounded-lg hover:bg-[#8a2b2b] transition-colors">
                    Next
                </button>
            </div>
        </div>
    );
};

export default Home;