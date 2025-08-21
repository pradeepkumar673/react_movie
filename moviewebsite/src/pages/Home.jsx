import GeneFilter from "../Components/GeneFilter";
import Cards from "../Components/cards";
import React, { useEffect, useState } from "react";

const Home = () => {
    const [films, setFilms] = useState([]);
    const [page, setPage] = useState(1);
    const [Search, setSearch] = useState('');
    useEffect(() => {
        let url = `https://api.themoviedb.org/3/movie/top_rated?page=${page}&api_key=e92f39b1bbc9f0b69ce7fdc6e6e7bc8e`
        if(Search){
            fetch(`https://api.themoviedb.org/3/search/movie?query=${Search}&page=${page}&api_key=e92f39b1bbc9f0b69ce7fdc6e6e7bc8e`)
            .then((res) => res.json())
            .then((data) => setFilms(data.results));
        }
        fetch(url)
            .then((res) => res.json())
            .then((data) => setFilms(data.results));
    }, [page, Search]);

    return (
        <div className="home_container p-4 pt-16">
            <input
                type="text"
                placeholder="🪄 Search for any movies"
                className="px-3 py-1 rounded-xl sm:w-1/3 md:w-1/2 lg:w-1/3 border-2 border-[#000000]
        bg-[#6f111a] opacity-85 backdrop-blur-2xl shadow-lg fixed top-16 
        left-1/2 transform -translate-x-1/2
        hover:opacity-100  z-30 text-white hover:scale-105 transition-transform duration-200  "
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="movies_container mt-20 ">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {films.map((film, idx) => (
                        <Cards key={idx} film={film} />
                    ))}
                </div>
            </div>
            <div className="page_shift mt-8 flex align-ceter text-center justify-between">
                
                <button disabled={page === 1} 
                className="bg-[#6f111a] text-white px-4 py-2 rounded-lg mr-2 hover:bg-[#8a2b2b] transition-colors"
                onClick={() => setPage(page - 1)}>
                    Previous
                </button>
                <button className="bg-[#6f111a] text-white px-4 py-2 rounded-lg hover:bg-[#8a2b2b] transition-colors" 
                onClick={() => setPage(page + 1)}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Home;