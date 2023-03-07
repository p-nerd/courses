import { useDispatch } from "react-redux";
import { setSearchString } from "../../features/common/commonSlice";
import searchSVG from "./../../assets/search.svg";

const SearchBar = () => {
    const dispatch = useDispatch();
    
    const handleSearchChange = (value: string) => {
        dispatch(setSearchString(value))
    }

    return (
        <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
            <form>
                <input
                    className="outline-none border-none mr-2"
                    type="search"
                    name="search"
                    placeholder="Search"
                    onChange={e => handleSearchChange(e.target.value)}
                />
            </form>
            <img className="inline h-4 cursor-pointer" src={searchSVG} alt="Search" />
        </div>
    );
};

export default SearchBar;
