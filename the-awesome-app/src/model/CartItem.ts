import { Product } from "./product";

export class CartItem{
    constructor(public product: Product, public quantity: number){}
}