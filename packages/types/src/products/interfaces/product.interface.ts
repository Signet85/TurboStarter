import {CreateProductRequest} from "../dto/create-product.request";

export type Product = CreateProductRequest & {
    id: string;
}