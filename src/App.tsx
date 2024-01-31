import data from "./db/data";
import Nav from "./navbar/Nav";
import Recommended from "./Recommended/Recommended";
import Products from "./Products/Products";
import Sidebar from "./sidebar/Sidebar";
import { useEffect, useState } from "react";
import {
    filtersOptionsEOF,
    getFiltersDataEOF,
    productEOF,
    isValueOccurredOnEveryKeyType,
    filtersValuesType,
} from "./types/appTypes";

const initfiltersOptions: filtersOptionsEOF = {
    search: [],
    recommended: [],
    category: [],
    price: [],
    colors: [],
};

const getFiltersData: getFiltersDataEOF = (obj) => {
    return [
        ...obj.search,
        ...obj.recommended,
        ...obj.category,
        ...obj.price,
        ...obj.colors,
    ];
};

const isValueOccurredOnEveryKey: isValueOccurredOnEveryKeyType = (
    filters,
    product
) => {
    // search  colors    price
    // [[],   [{},{}],  [{},{}]]
    const values: filtersValuesType = Object.values(filters);
    // [[{},{}], [{},{}]]
    const onlyActiveFilters = values.filter((item) => item.length > 0);
    return onlyActiveFilters.every((arr) =>
        arr.some((item) => item.id === product.id)
    );
};

function App() {
    const [filteresOptions, setFilteresOptions] = useState(initfiltersOptions);
    const [displayData, setDisplayData] = useState(data);

    useEffect(() => {
        const filters = getFiltersData(filteresOptions);
        let filteredData: productEOF = [];
        // filters the array to get values that at least occurred once
        if (filters.length > 0) {
            filteredData = filters.filter((product, i, arr) => {
                return arr.findIndex((ele) => ele.id === product.id) === i;
            });
        }
        if (filteredData.length > 0) {
            const finalFilteredData = filteredData.filter((product) => {
                const returned = isValueOccurredOnEveryKey(
                    filteresOptions,
                    product
                );
                return returned;
            });
            setDisplayData(finalFilteredData);
        }
    }, [filteresOptions]);

    return (
        <div className="App">
            <Nav initialData={data} setFilteresOptions={setFilteresOptions} />
            <Sidebar
                initialData={data}
                setFilteresOptions={setFilteresOptions}
            />
            <Recommended
                initialData={data}
                setFilteresOptions={setFilteresOptions}
            />
            <Products theData={displayData} />
        </div>
    );
}

export default App;
