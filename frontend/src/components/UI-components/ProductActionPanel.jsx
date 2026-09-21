import { Eye, Heart, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../store/actions/shoppingCartActions";
import { setLiked } from "../../store/actions/clientActions"; // liked action'ın nerede ise

const colors = ["#29ABE2", "#4CAF50", "#FF6B35", "#1B2A4A"];

function ProductActionPanel({ }) {

    const dispatch = useDispatch();
    const { product } = useSelector((store) => store.product);
    const {liked} = useSelector((store) => store.client);
    const { cart } = useSelector((store) => store.shoppingCart);
    const isProductCarted = cart.find(item => item.product.id === product.id);
    const isProductLiked = liked.some(item => item.id === product.id);

    return (
        <div>
            <div className="flex gap-3 mb-6">
                {colors.map((color) => (
                    <button
                        key={color}
                        className="w-8 h-8 rounded-full border-2 border-transparent hover:border-gray-300 transition"
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>
            <div className="flex gap-3">
                <button className="text-white bg-primary px-4 py-3 rounded-md cursor-pointer hover:bg-primary/70" >
                    Select Options
                </button>
                <div className=" flex gap-3 items-center ">
                    <button
                        onClick={() => dispatch(setLiked(product))}
                        className="small-icon-button">
                        <Heart className={isProductLiked ? "fill-red-500 text-red-500" : ""} />
                    </button>
                    <button
                        onClick={() => dispatch(setCart({ count: 1, checked: true, product: product }))}
                        className="small-icon-button ">
                        <ShoppingCart className={isProductCarted ? "fill-[#737373]" : ""} />
                    </button>
                </div>
            </div>
        </div>
    );
}
export default ProductActionPanel;