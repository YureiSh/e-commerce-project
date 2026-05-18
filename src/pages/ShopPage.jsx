import PageContent from "../layout/PageContent";
import CategoryBanner from "./page-components/ShopPage/CategoryBanner";
import ShopProductList from "./page-components/ShopPage/ShopProductList";

function ShopPage() {
    return (
        <>
            <PageContent>
                <CategoryBanner />
                <ShopProductList />
            </PageContent>
        </>
    );
}
export default ShopPage;