import { Outlet } from 'react-router-dom';
import Navigate from '../components/ui/Navigate';

export default function LayoutSales() {
  return (
    <>
      <header className="bg-slate-800 flex justify-around items-center">
        <div className="max-w-6xl py-10">
          <h1 className="text-4xl font-extrabold text-white">
            Venta de Productos
          </h1>
        </div>
        <Navigate />
      </header>

      <main className="mt-10 mx-auto max-w-6xl  p-10 bg-white shadow">
        <Outlet />
      </main>
    </>
  );
}
