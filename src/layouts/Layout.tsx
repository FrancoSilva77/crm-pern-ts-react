import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
    <h1>Desde layout</h1>
      <Outlet />
    </>
  );
}
