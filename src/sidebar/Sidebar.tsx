import { useState } from "react";
import { sectionProps } from "../types/appTypes";
import "./Sidebar.css";
import Category from "./category/Category";
import Color from "./color/Color";
import Price from "./price/Price";

function Sidebar({ setFilteresOptions, initialData }: sectionProps) {
    const [openSideBar, setOpenSideBar] = useState(false);
    return (
        <>
            <div
                className={`sidebar ${
                    openSideBar ? "openSideBar" : "closeSideBar"
                }`}
            >
                <div className="logo-container">
                    <h1 className="logo">🛒</h1>
                </div>
                <Category
                    setFilteresOptions={setFilteresOptions}
                    initialData={initialData}
                />
                <Price
                    setFilteresOptions={setFilteresOptions}
                    initialData={initialData}
                />
                <Color
                    setFilteresOptions={setFilteresOptions}
                    initialData={initialData}
                />
            </div>
            <div
                className={`settings`}
                onClick={() => setOpenSideBar((prev) => !prev)}
            >
                {openSideBar ? "❌" : "⚙️"}
            </div>
        </>
    );
}

export default Sidebar;
