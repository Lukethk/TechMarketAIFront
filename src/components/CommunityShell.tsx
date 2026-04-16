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
    <main className="min-h-screen bg-[#eef2f6] text-slate-900">
      <header className="sticky top-0 z-20 border-b border-white/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1180px] items-center gap-7 px-5">
          <NavLink to="/community/home" className="flex items-center gap-3 text-sm font-black text-slate-900">
            <span className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-blue-600 text-white shadow-lg shadow-blue-600/25">
              <ChipIcon />
            </span>
            <span>
              <span className="block leading-none">TechMarket</span>
              <span className="block text-[10px] font-bold uppercase tracking-normal text-slate-400">Comunidad</span>
            </span>
          </NavLink>

          <nav className="hidden h-full items-center gap-6 md:flex">
            {topNavigation.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "relative flex h-full items-center text-sm font-black transition",
                    isActive ? "text-slate-950" : "text-slate-500 hover:text-slate-900",
                    "after:absolute after:bottom-3 after:left-0 after:h-[3px] after:w-full after:rounded-full",
                    isActive ? "after:bg-blue-600" : "after:bg-transparent",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <label className="ml-auto hidden h-10 w-[360px] items-center gap-2 rounded-full bg-slate-100 px-4 text-sm font-semibold text-slate-400 ring-1 ring-slate-200/60 lg:flex">
            <SearchIcon />
            Buscar setups, componentes...
          </label>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="Notificaciones"
          >
            <BellIcon />
          </button>
          <div className="h-10 w-10 rounded-full bg-[#dfe8d9] ring-4 ring-slate-100" />
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-black text-slate-600 transition hover:bg-slate-950 hover:text-white"
          >
            Cerrar sesión
          </button>
        </div>
      </header>

      <Outlet />
    </main>
  );
}
