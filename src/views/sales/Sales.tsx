import { useLoaderData } from 'react-router-dom';
import { getSales } from '../../services/SaleService';
import { Sale } from '../../types';
import ItemSale from '../../components/sales/ItemSale';

export async function loader() {
  const sales = await getSales();
  return sales;
}

export default function Sales() {
  const sales = useLoaderData() as Sale[];

  return (
    <div className="grid grid-cols-2 gap-2">
      {sales.map((sale) => (
        <ItemSale
          key={sale.id}
          sale={sale}
        />
      ))}
    </div>
  );
}
