import { Link } from 'react-router-dom';

export default function Navigate() {
  return (
    <div className='flex gap-3'>
      <Link
        to="/"
        className="text-white text-xl font-bold p-2 hover:border hover:border-white"
      >
        Productos
      </Link>
      <Link
        to="/ventas"
        className="text-white text-xl font-bold p-2 hover:border hover:border-white"
      >
        Venta
      </Link>
    </div>
  );
}
