import { useLoaderData } from 'react-router-dom';
import ProductSale from '../../components/sales/ProductSale';
import { Product } from '../../types';
import useSale from '../../hooks/useSale';

export default function Sale() {
  const { addItem } = useSale();
  const products = useLoaderData() as Product[];

  return (
    <>
      <h2 className="text-3xl font-black">Selecciona los productos</h2>

      <div className="grid mx-auto md:grid-cols-2">
        <div className="max-w-6xl mt-10 grid md:grid-cols-2 gap-5">
          {products.map((item) => (
            <ProductSale
              key={item.id}
              item={item}
              addItem={addItem}
            />
          ))}
        </div>
      </div>
    </>
  );
}
