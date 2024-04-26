import { Product } from '../../types';
import { formatCurrency } from '../../utils';

type ProductSaleProps = {
  item: Product;
  addItem: (item: Product) => void;
};

export default function ProductSale({ item, addItem }: ProductSaleProps) {
  return (
    <button
      className="border-2 border-blue-400 w-full p-3 rounded-lg hover:bg-blue-400"
      onClick={() => addItem(item)}
    >
      <p className="text-xl">{item.name}</p>
      <p className="text-xl font-semibold">{formatCurrency(item.price)}</p>
    </button>
  );
}
