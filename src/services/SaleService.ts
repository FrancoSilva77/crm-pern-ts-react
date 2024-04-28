import { safeParse } from 'valibot';
import { SaleSchema } from '../types';
import axios from 'axios';

type saleData = {
  [k: string]: FormDataEntryValue;
};
export async function addSale(data: saleData) {
  try {
    const result = safeParse(SaleSchema, {
      total: +data.total,
      sale: data.sale
    });

    if (result.success) {
      const url = `${import.meta.env.VITE_API_URL}/api/sales`;

      await axios.post(url, {
        total: result.output.total,
        sale: result.output.sale
      });
    } else {
      throw new Error("Datos no válidos");
      
    }
  } catch (error) {
    console.log(error);
  }
}
