import { useParams, Link } from "react-router-dom";
import PageContent from "../layout/PageContent";

import ProductHero from "./page-components/ProductPage/ProductHero";
import ProductMain from "./page-components/ProductPage/ProductMain";
import ProductCta from "./page-components/ProductPage/ProductCta";

function ProductPage() {
    const { id } = useParams();

    return (
        <PageContent>
            <ProductHero />
            <ProductMain />
            <ProductCta />
        </PageContent>
    );
}
export default ProductPage;