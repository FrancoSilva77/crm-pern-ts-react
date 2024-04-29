import { Output, array, boolean, number, object, string } from 'valibot';

export const DraftProductSchema = object({
  name: string(),
  price: number(),
});

export const ProductSchema = object({
  id: number(),
  name: string(),
  price: number(),
  availability: boolean(),
});

export const DraftSaleSchema = object({
  total: number(),
  sale: string(),
});

export const ProductsSchema = array(ProductSchema);
export type Product = Output<typeof ProductSchema>;
export type ProductSale = Product & {
  quantity: number;
};

export const SaleSchema = object({
  id: number(),
  total: number(),
  createdAt: string(),
  saleProducts: array(
    object({
      id: number(),
      quantity: number(),
      product: object({
        name: string(),
      }),
    })
  ),
});

export const SalesSchema = array(SaleSchema);

export type Sale = Output<typeof SaleSchema>;
