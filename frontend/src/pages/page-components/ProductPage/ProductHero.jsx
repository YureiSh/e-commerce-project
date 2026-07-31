import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import StarReview from "../../../components/UI-components/StarReview";
import ProductActionPanel from "../../../components/UI-components/ProductActionPanel";
import { carouselImages } from "../../../constants/constants";
import ImageCarouselwPreview from "../../../components/Image-components/ImageCarouselwPreview";
import CustomProductLoading from "../../../components/Spinner-components/CustomProductLoading";
import { useSelector } from "react-redux";

function ProductHero() {
    const { product, loading } = useSelector((store) => store.product);
    if(loading) return <CustomProductLoading/>;
    return (
        <section className="bg-[#FAFAFA] pt-4 pb-16 lg:pb-32">
            <div className="max-w-400 m-auto pt-8 pb-8 flex justify-between">
                <div className="text-[#737373] flex px-8 lg:px-0">
                    <Link className="text-secondary" to="/" >Home</Link>
                    <ChevronRight />
                    <Link to="/shop" >Shop</Link>
                </div>
                
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-24">
                <div id="productImgCarousel" className="max-h-120" >
                    <ImageCarouselwPreview images={product?.images} />
                </div>

                <div id="productDetails" className=" flex flex-col font-semibold text-[#737373] px-6 lg:px-0" >
                    <div className="flex flex-col gap-4 border-b mb-12">
                        <h4 className="text-2xl text-secondary" >{product?.name}</h4>
                        <StarReview rating={product.rating} reviews={product.sell_count} />
                        <h3 className="text-secondary text-3xl" >$ {product?.price} </h3>
                        <h6 >Availability  : {product?.stock > 0 ? <span className="text-primary">In Stock </span> : <span className="text-red-400">Currently not in stock </span> }  </h6>
                        <p className="max-w-120" > {product?.description} </p>
                        <div className="p-4"></div>
                    </div>

                    <ProductActionPanel />

                </div>

            </div>

        </section>
    );
}
export default ProductHero;