import { useParams, Link } from "react-router-dom";
import PageContent from "../layout/PageContent";

import ProductHero from "./page-components/ProductPage/ProductHero";
import ProductMain from "./page-components/ProductPage/ProductMain";
import ProductCta from "./page-components/ProductPage/ProductCta";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../store/actions/productActions";

function ProductPage() {
    const { productId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct(productId));
    }, [productId]);

   

    return (
        <PageContent>
            <ProductHero />
            <ProductMain />
            <ProductCta />
        </PageContent>
    );
}
export default ProductPage;