import { safeParse } from 'valibot';
import { DraftSaleSchema, SalesSchema } from '../types';
import axios from 'axios';

export async function getSales() {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/sales`;
    const { data } = await axios(url);

    const result = safeParse(SalesSchema, data.data);
console.log(data.data);

    if (result.success) {
      return result.output;
    } else {
      throw new Error('Hubo un error');
    }
  } catch (error) {
    console.log(error);
  }
}

type saleData = {
  [k: string]: FormDataEntryValue;
};
export async function addSale(data: saleData) {
  try {
    const result = safeParse(DraftSaleSchema, {
      total: +data.total,
      sale: data.sale,
    });

    if (result.success) {
      const url = `${import.meta.env.VITE_API_URL}/api/sales`;

      await axios.post(url, {
        total: result.output.total,
        sale: result.output.sale,
      });
    } else {
      throw new Error('Datos no válidos');
    }
  } catch (error) {
    console.log(error);
  }
}
