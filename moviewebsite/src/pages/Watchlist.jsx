import GeneFilter from "../Components/GeneFilter"

const Watchlist = () => {
    return (
        <div className="watchlist_container p-4 pt-16">
            <input
                type="text"
                placeholder="🪄 Search for any movies"
                className="px-3 py-1 rounded-xl w-1/3 md:w-1/2 lg:w-1/3 border-2 border-[#000000]
        bg-[#6f111a] opacity-85 backdrop-blur-2xl shadow-lg fixed top-16 
        left-1/2 transform -translate-x-1/2
        hover:opacity-100  z-30 text-white hover:scale-105 transition-transform duration-200"

            />
            <GeneFilter/>

        </div>

    )
}

export default Watchlist