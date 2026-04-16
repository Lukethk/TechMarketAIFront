import { SettingsIcon } from "./Icons";

const settings = [
  ["Perfil de empresa", "Nombre, logo, datos fiscales y contacto."],
  ["Notificaciones", "Alertas de stock, tickets y campañas."],
  ["Permisos", "Roles del equipo y accesos administrativos."],
  ["Integraciones", "Canales de venta, pagos y analítica."],
];

export function CompanySettings() {
  return (
    <section className="flex-1 bg-[#f4f6f8] px-8 py-8">
      <div className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-blue-50 text-blue-600">
            <SettingsIcon />
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900">Configuración general</p>
            <p className="text-sm text-slate-500">Ajustes base del panel de empresa.</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {settings.map(([title, description]) => (
            <button
              key={title}
              type="button"
              className="rounded-[8px] border border-slate-200 bg-white p-5 text-left transition hover:bg-slate-50"
            >
              <p className="font-semibold text-slate-900">{title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
