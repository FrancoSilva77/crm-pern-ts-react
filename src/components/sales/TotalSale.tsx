import { useMemo } from 'react';
import { ProductSale } from '../../types';
import { formatCurrency } from '../../utils';

type TotalSaleProps = {
  sale: ProductSale[];
};

export default function TotalSale({ sale }: TotalSaleProps) {
  const totalAmount = useMemo(
    () => sale.reduce((total, item) => total + item.quantity * item.price, 0),
    [sale]
  );
  return (
    <>
      <div className="mt-5">
        <h2 className="font-black text-2xl">Total de la venta</h2>

        <p>
          Total a pagar: {''}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
    </>
  );
}
