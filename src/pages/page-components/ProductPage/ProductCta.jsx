import ProductCard from "../../../components/ProductCard";
import { products } from "../../../constants/constants";

function ProductCta() {

    return (
        <section className=" max-w-300 my-0 mx-auto pt-12 pb-12">
            <div className="">
                <h3 className="font-semibold text-secondary mt-3 text-3xl">BESTSELLER PRODUCTS</h3>
                <div className=" border-b border-b-gray-200 pt-6" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-400 m-auto px-16 md:px-0 mt-12">
                {products.map((item) => (
                    <ProductCard key={item.id} item={item} keepColorSelector={false} />
                ))}
            </div>
        </section>
    );
}
export default ProductCta;