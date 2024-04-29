import { Outlet, Link } from 'react-router-dom';
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

      <Link
        to="/ventas/mostrar"
        className="block mt-5 text-center text-xl bg-slate-800 max-w-32 text-white mx-auto p-2 hover:bg-slate-950 font-bold"
      >
        Ver Ventas
      </Link>

      <main className="mt-10 mx-auto max-w-6xl  p-10 bg-white shadow">
        <Outlet />
      </main>
    </>
  );
}
