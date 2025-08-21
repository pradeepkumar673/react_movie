import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div className="flex gap-4 flex-row justify-between items-center
         bg-[#6f111a] text-gray-200 py-3 w-full fixed px-5 text-2xl font-bold
         shadow-2xl z-50">
            <Link to="/">Zynema</Link>
            <Link to="/watchlist">Watchlist</Link>
        </div>
    )
}

export default Navbar