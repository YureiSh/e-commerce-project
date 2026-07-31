function CustomPagination({total, limit, onClickFunction, className}) {
    return (
        <div>
            {Array.from({ length: Math.ceil(total / limit) }, (_, i) => (
                <button
                    key={i}
                    onClick={onClickFunction}
                    className={className}
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );
}
export default CustomPagination;



//() => dispatch(setOffset(i * limit))
// `page ${offset === i * limit ? "active" : ""}`