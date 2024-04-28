import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import LayoutSales from './layouts/LayoutSales';
import Products, {
  loader as productsLoader,
  action as updateAvailabilityAction,
} from './views/Products';
import NewProduct, { action as newProductAction } from './views/NewProduct';
import Sale from './views/sales/Sale';
import EditProduct, {
  loader as editProductLoader,
  action as editProductAction,
} from './views/EditProduct';
import { action as deleteProductAction } from './components/ProductDetails';
import { action as newSaleAction } from './components/sales/TotalSale';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader,
        action: updateAvailabilityAction,
      },
      {
        path: 'productos/nuevo',
        element: <NewProduct />,
        action: newProductAction,
      },
      {
        path: 'productos/:id/editar' /* ROA Patter */,
        element: <EditProduct />,
        loader: editProductLoader,
        action: editProductAction,
      },
      {
        path: 'productos/:id/eliminar' /* ROA Patter */,
        action: deleteProductAction,
      },
    ],
  },
  {
    path: '/ventas',
    element: <LayoutSales />,
    children: [
      {
        index: true,
        element: <Sale />,
        loader: productsLoader,
      },
      {
        path: 'nueva',
        action: newSaleAction
      }
    ],
  },
]);
