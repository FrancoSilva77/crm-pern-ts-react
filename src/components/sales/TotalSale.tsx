import { useMemo } from 'react';
import { ProductSale } from '../../types';
import { formatCurrency } from '../../utils';

type TotalSaleProps = {
  sale: ProductSale[];
  placeSale: () => void;
};

export default function TotalSale({ sale, placeSale }: TotalSaleProps) {
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

      <div className="mt-5 flex flex-col gap-4">
        <button
          onClick={() => placeSale()}
          className="bg-red-600 p-2 text-white font-black"
        >
          Cancelar venta
        </button>
        <button className="bg-blue-600 p-2 text-white font-black">
          Guardar venta
        </button>
      </div>
    </>
  );
}
