import React, { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import SearchContext from "../Contexts/SearchContext";

export default function SearchBar() {
    const { searchItem, setSearchItem } = useContext(SearchContext);
    const [tempValue, setTempValue] = useState(searchItem); 

    return (
        <div className="w-full max-w-md">
            <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300">
                <span className="px-4 text-gray-400">
                    <CiSearch size={24} />
                </span>
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={tempValue}  
                    onChange={(e) => setTempValue(e.target.value)} 
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            setSearchItem(tempValue); 
                        }
                    }}
                    className="w-full py-3 px-2 text-gray-700 placeholder-gray-400  outline-none   transition"
                />
            </div>
        </div>
    );
}
