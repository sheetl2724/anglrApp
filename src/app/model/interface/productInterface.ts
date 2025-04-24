import { Product } from "../class/product";

export interface APIResponseModel{
    message:string,
    result:boolean,
    dt_Product:Array<Product>
}