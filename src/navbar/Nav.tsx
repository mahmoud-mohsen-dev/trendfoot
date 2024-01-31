import "./Nav.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { sectionProps } from "../types/appTypes";
import SearchInput from "./search-Input/SearchInput";

function Nav({ setFilteresOptions, initialData }: sectionProps) {
    return (
        <nav>
            <div className="nav-container">
                <SearchInput
                    setFilteresOptions={setFilteresOptions}
                    initialData={initialData}
                />
            </div>
            <div className="profile-container">
                <a href="#test">
                    <AiOutlineHeart className="nav-icons" />
                </a>
                <a href="#test">
                    <AiOutlineShoppingCart className="nav-icons" />
                </a>
                <a href="#test">
                    <AiOutlineUserAdd className="nav-icons" />
                </a>
            </div>
        </nav>
    );
}

export default Nav;
