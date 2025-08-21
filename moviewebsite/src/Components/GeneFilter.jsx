function GeneFilter() {
    return (
        <div >
            <select name="genre" id="" className="mb-4 px-3 py-1 rounded-xl w-20 border-2 border-[#000000]
        bg-[#6f111a] opacity-85 backdrop-blur-2xl shadow-lg fixed top-28 
        left-1/2 transform -translate-x-1/2 
        hover:opacity-100 transition-opacity duration-75 z-30 text-white">
                <option value="All">All</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Horror">Horror</option>
                <option value="Thriller">Thriller</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Animation">Animation</option>
                <option value="Family">Family</option>
                <option value="Mystery">Mystery</option>
                <option value="Documentary">Documentary</option>
            </select>
        </div>
    )
}

export default GeneFilter