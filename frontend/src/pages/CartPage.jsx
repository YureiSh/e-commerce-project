import { useState } from "react";
import PageContent from "../layout/PageContent";
import CartItem from '../components/CartItem';
import { Link } from "react-router-dom";
import CouponDiv from "./page-components/CartPage/CouponDiv";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCart, increaseCart, removeCart, setOrderProducts, toggleCheckCart } from "../store/actions/shoppingCartActions";
import OrderSummaryCard from "./page-components/CartPage/OrderSummaryCard";

function EmptyCart() {
    return (
        <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Your cart is empty</h3>
            <p className="text-sm text-gray-400 mt-1">Add some items to get started.</p>
            <Link to="/shop">
                <button className="mt-6 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-700 transition-colors">
                    Continue Shopping
                </button>
            </Link>
        </div>
    );
}

function CartPage() {
    const dispatch = useDispatch();
    const { cart } = useSelector((store) => store.shoppingCart);

    const [coupon, setCoupon] = useState("");
    const [discount, setDiscount] = useState(0);

    const handleApplyCoupon = () => {
        if (coupon.trim().toUpperCase() === "SAVE10") {
            setDiscount(10);
        } else {
            setDiscount(0);
            alert("Invalid coupon code.");
        }
    };

    const subtotal = cart.filter(item => item.checked)
        .reduce((sum, item) => sum + item.product.price * item.count, 0); const shipping = subtotal > 100 ? 0 : 9.99;
    const discountAmount = (subtotal * discount) / 100;
    const total = subtotal - discountAmount + shipping;

    const handleProceed = () => {
        const selectedProducts = cart.filter(item => item.checked);

        const price = selectedProducts.reduce(
            (sum, item) => sum + item.product.price * item.count,
            0
        );

        dispatch(
            setOrderProducts({
                order_date: new Date().toISOString().slice(0, 19),
                card_cvv: 321,
                price,
                products: selectedProducts.map(item => ({
                    productId: item.product.id,
                    count: item.count,
                    detail: item.product.name ?? ""
                }))
            })
        );
    };

    return (
        <PageContent>
            <section className="max-w-5xl mx-auto px-4 py-10">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">My Cart</h1>
                    <p className="text-sm text-gray-400 mt-1">
                        {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
                    </p>
                </div>

                {cart.length === 0 ? (
                    <EmptyCart />
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* cart */}
                        <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm px-6">
                            {cart.map((item) => (
                                <CartItem
                                    key={item.product.id}
                                    item={item.product}
                                    count={item.count}
                                    checked={item.checked}
                                    onChecked={() => dispatch(toggleCheckCart(item.product.id))}
                                    onDecrease={() => dispatch(decreaseCart(item.product.id))}
                                    onIncrease={() => dispatch(increaseCart(item.product.id))}
                                    onRemove={() => dispatch(removeCart(item.product.id))}
                                />
                            ))}
                        </div>

                        {/* Summary */}
                        <div className="lg:w-80 space-y-4">
                            <CouponDiv discount={discount} coupon={coupon} setCoupon={setCoupon} handleApplyCoupon={handleApplyCoupon} />

                            {/* Order Summary */}
                            <OrderSummaryCard subtotal={subtotal} discount={discount} discountAmount={discountAmount}
                                shipping={shipping} total={total} >
                                <Link to="/cart/order">
                                    <button
                                        onClick={handleProceed}
                                        className="mt-5 w-full py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-700 transition-colors text-sm">
                                        Proceed to Checkout →
                                    </button>
                                </Link>
                                <Link to="/">
                                    <button className="mt-2 w-full py-2.5 text-sm text-gray-500 hover:text-gray-800 transition-colors">
                                        Continue Shopping
                                    </button>
                                </Link>
                            </OrderSummaryCard>

                        </div>
                    </div>
                )}
            </section>
        </PageContent>
    );
}

export default CartPage;

