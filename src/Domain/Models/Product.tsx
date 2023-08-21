import { Category } from "./Category";
import { Rating } from "./Rating";

export interface Product {
    id?:          number;
    title?:       string;
    price?:       number;
    description?: string;
    category?:    Category;
    image?:       string;
    rating?:      Rating;
    total?:       number;
}