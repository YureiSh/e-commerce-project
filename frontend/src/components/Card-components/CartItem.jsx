function CartItem({ count, checked, item, onChecked, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 py-5 border-b border-gray-100 last:border-0">

      <div>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChecked}
          className="w-4 h-4 rounded border-gray-300 accent-gray-900 cursor-pointer shrink-0"
        />
      </div>

      <img
        src={item.imageUrls?.[0]}
        alt={item.name}
        className="w-20 h-20 rounded-xl object-cover    shrink-0 bg-gray-100"
      />

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-400 mt-0.5">{item.description}</p>
        <p className="text-sm font-medium text-gray-700 mt-1">
          ${item.price}
        </p>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-1 py-1">
        <button
          onClick={onDecrease}
          className="w-7 h-7 flex items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 transition-colors text-lg leading-none"
        >
          −
        </button>
        <span className="w-5 text-center text-sm font-medium text-gray-800">
          {count}
        </span>
        <button
          onClick={onIncrease}
          className="w-7 h-7 flex items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 transition-colors text-lg leading-none"
        >
          +
        </button>
      </div>

      {/* Subtotal */}
      <div className="w-20 text-right">
        <span className="font-semibold text-gray-900">
          ${(item.price * count).toFixed(2)}
        </span>
      </div>

      {/* Remove */}
      <button
        onClick={() => onRemove(item.id)}
        className="bg-red-500 md:bg-white  p-1.5 text-gray-300 hover:text-red-400 transition-colors rounded-md hover:bg-red-50"
        aria-label="Remove item"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6l-1 14H6L5 6" />
          <path d="M10 11v6M14 11v6" />
          <path d="M9 6V4h6v2" />
        </svg>
      </button>
    </div>
  );
}
export default CartItem