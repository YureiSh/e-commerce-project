import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ImageCarouselwPreview from "../../../components/ImageCarouselwPreview";
import StarReview from "../../../components/UI-components/StarReview";
import ProductActionPanel from "../../../components/UI-components/ProductActionPanel";
import { carouselImages } from "../../../constants/constants";


function ProductHero() {

    return (
        <section className="bg-[#FAFAFA] pt-4 pb-16 lg:pb-32">
            <div className="max-w-400 m-auto pt-8 pb-8 flex justify-between">
                <div className="text-[#737373] flex ">
                    <Link className="text-secondary" to="/" >Home</Link>
                    <ChevronRight />
                    <span>Shop</span>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-24">
                <div id="productImgCarousel" className="max-h-120" >
                    <ImageCarouselwPreview images={carouselImages} />
                </div>

                <div id="productDetails" className=" flex flex-col font-semibold text-[#737373]" >
                    <div className="flex flex-col gap-4 border-b mb-12">
                        <h4 className="text-2xl text-secondary" >Floating Phone</h4>
                        <StarReview />
                        <h3 className="text-secondary text-3xl" >$1,139.33</h3>
                        <h6 >Availability  : <span className="text-primary">In Stock </span></h6>
                        <p >Met minim Mollie non desert Alamo est sit cliquey dolor <br /> do met sent. RELIT official consequent door ENIM RELIT Mollie. <br /> Excitation venial consequent sent nostrum met.</p>
                        <div className="p-4"></div>
                    </div>

                    <ProductActionPanel />

                </div>

            </div>

        </section>
    );
}
export default ProductHero;