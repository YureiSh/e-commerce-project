
function OrderSummaryCard({ children, subtotal, discount = 0, discountAmount = 0, shipping, total }) {

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <p className="text-sm font-semibold text-gray-700 mb-4">Order Summary</p>
            <div className="space-y-2.5 text-sm">
                <div className="flex justify-between text-gray-500">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                        <span>Discount ({discount}%)</span>
                        <span>−${discountAmount.toFixed(2)}</span>
                    </div>
                )}
                <div className="flex justify-between text-gray-500">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                {shipping > 0 && (
                    <p className="text-xs text-gray-400">
                        Free shipping on orders over $100
                    </p>
                )}
                <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-gray-900 text-base">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>

            {children}

        </div>
    );
}
export default OrderSummaryCard;