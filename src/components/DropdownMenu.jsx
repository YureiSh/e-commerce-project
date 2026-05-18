import { useState, useRef, useEffect } from "react";
import { User, LogOut, ShoppingBag, Heart, Settings, ChevronDown, ChevronUp } from "lucide-react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutUser } from "../store/actions/clientActions";
import { toast } from "react-toastify";
import { ACCESS_TOKEN_KEY } from "../constants/constants";

function DropdownMenu({dropdownOpen, setDropdownOpen, dropdownRef }) {
    const history = useHistory();
    const dispatch = useDispatch(); 

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        dispatch(logOutUser());
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        toast.info("Logging out!");
        setTimeout(() => history.push("/"), 1500);
    }

    return (
        <>

            <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setDropdownOpen(prev => !prev)}
                    className="flex items-center gap-2 cursor-pointer"
                >
                    {dropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {dropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-1">
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-50"
                        >
                            <LogOut size={14} /> Logout
                        </button>
                    </div>
                )}
            </div>

        </>
    );
}
export default DropdownMenu;