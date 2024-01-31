import "./Recommended.css";
import RecommendedBtn from "./Btn/RecommendedBtn";
import { handleFuncType, sectionProps } from "../types/appTypes";
import { filterRecommended } from "./recommendedType";
import { useState } from "react";

const filterContent: filterRecommended = (arr, name, setterFunc) => {
    const result = arr.filter((ele) => {
        return ele.company === name || name === "All";
    });
    setterFunc((prevState) => ({ ...prevState, recommended: result }));
};

function Recommended({ setFilteresOptions, initialData }: sectionProps) {
    const [active, setActive] = useState("All");
    const handleClick: handleFuncType = (name) => {
        filterContent(initialData, name, setFilteresOptions);
        setActive(name);
    };

    return (
        <section className="recommended-container">
            <h2>Recommended</h2>
            <div className="btn-container">
                <RecommendedBtn
                    text="All Products"
                    active={active}
                    handleFunc={() => handleClick("All")}
                />
                <RecommendedBtn
                    text="Nike"
                    active={active}
                    handleFunc={() => handleClick("Nike")}
                />{" "}
                <RecommendedBtn
                    text="Adidas"
                    active={active}
                    handleFunc={() => handleClick("Adidas")}
                />{" "}
                <RecommendedBtn
                    text="Puma"
                    active={active}
                    handleFunc={() => handleClick("Puma")}
                />
                <RecommendedBtn
                    text="Vans"
                    active={active}
                    handleFunc={() => handleClick("Vans")}
                />
            </div>
        </section>
    );
}

export default Recommended;
