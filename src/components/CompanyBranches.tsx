import { StoreIcon } from "./Icons";

const branches = [
  ["Sucursal Centro", "La Paz", "Abierta", "86 pedidos", "92% stock"],
  ["Sucursal Norte", "El Alto", "Abierta", "43 pedidos", "78% stock"],
  ["Sucursal Online", "Ecommerce", "Activa", "214 pedidos", "96% stock"],
  ["Sucursal Sur", "Zona Sur", "Mantenimiento", "12 pedidos", "54% stock"],
];

const mapBranches = [
  {
    name: "Centro",
    area: "La Paz",
    status: "Abierta",
    position: "left-[44%] top-[38%]",
    color: "bg-blue-600",
    ring: "ring-blue-200",
  },
  {
    name: "Norte",
    area: "El Alto",
    status: "Abierta",
    position: "left-[27%] top-[24%]",
    color: "bg-emerald-500",
    ring: "ring-emerald-100",
  },
  {
    name: "Sur",
    area: "Zona Sur",
    status: "Mantenimiento",
    position: "left-[60%] top-[66%]",
    color: "bg-orange-500",
    ring: "ring-orange-100",
  },
];

export function CompanyBranches() {
  return (
    <section className="flex-1 bg-[#f4f6f8] px-8 py-8">
      <div className="grid gap-5 md:grid-cols-3">
        {[
          ["Sucursales activas", "3", "1 en mantenimiento"],
          ["Pedidos hoy", "355", "+18% vs ayer"],
          ["Stock promedio", "80%", "nivel saludable"],
        ].map(([label, value, helper]) => (
          <article key={label} className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-slate-400">
              <StoreIcon />
              <p className="text-sm font-semibold text-slate-500">{label}</p>
            </div>
            <p className="mt-3 text-4xl font-semibold tracking-normal text-slate-900">{value}</p>
            <p className="mt-2 text-sm font-medium text-emerald-600">{helper}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-base font-semibold text-slate-900">Estado de sucursales</p>
          <div className="mt-5 space-y-4">
            {branches.map(([name, city, status, orders, stock]) => (
              <div key={name} className="grid gap-3 rounded-[8px] border border-slate-100 p-4 md:grid-cols-[1fr_120px_140px_120px]">
                <div>
                  <p className="font-semibold text-slate-900">{name}</p>
                  <p className="text-sm text-slate-500">{city}</p>
                </div>
                <span className="text-sm font-semibold text-blue-600">{status}</span>
                <span className="text-sm text-slate-500">{orders}</span>
                <span className="text-sm font-semibold text-slate-900">{stock}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-sm">
          <div className="flex items-start justify-between gap-4 border-b border-slate-100 p-5">
            <div>
              <p className="text-base font-semibold text-slate-900">Mapa operativo</p>
              <p className="mt-1 text-sm text-slate-500">Cobertura y estado de puntos en La Paz.</p>
            </div>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">En vivo</span>
          </div>

          <div className="p-5">
            <div className="relative h-[380px] overflow-hidden rounded-[18px] border border-slate-200 bg-[#e9eef4]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_22%,rgba(59,130,246,0.22),transparent_0_25%),radial-gradient(circle_at_72%_72%,rgba(16,185,129,0.18),transparent_0_28%),linear-gradient(135deg,#f8fafc,#dbeafe_48%,#e2e8f0)]" />
              <div className="absolute left-[-15%] top-[18%] h-8 w-[130%] rotate-[16deg] rounded-full bg-white/75 shadow-sm" />
              <div className="absolute left-[-10%] top-[52%] h-7 w-[125%] rotate-[-21deg] rounded-full bg-white/80 shadow-sm" />
              <div className="absolute left-[42%] top-[-10%] h-[125%] w-8 rotate-[8deg] rounded-full bg-white/70 shadow-sm" />
              <div className="absolute left-[12%] top-[7%] h-[110%] w-5 rotate-[-28deg] rounded-full bg-white/60" />
              <div className="absolute right-[18%] top-[4%] h-[116%] w-6 rotate-[34deg] rounded-full bg-white/60" />

              <div className="absolute left-[8%] top-[13%] rounded-[16px] bg-white/65 px-3 py-2 text-xs font-bold text-slate-500 shadow-sm backdrop-blur">
                El Alto
              </div>
              <div className="absolute left-[42%] top-[51%] rounded-[16px] bg-white/65 px-3 py-2 text-xs font-bold text-slate-500 shadow-sm backdrop-blur">
                Centro
              </div>
              <div className="absolute right-[8%] bottom-[15%] rounded-[16px] bg-white/65 px-3 py-2 text-xs font-bold text-slate-500 shadow-sm backdrop-blur">
                Zona Sur
              </div>

              {mapBranches.map((branch) => (
                <div key={branch.name} className={`absolute ${branch.position}`}>
                  <span className={`relative flex h-5 w-5 rounded-full ${branch.color} ring-8 ${branch.ring}`}>
                    <span className={`absolute inset-0 animate-ping rounded-full ${branch.color} opacity-30`} />
                  </span>
                  <div className="absolute left-6 top-[-18px] min-w-[126px] rounded-[14px] bg-slate-950 px-3 py-2 text-white shadow-xl">
                    <p className="text-xs font-bold">Sucursal {branch.name}</p>
                    <p className="mt-0.5 text-[10px] font-semibold text-slate-400">{branch.area} · {branch.status}</p>
                  </div>
                </div>
              ))}

              <div className="absolute bottom-4 left-4 rounded-[16px] bg-white/85 p-3 shadow-lg backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-normal text-slate-400">Cobertura</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="h-2 w-16 rounded-full bg-blue-600" />
                  <span className="text-xs font-bold text-slate-700">24 km activos</span>
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-3">
              {mapBranches.map((branch) => (
                <div key={branch.name} className="flex items-center justify-between rounded-[14px] bg-slate-50 px-3 py-3">
                  <div className="flex items-center gap-3">
                    <span className={`h-3 w-3 rounded-full ${branch.color}`} />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Sucursal {branch.name}</p>
                      <p className="text-xs text-slate-500">{branch.area}</p>
                    </div>
                  </div>
                  <span className={branch.status === "Mantenimiento" ? "text-xs font-bold text-orange-500" : "text-xs font-bold text-emerald-600"}>
                    {branch.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
