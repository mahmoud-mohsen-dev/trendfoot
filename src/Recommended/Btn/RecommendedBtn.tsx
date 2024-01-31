function RecommendedBtn({
    text,
    active,
    handleFunc,
}: {
    text: string;
    active: string;
    handleFunc: () => void;
}) {
    const id = text === "All Products" ? "All" : text;
    const isActive = active === id;

    return (
        <button
            className={`btn ${isActive ? "active" : ""}`}
            onClick={() => handleFunc()}
        >
            {text}
        </button>
    );
}

export default RecommendedBtn;
