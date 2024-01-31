import { handleFuncType, sectionProps } from "../../types/appTypes";
import SideBarInput from "../sidebar-Input/SideBarInput";
import "./Category.css";
import { filterTheCategoryProps } from "./categoryType";

const filterTheData: filterTheCategoryProps = (arr, name, setterFunc) => {
    const result = arr.filter((ele) => {
        return ele.category === name || name === "All";
    });
    setterFunc((prevState) => ({ ...prevState, category: result }));
};

function Category({ setFilteresOptions, initialData }: sectionProps) {
    const handleFunc: handleFuncType = (name) => {
        filterTheData(initialData, name, setFilteresOptions);
    };
    return (
        <div>
            <h2 className="side-title">Category</h2>
            <div className="labels-container">
                <SideBarInput
                    text="all"
                    typeName="test"
                    checked={true}
                    handleClick={() => handleFunc("All")}
                />
                <SideBarInput
                    text="sneakers"
                    typeName="test"
                    handleClick={() => handleFunc("sneakers")}
                />
                <SideBarInput
                    text="flats"
                    typeName="test"
                    handleClick={() => handleFunc("flats")}
                />
                <SideBarInput
                    text="sandals"
                    typeName="test"
                    handleClick={() => handleFunc("sandals")}
                />
                <SideBarInput
                    text="heels"
                    typeName="test"
                    handleClick={() => handleFunc("heels")}
                />
            </div>
        </div>
    );
}

export default Category;
