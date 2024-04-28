import { useMemo } from 'react';
import { ActionFunctionArgs, Form, redirect } from 'react-router-dom';
import { ProductSale } from '../../types';
import { formatCurrency } from '../../utils';
import { addSale } from '../../services/SaleService';

export async function action({ request }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());
  await addSale(data);
  
  return redirect('/ventas');
}

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

        <Form
          method="POST"
          action="/ventas/nueva"
          onSubmit={() => placeSale()}
        >
          <input
            type="hidden"
            id="total"
            name="total"
            value={totalAmount}
          />

          <input
            type="hidden"
            id="sale"
            name="sale"
            value={JSON.stringify(sale)}
          />

          <input
            type="submit"
            value="Guardar Venta"
            className="bg-blue-600 w-full p-2 text-white font-black cursor-pointer"
          />
        </Form>
      </div>
    </>
  );
}
