import { ChartIcon, PerformanceIcon, TicketIcon } from "./Icons";
import type { ReactNode } from "react";

const summaries: Array<[string, string, string, ReactNode]> = [
  ["Tickets activos", "28", "Atención requerida", <TicketIcon />],
  ["Ventas hoy", "Bs 19,765", "+12% vs ayer", <ChartIcon />],
  ["Rendimiento", "92%", "Operación estable", <PerformanceIcon />],
];

export function CompanyHome() {
  return (
    <section className="flex-1 bg-[#f4f6f8] px-8 py-8">
      <div className="grid gap-5 md:grid-cols-3">
        {summaries.map(([label, value, helper, icon]) => (
          <article key={label} className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-slate-400">
              {icon}
              <p className="text-sm font-semibold text-slate-500">{label}</p>
            </div>
            <p className="mt-3 text-4xl font-semibold tracking-normal text-slate-900">{value}</p>
            <p className="mt-2 text-sm font-medium text-emerald-600">{helper}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-base font-semibold text-slate-900">Resumen operativo</p>
          <p className="mt-1 text-sm text-slate-500">
            Vista rápida del estado de la tienda y tareas que conviene revisar.
          </p>
          <div className="mt-6 space-y-4">
            {[
              "Revisar 5 productos con stock bajo.",
              "Responder tickets de garantía pendientes.",
              "Actualizar catálogo con nuevos gabinetes.",
            ].map((item) => (
              <div key={item} className="rounded-[8px] border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                {item}
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-base font-semibold text-slate-900">Accesos rápidos</p>
          <div className="mt-5 space-y-3">
            {["Inventario", "Tickets", "Rendimiento"].map((item) => (
              <button
                key={item}
                type="button"
                className="h-10 w-full rounded-[8px] border border-slate-200 bg-white px-4 text-left text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                {item}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
