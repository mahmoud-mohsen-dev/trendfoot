import "./Price.css";
import SideBarInput from "../sidebar-Input/SideBarInput";
import { filterThePriceProps, priceHandleFuncType } from "./priceType";
import { sectionProps } from "../../types/appTypes";

const filterThePrice: filterThePriceProps = (
    arr,
    valueMin,
    setterFunc,
    valueMax
) => {
    const result = arr.filter((ele) => {
        return (
            valueMin === "All" ||
            (Number(ele.newPrice) > 150 && valueMin >= 150) ||
            (valueMax &&
                Number(ele.newPrice) >= valueMin &&
                Number(ele.newPrice) <= valueMax)
        );
    });
    setterFunc((prevState) => ({ ...prevState, price: result }));
};

function Price({ setFilteresOptions, initialData }: sectionProps) {
    const handleFunc: priceHandleFuncType = (name, maxValue) => {
        filterThePrice(initialData, name, setFilteresOptions, maxValue);
    };
    return (
        <div>
            <h2 className="side-title price-title">Price</h2>
            <SideBarInput
                text="all"
                typeName="test2"
                checked={true}
                handleClick={() => handleFunc("All")}
            />
            <SideBarInput
                text="$0 - $50"
                typeName="test2"
                handleClick={() => handleFunc(0, 50)}
            />
            <SideBarInput
                text="$50 - $100"
                typeName="test2"
                handleClick={() => handleFunc(50, 100)}
            />
            <SideBarInput
                text="$100 - $150"
                typeName="test2"
                handleClick={() => handleFunc(100, 150)}
            />
            <SideBarInput
                text="Over $150"
                typeName="test2"
                handleClick={() => handleFunc(151)}
            />
        </div>
    );
}

export default Price;
