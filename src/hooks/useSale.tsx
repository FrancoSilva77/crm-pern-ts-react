import { useState } from 'react';
import { Product, ProductSale } from '../types';

export default function useSale() {
  const [sale, setSale] = useState<ProductSale[]>([]);

  const addItem = (item: Product) => {
    const itemExist = sale.find((saleItem) => saleItem.id === item.id);

    if (itemExist) {
      const updateSale = sale.map((saleItem) =>
        saleItem.id === item.id
          ? { ...saleItem, quantity: saleItem.quantity + 1 }
          : saleItem
      );
      setSale(updateSale);
    } else {
      const newItem = { ...item, quantity: 1 };
      setSale([...sale, newItem]);
    }
  };

  const removeItem = (id: ProductSale['id']) => {
    setSale(sale.filter((item) => item.id !== id));
  };

  return {
    addItem,
    sale,
    removeItem,
  };
}
