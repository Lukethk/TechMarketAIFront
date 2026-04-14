import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";

const titles: Record<string, string> = {
  "/app/home": "Inventario",
  "/app/tickets": "Tickets",
  "/app/catalogo": "Catálogo",
  "/app/sucursales": "Sucursales",
  "/app/resenas": "Reseñas",
  "/app/campanas": "Campañas",
  "/app/rendimiento": "Rendimiento",
  "/app/facturacion": "Facturación",
  "/app/configuracion": "Configuración",
};

export function AppShell() {
  const location = useLocation();
  const navigate = useNavigate();
  const title = titles[location.pathname] ?? "TechMarket";
  const handleLogout = () => navigate("/login");

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        <Sidebar onLogout={handleLogout} />
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex items-center justify-between border-b border-slate-200 bg-white px-8 py-4 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
              {title}
            </h1>
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
                aria-label="Notificaciones"
              >
                <span className="relative flex h-5 w-5 items-center justify-center rounded-full border border-slate-300">
                  <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500" />
                </span>
              </button>
              <button
                type="button"
                className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.28)] transition hover:bg-blue-700"
              >
                + Agregar Nuevo Producto
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-[8px] border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
              >
                Cerrar sesión
              </button>
            </div>
          </header>
          <Outlet />
        </div>
      </div>
    </main>
  );
}
