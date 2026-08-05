
function LikedDropdown({children, className}) {

    return (
        <div className={`absolute top-full right-0 z-11 
        w-75 lg:w-90 mt-8 lg:mt-3 bg-white 
        border rounded-md border-gray-400 ${className}`}>
            {children}
        </div>
    );
}
export default LikedDropdown;