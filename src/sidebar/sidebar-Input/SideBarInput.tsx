import { SideBarInputProps } from "./sidebarTypes";

function SideBarInput({
    typeName,
    handleClick,
    text,
    className,
    checked = false,
}: SideBarInputProps) {
    return (
        <label className={`sidebar-label-container h-${className}`}>
            <input
                type="radio"
                name={typeName}
                onClick={handleClick}
                defaultChecked={checked}
            />
            <span className={`checkmark ${className}`}></span>
            {text.toUpperCase()}
        </label>
    );
}

export default SideBarInput;
