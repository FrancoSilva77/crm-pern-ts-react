import { ProductSale } from '../../types';
import { formatCurrency } from '../../utils';

type ContentSaleProps = {
  sale: ProductSale[];
  removeItem: (id: ProductSale['id']) => void;
};

export default function ContentSale({ sale, removeItem }: ContentSaleProps) {
  return (
    <div>
      <h2 className="text-3xl font-black">Venta</h2>

      <div className="mt-5">
        {sale.map((item) => (
          <div
            key={item.id}
            className="flex justify-between p-2 border-t border-blue-100 last-of-type:boder-b"
          >
            <div className="flex flex-col">
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} -{' '}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="bg-red-500 px-5 text-white rounded-full font-black"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
