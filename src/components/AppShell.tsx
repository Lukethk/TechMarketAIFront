import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";

const titles: Record<string, string> = {
  "/app/home": "Home",
  "/app/inventario": "Inventario",
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
      <div className="mx-auto flex min-h-screen max-w-[1600px] items-start">
        <Sidebar onLogout={handleLogout} />
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-8 py-4 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
              {title}
            </h1>
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
                aria-label="Notificaciones"
              >
                
              </button>
             
            </div>
          </header>
          <Outlet />
        </div>
      </div>
    </main>
  );
}
