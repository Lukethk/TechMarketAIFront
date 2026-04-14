import {
  BillingIcon,
  CampaignIcon,
  CatalogIcon,
  ChevronDownIcon,
  ChipIcon,
  HomeIcon,
  PerformanceIcon,
  ReviewIcon,
  SettingsIcon,
  StoreIcon,
  TicketIcon,
} from "./Icons";
import { NavLink } from "react-router-dom";

const navigation = [
  { label: "Home", icon: <HomeIcon />, to: "/app/home" },
  { label: "Tickets", icon: <TicketIcon />, to: "/app/tickets" },
  { label: "Catalogo", icon: <CatalogIcon />, to: "/app/catalogo" },
  { label: "Sucursales", icon: <StoreIcon />, to: "/app/sucursales" },
  { label: "Resenas", icon: <ReviewIcon />, to: "/app/resenas" },
  { label: "Campañas", icon: <CampaignIcon />, to: "/app/campanas" },
  { label: "Rendimiento", icon: <PerformanceIcon />, to: "/app/rendimiento" },
  { label: "Facturacion", icon: <BillingIcon />, to: "/app/facturacion" },
];

type SidebarProps = {
  onLogout?: () => void;
};

export function Sidebar({ onLogout }: SidebarProps) {
  return (
    <aside className="flex min-h-screen w-full max-w-[276px] flex-col border-r border-slate-200 bg-white shadow-[0_0_0_1px_rgba(15,23,42,0.02)]">
      <div className="border-b border-slate-100 px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500 text-white shadow-[0_10px_24px_rgba(37,99,235,0.32)]">
            <ChipIcon />
          </div>
          <div className="min-w-0">
            <p className="truncate text-base font-semibold text-slate-900">TechMarketAI</p>
            <p className="text-xs font-medium text-slate-400">Admin Maestro</p>
          </div>
        </div>
      </div>
      <div className="flex-1 px-4 py-6">
        <nav className="space-y-1.5">
          {navigation.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === "/app/home"}
              className={({ isActive }) =>
                [
                  "flex h-10 w-full items-center justify-between rounded-xl px-3 text-sm font-medium transition",
                  isActive
                    ? "border border-blue-100 bg-blue-50 text-blue-700 shadow-[0_6px_18px_rgba(59,130,246,0.12)]"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900",
                ].join(" ")
              }
            >
              <span className="flex items-center gap-3">
                <span className="text-slate-400">{item.icon}</span>
                {item.label}
              </span>
              {item.to === "/app/home" ? <ChevronDownIcon /> : null}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="mt-auto border-t border-slate-100 px-4 pb-4 pt-4">
        <NavLink
          to="/app/configuracion"
          className={({ isActive }) =>
            [
              "flex h-10 w-full items-center gap-3 rounded-xl px-3 text-sm font-medium transition",
              isActive
                ? "border border-blue-100 bg-blue-50 text-blue-700"
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900",
            ].join(" ")
          }
        >
          <span className="text-slate-400">
            <SettingsIcon />
          </span>
          Configuración
        </NavLink>
        <div className="mt-5 flex items-center gap-3 rounded-2xl px-2 py-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-semibold">
            AM
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-900">Alex Morgan</p>
            <p className="truncate text-xs text-slate-400">Super Admin</p>
          </div>
          {onLogout ? (
            <button
              type="button"
              onClick={onLogout}
              className="ml-auto rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
            >
              Salir
            </button>
          ) : null}
        </div>
      </div>
    </aside>
  );
}
