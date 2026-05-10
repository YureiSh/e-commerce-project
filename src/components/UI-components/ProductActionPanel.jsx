import { Eye, Heart, ShoppingCart } from "lucide-react";

const colors = ["#29ABE2", "#4CAF50", "#FF6B35", "#1B2A4A"];

function ProductActionPanel({ }) {

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
                    <button className="small-icon-button"> <Heart /> </button>
                    <button className="small-icon-button "> <ShoppingCart /> </button>
                    <button className="small-icon-button "> <Eye /> </button>
                </div>
            </div>
        </div>
    );
}
export default ProductActionPanel;