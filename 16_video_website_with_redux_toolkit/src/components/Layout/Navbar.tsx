import lwsLogoSVG from "./../../assets/lws.svg";
import SearchBar from "./SearchBar";

const Navbar = () => {
    return (
        <nav className="bg-slate-100 shadow-md">
            <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
                <a href="/">
                    <img className="h-10" src={lwsLogoSVG} alt="Learn with Sumit" />
                </a>
                <SearchBar />
            </div>
        </nav>
    );
};

export default Navbar;
