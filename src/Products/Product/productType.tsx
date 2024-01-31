import { productType } from "../../types/appTypes";

export type productElementType = Omit<productType, "id">;
