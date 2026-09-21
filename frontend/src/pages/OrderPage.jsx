import { useState } from "react";
import PageContent from "../layout/PageContent";
import AddressTab from "./page-components/OrderPage/tabs/AddressTab";
import PaymentTab from "./page-components/OrderPage/tabs/PaymentTab";
import OrderSummaryCard from "./page-components/CartPage/OrderSummaryCard";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, resetCart, setOrder } from "../store/actions/shoppingCartActions";
import { useHistory } from "react-router-dom";


const tabs = [
    { id: "address", label: "Address Information", component: <AddressTab /> },
    { id: "payment", label: "Payment Information", component: <PaymentTab /> },
];

function OrderPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState("address");
    const activeComponent = tabs.find(t => t.id === activeTab).component;

    const { cart, order } = useSelector((store) => store.shoppingCart);
    const discount = 0;

    const subtotal = cart.reduce((sum, i) => sum + i.product.price * i.count, 0);
    const shipping = subtotal > 100 ? 0 : 9.99;
    const discountAmount = (subtotal * discount) / 100;
    const total = subtotal - discountAmount + shipping;

    async function nextPage() {
        if (activeTab === "address") {
            setActiveTab("payment");
        } else {
            const { phone, surname, lastFour, nameOnCard } = order;
            if (!phone || !surname || !lastFour || !nameOnCard?.trim()) {
                alert("Lütfen adres ve ödeme bilgilerini eksiksiz doldurun.");
                return;
            }
            try {
                const orderResult = await dispatch(createOrder(order));
                dispatch(setOrder({}));
                dispatch(resetCart());
                history.push("/congrats", { order: orderResult });  // state ile taşı
            } catch {
                // toast zaten createOrder içinde gösterildi, burada bir şey yapmaya gerek yok
            }
        }
    }

    return (
        <PageContent>
            <section className="flex flex-col lg:flex-row gap-4 max-w-400 mx-auto px-4 py-10">
                <div className="flex-2" >
                    <div className="flex justify-baseline gap-8 border-b border-gray-200 mb-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                type="button"
                                onClick={() => setActiveTab(tab.id)}
                                className={`pb-3 text-sm font-medium cursor-pointer transition-colors duration-200 ${activeTab === tab.id ? "border-b  text-secondary" : "text-gray-400"}`}>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    {activeComponent}
                </div>
                <div className="flex-1 my-auto" >
                    <OrderSummaryCard subtotal={subtotal} shipping={shipping} total={total} >
                        <button className="p-2 mt-2 bg-secondary rounded-2xl text-white cursor-pointer"
                            onClick={() => nextPage()}
                        >
                            {activeTab === "payment" ? "Order" : "Save and continue"}
                        </button>
                    </OrderSummaryCard>
                </div>
            </section>
        </PageContent>
    );
}
export default OrderPage;