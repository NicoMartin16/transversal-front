import { Supplier } from './supplier.model';
import { Category } from './category.model';
export interface Producto {
    productId?:number;
    supplier: Supplier;
    category: Category;
    sku: string;
    productName: string;
    productDescription: string;
    quantityPerUnit: number;
    unitPrice: number;
    discount: number;
    unitWeight: number;
}
