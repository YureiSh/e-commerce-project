import { useEffect, useRef, useState } from "react";
import ProductCard from "../../../components/Card-components/ProductCard";
import { ChevronLeft, ChevronRight, LayoutGrid, List } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useParams, useLocation, Link } from "react-router-dom";
import { fetchProducts, setOffset } from "../../../store/actions/productActions";
import { slugify } from "../../../utils/slugify";

function ShopProductList() {
    const [view, setView] = useState("imgView");
    const [sort, setSort] = useState("");
    const [query, setQuery] = useState("");
    const queryRef = useRef("");

    const {pathname} = useLocation();

    const [isQueryVisible, setIsQueryVisible] = useState(false);
    const { productList, total, limit, offset } = useSelector((store) => store.product);
    const { categoryId } = useParams();

    const dispatch = useDispatch();

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
                <div className="flex flex-col lg:flex-row gap-6 justify-around items-center pt-8">
                    <div><h6>Showing all {total} results</h6></div>

                    <div className="">
                        <div className="flex gap-4 items-center">
                            <h6>Views: </h6>
                            <button className="p-3 border rounded-md" onClick={() => setView("imgView")}>
                                <div><LayoutGrid /></div>
                            </button>
                            <button className="p-3 border rounded-md" onClick={() => setView("listView")}>
                                <div><List /></div>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4" >
                        <select value={sort} onChange={(e) => {
                            dispatch(setOffset(0))
                            setSort(e.target.value)
                        }} name="sort" id="sortSelect">
                            <option value="" >Sort</option>
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
                        <button onClick={() => {
                            if (isQueryVisible) {
                                dispatch(setOffset(0))
                                setQuery(queryRef.current.value);
                            } else {
                                setIsQueryVisible(true);
                            }
                        }} className="px-6 py-3 text-white rounded-md bg-primary cursor-pointer">Filter</button>
                    </div>
                </div>

                {productList ? (
                    view === "imgView" ? (
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-400 m-auto px-16 md:px-0 mt-12 pb-12">
                            {productList.map((item) => (
                                <ProductCard key={item.id} item={item} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col gap-6 max-w-300 m-auto px-16 md:px-0 mt-12 pb-12">
                            {productList.map((item) => (
                                <Link key={item.id} to={`${pathname}/${slugify(item.name)}/${item.id}`}>
                                    <div
                                        
                                        className="flex flex-col sm:flex-row gap-6 border border-[#e5e5e5] rounded-md p-4 hover:shadow-md transition"
                                    >
                                        <img
                                            src={item.imageUrls?.[0] ?? item.images?.[0] ?? item.image}
                                            alt={item.name}
                                            className="w-full sm:w-48 h-48 object-cover rounded-md"
                                        />
                                        <div className="flex flex-col justify-center gap-2">
                                            <h5 className="font-bold text-[#252b42]">{item.name}</h5>
                                            <p className="text-[#737373] text-sm line-clamp-3">
                                                {item.description}
                                            </p>
                                            <span className="font-bold text-primary">
                                                {item.price} $
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )
                ) : (
                    <p className="text-center pt-12 mb-12">Loading...</p>
                )}

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