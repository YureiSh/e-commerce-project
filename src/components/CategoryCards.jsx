
function CategoryCards({ item }) {

    return (
        <>
            <div className="min-w-57.5 min-h-55 customImg" style={{ backgroundImage: `url(${item.url})` }} >
                <div className="flex flex-col justify-center items-center h-full text-white">
                    <div className="shadow-2xl p-5 bg-black/40 text-center">
                        <p className="font-semibold"> {item.title} </p>
                        <p> {item.count} items </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default CategoryCards;