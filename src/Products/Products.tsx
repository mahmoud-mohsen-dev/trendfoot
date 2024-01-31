import "./Products.css";
import Product from "./Product/Product";
import { productsProps } from "./productsType";
import { productType } from "../types/appTypes";

const dataExport = (arr: productType[]) => {
    const arrOfProducts = arr.map((ele) => {
        const result = ele;

        const {
            img,
            title,
            star,
            reviews,
            prevPrice,
            newPrice,
            company,
            color,
            category,
            id,
        } = result;

        return (
            <Product
                img={img}
                title={title}
                star={star}
                reviews={reviews}
                prevPrice={prevPrice}
                newPrice={newPrice}
                company={company}
                color={color}
                category={category}
                key={title + id}
            />
        );
    });

    return arrOfProducts;
};

function Products({ theData }: productsProps) {
    return (
        <section className="products-container">{dataExport(theData)}</section>
    );
}

export default Products;
