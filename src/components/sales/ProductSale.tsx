import { Product } from '../../types';

type ProductSaleProps = {
  item: Product;
};

export default function ProductSale({ item }: ProductSaleProps) {
  return (
    <button className="border-2 border-blue-400 w-full p-3 rounded-lg hover:bg-blue-400">
      <p className="text-xl">{item.name}</p>
      <p className="text-xl font-semibold">${item.price}</p>
    </button>
  );
}
