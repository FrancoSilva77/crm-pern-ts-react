import { formatCurrency, formatDate } from '../../utils';
import { Sale } from '../../types';

type ItemSaleProps = {
  sale: Sale;
};

export default function ItemSale({ sale }: ItemSaleProps) {
  return (
    <div
      key={sale.id}
      className="border border-slate-400 p-5"
    >
      <div>
        {sale.saleProducts.map((saleProduct) => (
          <div
            key={saleProduct.id}
            className="flex gap-2 text-lg"
          >
            <p>
              Producto:{' '}
              <span className="font-bold">{saleProduct.product.name}</span>
            </p>
            <p>-</p>
            <p>
              Cantidad:{' '}
              <span className="font-bold">{saleProduct.quantity}</span>
            </p>
          </div>
        ))}
        <p className="font-black text-lg">{formatCurrency(sale.total)}</p>
        <p className="text-xs mt-2">{formatDate(sale.createdAt)}</p>
      </div>
    </div>
  );
}
