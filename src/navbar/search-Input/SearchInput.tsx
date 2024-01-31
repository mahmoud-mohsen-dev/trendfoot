import { filterFunctionType, sectionProps } from "../../types/appTypes";
import { onSearchType } from "./searchType";

const searchFilter: filterFunctionType = (arr, eventValue, setterFunc) => {
    const result = arr.filter((item) => {
        const title = item.title.toLowerCase();
        const regex = new RegExp(eventValue.toLowerCase(), "g");
        return regex.test(title);
    });
    setterFunc((prevState) => ({ ...prevState, search: result }));
};

function SearchInput({ setFilteresOptions, initialData }: sectionProps) {
    const onSearch: onSearchType = (event) => {
        searchFilter(initialData, event.target.value, setFilteresOptions);
    };

    return (
        <>
            <input
                placeholder="Enter your search shoes."
                type="text"
                className="search-input"
                onChange={onSearch}
            ></input>
        </>
    );
}

export default SearchInput;
