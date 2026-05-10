import { Link } from "react-router-dom";
import CategoryCards from "../../../components/CategoryCards";

export const categories = [
    { id: 1, url: "https://images.unsplash.com/photo-1546197244-cdd3a3fc80a1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Jackies", count: 1 },
    { id: 2, url: "https://images.unsplash.com/photo-1722311320703-f9062dddb164?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "T-shirt", count: 2 },
    { id: 3, url: "https://plus.unsplash.com/premium_photo-1757341554138-e9e38dafaa4e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Boots", count: 3 },
    { id: 4, url: "https://plus.unsplash.com/premium_photo-1727427850285-bf6715d4dcc4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Hats", count: 4 },
    { id: 5, url: "https://images.unsplash.com/photo-1761839258623-e232e15f7ff3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Jeans", count: 5 },
]

// 
function CategoryBanner() {

    return (
        <>
            <section className="bg-[#FAFAFA]">
                <div className="max-w-400 m-auto pt-8 pb-8 flex justify-between">
                    <h3 className="font-semibold text-secondary text-3xl">Shop</h3>
                    <div className="flex gap-4">
                        <Link className="font-semibold text-secondary" to="/"> Home </Link>
                        <h6 className="font-semibold text-[#BDBDBD]">Shop</h6>
                    </div>
                </div>
                <div className="flex gap-4 justify-center">
                    {categories.map((item) => (
                        <CategoryCards key={item.id} item={item} />
                    ))}
                </div>
            </section>
        </>
    );
}
export default CategoryBanner;