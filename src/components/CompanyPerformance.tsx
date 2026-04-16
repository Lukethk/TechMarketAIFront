import { ChartIcon, PerformanceIcon, SearchIcon } from "./Icons";

const kpis = [
  ["Ingresos", "Bs 126,980", "+14.2%", "text-emerald-600"],
  ["Conversión", "6.8%", "+1.1%", "text-emerald-600"],
  ["Pedidos", "342", "+28", "text-blue-600"],
  ["Devoluciones", "2.4%", "-0.6%", "text-emerald-600"],
];

const bars = [
  ["Lun", "45%"],
  ["Mar", "62%"],
  ["Mié", "58%"],
  ["Jue", "76%"],
  ["Vie", "68%"],
  ["Sáb", "88%"],
  ["Dom", "72%"],
];

const products = [
  ["NVIDIA RTX", "Bs 33,270", "34 ventas"],
  ["Samsung NVMe", "Bs 14,825", "28 ventas"],
  ["Intel 13S", "Bs 13,150", "19 ventas"],
  ["NZXT Comp", "Bs 7,795", "16 ventas"],
];

export function CompanyPerformance() {
  return (
    <section className="flex-1 bg-[#f4f6f8] px-8 py-8">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map(([label, value, helper, tone]) => (
          <article key={label} className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-slate-400">
              <PerformanceIcon />
              <p className="text-sm font-semibold text-slate-500">{label}</p>
            </div>
            <p className="mt-3 text-4xl font-semibold tracking-normal text-slate-900">{value}</p>
            <p className={`mt-2 text-sm font-medium ${tone}`}>{helper}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_170px]">
        <label className="flex h-11 items-center gap-3 rounded-[8px] border border-slate-200 bg-white px-4 text-sm text-slate-400 shadow-sm">
          <SearchIcon />
          Buscar producto o métrica...
        </label>
        <button type="button" className="h-11 rounded-[8px] border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-500 shadow-sm">
          Últimos 7 días
        </button>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base font-semibold text-slate-900">Ventas por día</p>
              <p className="mt-1 text-sm text-slate-500">Rendimiento semanal de la tienda.</p>
            </div>
            <ChartIcon />
          </div>
          <div className="mt-8 flex h-[300px] items-end gap-4 border-b border-slate-100 pb-4">
            {bars.map(([day, height]) => (
              <div key={day} className="flex flex-1 flex-col items-center gap-3">
                <div className="flex h-64 w-full items-end rounded-[8px] bg-slate-50 px-2">
                  <div className="w-full rounded-[8px] bg-blue-600" style={{ height }} />
                </div>
                <p className="text-xs font-semibold text-slate-400">{day}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-base font-semibold text-slate-900">Top productos</p>
            <div className="mt-5 space-y-4">
              {products.map(([name, revenue, sales], index) => (
                <div key={name} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-slate-100 text-sm font-semibold text-slate-600">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{name}</p>
                      <p className="text-xs text-slate-500">{sales}</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-slate-900">{revenue}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-base font-semibold text-slate-900">Canales</p>
            <div className="mt-5 space-y-4">
              {[
                ["Web", "54%"],
                ["Comunidad", "28%"],
                ["Sucursales", "18%"],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="flex justify-between text-sm font-semibold text-slate-600">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-slate-900" style={{ width: value }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
