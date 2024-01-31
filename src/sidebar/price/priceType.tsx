import { productType, setStateFiltersOptionsEOF } from "../../types/appTypes";

export type filterThePriceProps = (
    arr: productType[],
    valueMin: "All" | number,
    setterFunc: setStateFiltersOptionsEOF,
    valueMax?: number
) => void;

export type priceHandleFuncType = (
    name: number | "All",
    maxValue?: number
) => void;
