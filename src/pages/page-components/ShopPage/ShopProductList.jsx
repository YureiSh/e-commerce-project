import { useEffect, useRef, useState } from "react";
import ProductCard from "../../../components/ProductCard";
import { productsExtended } from "../../../constants/constants";
import { ChevronLeft, ChevronRight, ListCheck, VectorSquare } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { fetchProducts, setOffset } from "../../../store/actions/productActions";

function ShopProductList() {
    const [view, setView] = useState("imgView");
    const [sort, setSort] = useState("");
    const [query, setQuery] = useState("");
    const queryRef = useRef("");

    const [isQueryVisible, setIsQueryVisible] = useState(false);
    const { productList, total, loading, limit, offset } = useSelector((store) => store.product);
    const { categoryId } = useParams();

    const dispatch = useDispatch();

    const isFirstRender = useRef(true);
    const prevCategoryId = useRef(categoryId);

    useEffect(() => {
        let currentSort = sort;
        let currentQuery = query;
        let currentOffset = offset;

        if (prevCategoryId.current !== categoryId) {
            currentSort = "";
            currentQuery = "";
            currentOffset = 0;

            setSort("");
            setQuery("");
            setIsQueryVisible(false);
            if (queryRef.current) queryRef.current.value = "";
            dispatch(setOffset(0));

            prevCategoryId.current = categoryId;
        }

        const params = { category: categoryId };
        if (currentSort) params.sort = currentSort;
        if (currentQuery) params.filter = currentQuery;
        if (limit) params.limit = limit;
        if (currentOffset >= 0) params.offset = currentOffset;

        dispatch(fetchProducts(params));
    }, [sort, query, limit, offset, categoryId, dispatch]);

    return (

        <>
            <section>
                <div className="flex justify-around items-center pt-8">
                    <div><h6>Showing all {total} results</h6></div>

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

                    <div className="flex gap-4" >
                        <select value={sort} onChange={(e) => {
                            dispatch(setOffset(0))
                            setSort(e.target.value)
                        }} name="sort" id="sortSelect">
                            <option value="price:asc">Fiyat (Artan)</option>
                            <option value="price:desc">Fiyat (Azalan)</option>
                            <option value="rating:asc">Yeni Gelenler</option>
                            <option value="rating:desc">Çok Satanlar</option>
                        </select>
                        {isQueryVisible ? (
                            <div id="queryInput" className="flex items-center border border-[#737373] rounded-md">
                                <input ref={queryRef} className="appereanceDel mx-3" type="text" />
                                <FaMagnifyingGlass className="text-[#737373] mx-3" size={16} />
                            </div>
                        ) : null}
                        <button onClick={(e) => {
                            if (isQueryVisible) {
                                dispatch(setOffset(0))
                                setQuery(queryRef.current.value);
                                console.log(query);
                            } else {
                                setIsQueryVisible(true);
                            }
                        }} className="px-6 py-3 text-white rounded-md bg-primary cursor-pointer">Filter</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-400 m-auto px-16 md:px-0 mt-12 pb-12">
                    {view === "imgView" ? (productList.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))) : null}
                </div>

                <div className="flex justify-center gap-3 pb-12">
                    <button
                        disabled={offset === 0}
                        onClick={() => dispatch(setOffset(Math.max(0, offset - limit)))}
                        className="disabled:opacity-30"
                    >
                        <ChevronLeft />
                    </button>
                    {Array.from({ length: Math.ceil(total / limit) }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => dispatch(setOffset(i * limit))}
                            className={`page ${offset === i * limit ? "active" : ""}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        disabled={offset + limit >= total}
                        onClick={() => dispatch(setOffset(offset + limit))}
                        className="disabled:opacity-30"
                    >
                        <ChevronRight />
                    </button>
                </div>

            </section>
        </>
    );
}
export default ShopProductList;