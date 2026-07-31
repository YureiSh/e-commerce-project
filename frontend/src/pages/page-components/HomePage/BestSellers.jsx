import ProductCard from "../../../components/ProductCard";
import { products } from "../../../constants/constants";

function BestSellers() {

    return (
        <section className="pt-12 pb-12">
            <div className="text-center">
                <h4 className="font-semibold text-[#737373] mt-3">Featured Products</h4>
                <h3 className="font-bold text-2xl text-secondary mt-3">BESTSELLER PRODUCTS</h3>
                <p className="font-semibold text-md text-[#737373] mt-3">Problems trying to resolve the conflict between </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-400 m-auto px-16 md:px-0 mt-12">
                {products.map((item) => (
                    <ProductCard key={item.id} item={item}/>
                ))}
            </div>
        </section>
    );
}
export default BestSellers;