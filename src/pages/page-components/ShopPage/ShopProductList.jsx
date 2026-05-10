import { useState } from "react";
import ProductCard from "../../../components/ProductCard";
import { productsExtended } from "../../../constants/constants";
import { ChevronLeft, ChevronRight, ListCheck, VectorSquare } from "lucide-react";

function ShopProductList() {
    const [view, setView] = useState("imgView");

    return (

        <>
            <section>
                <div className="flex justify-around items-center pt-8">
                    <div><h6>Showing all {productsExtended.length} results</h6></div>

                    <div className="">
                        <div className="flex gap-4 items-center">
                            <h6>Views: </h6>
                            <button className="p-3 border" onClick={() => setView("imgView")}>
                                <div><VectorSquare /></div>
                            </button>
                            <button className="p-3 border" onClick={() => setView("listView")}>
                                <div><ListCheck /></div>
                            </button>
                        </div>
                    </div>

                    <div>
                        <div></div>
                        <div className="px-6 py-3 text-white rounded-md bg-primary">Filter</div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-400 m-auto px-16 md:px-0 mt-12 pb-12">
                    {view === "imgView" ? productsExtended.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    )) : null}
                </div>

                <div className="flex justify-center gap-3 pb-12">
                    <button><ChevronLeft /></button>
                    <div className="pagination">
                        <button className="page">1</button>
                        <button className="page active">2</button>
                        <button className="page">3</button>
                    </div>

                    <button><ChevronRight /></button>
                </div>

            </section>
        </>
    );
}
export default ShopProductList;