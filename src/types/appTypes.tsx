export interface productType {
    img: string;
    title: string;
    star: React.ReactElement;
    reviews: string;
    prevPrice: string;
    newPrice: string;
    company: string;
    color: string;
    category: string;
    id: number;
}

interface filtersOptions<T> {
    search: T;
    recommended: T;
    category: T;
    price: T;
    colors: T;
}

export type setStateType<T> = React.Dispatch<React.SetStateAction<T>>;

// EOF => Empty or Full
// set empty array or products array to productsEOF
export type productEOF = [] | productType[];

// {category: [] | productType[], ...}
// set empty array or products array to every value of filtersOptions
export type filtersOptionsEOF = filtersOptions<productEOF>;

// (obj: {category: [] | productType[], ...}) => [] | productType[]
export type getFiltersDataEOF = (obj: filtersOptionsEOF) => productEOF;

// React.Dispatch<React.SetStateAction<{category: [] | productType[], ...}>>
// Dispatch filtersOptions {category : empty or products Array, ...} to the state filtersOptions
export type setStateFiltersOptionsEOF = setStateType<
    filtersOptions<productEOF>
>;

export interface sectionProps {
    initialData: productType[];
    setFilteresOptions: setStateFiltersOptionsEOF;
}

export type handleFuncType = (name: string, maxValue?: number) => void;

export type filterFunctionType = (
    arr: productType[],
    name: string,
    setterFunc: setStateFiltersOptionsEOF
) => void;

export type isValueOccurredOnEveryKeyType = (
    filters: filtersOptionsEOF,
    product: productType
) => boolean;

export type filtersValuesType = productType[][] | [][];
