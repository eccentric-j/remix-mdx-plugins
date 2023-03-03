import { Outlet } from "@remix-run/react";

export default function Pages() {
  return (
    <div>
      <h1>Pages Layout</h1>
      <Outlet />
    </div>
  );
}
