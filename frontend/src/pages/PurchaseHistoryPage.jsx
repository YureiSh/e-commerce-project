import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Package } from "lucide-react";
import PageContent from "../layout/PageContent";
import { fetchOrderHistory } from "../store/actions/shoppingCartActions";

function formatDate(value) {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

function formatPrice(value) {
    const amount = Number(value);
    return Number.isNaN(amount) ? "-" : amount.toFixed(2);
}

function EmptyHistory() {
    return (
        <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
                <Package className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">No orders yet</h3>
            <p className="text-sm text-gray-400 mt-1">Your past purchases will show up here.</p>
            <Link to="/shop">
                <button className="mt-6 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-700 transition-colors cursor-pointer">
                    Start Shopping
                </button>
            </Link>
        </div>
    );
}

function LoadingSkeleton() {
    return (
        <div className="space-y-6">
            {[0, 1, 2].map((key) => (
                <div
                    key={key}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 animate-pulse"
                >
                    <div className="flex justify-between mb-5">
                        <div className="h-4 w-24 bg-gray-200 rounded" />
                        <div className="h-4 w-32 bg-gray-100 rounded" />
                    </div>
                    <div className="h-3 w-2/3 bg-gray-100 rounded mb-3" />
                    <div className="h-3 w-1/2 bg-gray-100 rounded" />
                </div>
            ))}
        </div>
    );
}

function OrderCard({ order }) {
    const products = order.products ?? [];
    const itemCount = products.reduce((sum, item) => sum + (item.count ?? 0), 0);

    const addressLine = [order.neighborhood, order.district, order.city]
        .filter(Boolean)
        .join(", ");

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Başlık: sipariş no + tarih */}
            <div className="flex flex-wrap items-center justify-between gap-2 px-6 py-4 bg-gray-50 border-b border-gray-100">
                <div className="flex items-center gap-2">
                    <Package size={16} className="text-primary" />
                    <span className="font-semibold text-secondary">Order #{order.id}</span>
                </div>
                <span className="text-sm text-gray-500">{formatDate(order.orderDate)}</span>
            </div>

            {/* Ürünler */}
            <ul className="divide-y divide-gray-100">
                {products.map((item, index) => (
                    <li
                        key={`${order.id}-${item.productId}-${index}`}
                        className="flex items-center justify-between gap-4 px-6 py-3"
                    >
                        <span className="text-sm text-gray-800">
                            {item.detail?.trim() || `Product #${item.productId}`}
                        </span>
                        <span className="text-sm text-gray-400 shrink-0">x{item.count}</span>
                    </li>
                ))}
                {products.length === 0 && (
                    <li className="px-6 py-3 text-sm text-gray-400">
                        No product details recorded for this order.
                    </li>
                )}
            </ul>

            {/* Teslimat / ödeme / tutar */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 space-y-2">
                <div className="flex justify-between gap-4 text-sm">
                    <span className="text-gray-500 shrink-0">Delivered to</span>
                    <span className="text-gray-800 text-right">
                        {[order.name, order.surname].filter(Boolean).join(" ")}
                        {addressLine && <span className="text-gray-500"> · {addressLine}</span>}
                    </span>
                </div>
                <div className="flex justify-between gap-4 text-sm">
                    <span className="text-gray-500">Payment</span>
                    <span className="text-gray-800">
                        {order.lastFour ? `•••• ${order.lastFour}` : "-"}
                    </span>
                </div>
                <div className="flex justify-between gap-4 pt-2 border-t border-gray-200">
                    <span className="text-sm text-gray-500">
                        Total{itemCount > 0 && ` (${itemCount} item${itemCount > 1 ? "s" : ""})`}
                    </span>
                    <span className="font-semibold text-secondary">
                        {formatPrice(order.price)} $
                    </span>
                </div>
            </div>
        </div>
    );
}

function PurchaseHistoryPage() {
    const dispatch = useDispatch();
    const { orderHistory, orderHistoryLoading } = useSelector((store) => store.shoppingCart);

    useEffect(() => {
        dispatch(fetchOrderHistory());
    }, [dispatch]);

    // Backend sıralama garantisi vermiyor; en yeni sipariş en üstte olsun.
    const orders = [...orderHistory].sort(
        (a, b) => new Date(b.orderDate) - new Date(a.orderDate)
    );

    return (
        <PageContent>
            <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
                <h1 className="text-2xl font-bold text-secondary mb-2">Purchase History</h1>
                <p className="text-sm text-gray-500 mb-8">
                    All the orders you have placed so far.
                </p>

                {orderHistoryLoading ? (
                    <LoadingSkeleton />
                ) : orders.length === 0 ? (
                    <EmptyHistory />
                ) : (
                    <div className="space-y-6">
                        {orders.map((order) => (
                            <OrderCard key={order.id} order={order} />
                        ))}
                    </div>
                )}
            </div>
        </PageContent>
    );
}

export default PurchaseHistoryPage;
