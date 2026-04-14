import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { BellIcon, ChipIcon, SearchIcon } from "./Icons";

const topNavigation = [
  { label: "Para ti", to: "/community/home" },
  { label: "Siguiendo", to: "/community/explorar" },
  { label: "Setups", to: "/community/publicaciones" },
  { label: "Reviews", to: "/community/mensajes" },
];

export function CommunityShell() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#f1f3f6] text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-14 max-w-[1120px] items-center gap-8 px-5">
          <NavLink to="/community/home" className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <span className="flex h-6 w-6 items-center justify-center rounded-[6px] bg-blue-600 text-white">
              <ChipIcon />
            </span>
            TechMarket
          </NavLink>

          <nav className="hidden h-full items-center gap-6 md:flex">
            {topNavigation.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "relative flex h-full items-center text-sm font-semibold transition",
                    isActive ? "text-slate-950" : "text-slate-500 hover:text-slate-900",
                    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:rounded-full",
                    isActive ? "after:bg-pink-500" : "after:bg-transparent",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <label className="ml-auto hidden h-9 w-[360px] items-center gap-2 rounded-[8px] bg-slate-100 px-3 text-sm text-slate-400 lg:flex">
            <SearchIcon />
            Buscar setups, componentes...
          </label>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="Notificaciones"
          >
            <BellIcon />
          </button>
          <div className="h-9 w-9 rounded-full bg-[#dfe8d9]" />
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="rounded-[8px] border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
          >
            Cerrar sesión
          </button>
        </div>
      </header>

      <Outlet />
    </main>
  );
}
