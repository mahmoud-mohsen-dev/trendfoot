import { AiFillStar } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import { productElementType } from "./productType";

function Product({
    img,
    title,
    star,
    reviews,
    prevPrice,
    newPrice,
}: productElementType) {
    return (
        <section className="product">
            <img src={img} alt="bag" className="product-img"></img>
            <section className="product-details">
                <h3 className="product-title">{title}</h3>
                <section className="product-reviews">
                    {star}
                    {star}
                    {star}
                    {star}
                    <AiFillStar className="black" />
                    <span className="review-rate">{reviews}</span>
                </section>
                <section className="product-price">
                    <del>{prevPrice}</del>
                    <div className="price">{newPrice}</div>
                    <BsFillBagFill className="bag-icon" />
                </section>
            </section>
        </section>
    );
}

export default Product;
