function CouponDiv({discount, coupon, setCoupon, handleApplyCoupon }) {
    return (
        <>
            {/* Coupon */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <p className="text-sm font-semibold text-gray-700 mb-3">Coupon Code</p>
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                        placeholder='Try "SAVE10"'
                        className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                    />
                    <button
                        onClick={handleApplyCoupon}
                        className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        Apply
                    </button>
                </div>
                {discount > 0 && (
                    <p className="text-xs text-green-600 mt-2 font-medium">
                        ✓ {discount}% discount applied!
                    </p>
                )}
            </div>
        </>
    );
}
export default CouponDiv;