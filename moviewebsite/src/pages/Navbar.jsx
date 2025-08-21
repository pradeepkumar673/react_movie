import { useContext } from "react"
import { Link } from "react-router-dom"
import { WatchlistContext } from "../context/WatchlistContext"
const Navbar = () => {
    const { watchlist } = useContext(WatchlistContext);
    return (
        <div className="flex gap-4 flex-row justify-between items-center
         bg-[#6f111a] text-gray-200 py-3 w-full fixed px-5 text-2xl font-bold
         shadow-2xl z-50">
            <Link to="/">Zynema</Link>
            <Link to="/watchlist">Watchlist
                <span className="text-red-500 ml-2">{watchlist.length}</span></Link>
        </div>
    )
}

export default Navbar