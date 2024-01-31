import "./Color.css";
import SideBarInput from "../sidebar-Input/SideBarInput";
import { handleFuncType, sectionProps } from "../../types/appTypes";
import { filterTheColorsProps } from "./colorType";

const filterTheColor: filterTheColorsProps = (arr, name, setterFunc) => {
    const result = arr.filter((ele) => {
        return ele.color === name || name === "All";
    });
    setterFunc((prevState) => ({ ...prevState, colors: result }));
};

function Color({ setFilteresOptions, initialData }: sectionProps) {
    const handleFunc: handleFuncType = (name) => {
        filterTheColor(initialData, name, setFilteresOptions);
    };
    return (
        <div className="mr">
            <h2 className="side-title color-title">Colors</h2>
            <SideBarInput
                text="all"
                typeName="test3"
                className="all"
                checked={true}
                handleClick={() => handleFunc("All")}
            />
            <SideBarInput
                text="black"
                typeName="test3"
                className="black"
                handleClick={() => handleFunc("black")}
            />
            <SideBarInput
                text="blue"
                typeName="test3"
                className="blue"
                handleClick={() => handleFunc("blue")}
            />
            <SideBarInput
                text="red"
                typeName="test3"
                className="red"
                handleClick={() => handleFunc("red")}
            />
            <SideBarInput
                text="green"
                typeName="test3"
                className="green"
                handleClick={() => handleFunc("green")}
            />
            <SideBarInput
                text="white"
                typeName="test3"
                className="white"
                handleClick={() => handleFunc("white")}
            />
        </div>
    );
}

export default Color;
