
function ProductCard({ item, keepColorSelector = true }) {

    return (
        <div className="text-center">
            <img src={item.images?.[0].url} className="w-full transition hover:scale-105" />

            <h3 className="font-semibold mt-6"> {item.name} </h3>
            <p className="text-gray-500 text-sm mt-3"> {item.description} </p>

            <div className="mt-3">
                <span className="line-through text-gray-400">${item.oldPrice} </span>
                <span className="text-green-500 ml-2">${item.price}</span>
            </div>

            {keepColorSelector ? 
            <div className="flex justify-center gap-2 mt-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                <span className="w-3 h-3 bg-black rounded-full"></span>
            </div> : null}

        </div>
    );
}
export default ProductCard;

/*
            {products.map((item) => (
                <div key={item.id} className="text-center">
                    <img src={item.img} className="w-full" />

                    <h3 className="font-semibold mt-6"> {item.title} </h3>
                    <p className="text-gray-500 text-sm mt-3"> {item.department} </p>

                    <div className="mt-3">
                        <span className="line-through text-gray-400">${item.oldPrice} </span>
                        <span className="text-green-500 ml-2">${item.price}</span>
                    </div>

                    <div className="flex justify-center gap-2 mt-2">
                        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-black rounded-full"></span>
                    </div>
                </div>
            ))}

*/