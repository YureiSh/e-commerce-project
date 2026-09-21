import { Link } from "react-router-dom";
<<<<<<< HEAD:frontend/src/components/Card-components/ProductCard.jsx
import { useSlugify } from "../../utils/useSlugify";
import { useLocation } from "react-router-dom";
=======
import { useSlugify } from "../utils/useSlugify";
>>>>>>> 805430605e94d228a9476b372c99c28fa4fae312:frontend/src/components/ProductCard.jsx

function ProductCard({ item, keepColorSelector = true }) {
    window.scrollTo(0, 0);
   
    return (
        <div className="text-center">
            
            <Link to={`/shop/${useSlugify(item.name)}/${item.id}`}>
                <img src={item.imageUrls?.[0] || "https://picsum.photos/seed/prod8a/500/600"} className="w-full transition hover:scale-105" />
            </Link>

            <h3 className="font-semibold mt-6"> {item.name} </h3>
            <p className="text-gray-500 text-sm mt-3"> {item.description} </p>

            <div className="mt-3">
                <span className="line-through text-gray-400">{item.oldPrice ? `$ ${item.oldPrice}` : null} </span>
                <span className="text-green-500 ml-2">${item.price}</span>
            </div>

            {keepColorSelector ? 
            <div className="flex justify-center gap-2 mt-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full cursor-pointer customImg"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full cursor-pointer customImg"></span>
                <span className="w-3 h-3 bg-orange-500 rounded-full cursor-pointer customImg"></span>
                <span className="w-3 h-3 bg-black rounded-full cursor-pointer customImg"></span>
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