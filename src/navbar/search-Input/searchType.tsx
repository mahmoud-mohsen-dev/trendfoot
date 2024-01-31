import { productType, setStateFiltersData } from "../../types/appTypes";

type event = React.ChangeEvent<HTMLInputElement>;

export type onSearchType = (event: event) => void;

export type searchFilterType = (
    arr: productType[],
    eventValue: event,
    setterFunc: setStateFiltersData
) => void;
