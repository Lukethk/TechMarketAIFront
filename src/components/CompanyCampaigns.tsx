import { CampaignIcon } from "./Icons";

const campaigns = [
  ["Semana Gamer", "Activa", "Bs 4,200", "18% conversión"],
  ["Back to Work", "Programada", "Bs 1,600", "Inicia viernes"],
  ["Setup Limpio", "Activa", "Bs 980", "9% conversión"],
];

export function CompanyCampaigns() {
  return (
    <section className="flex-1 bg-[#f4f6f8] px-8 py-8">
      <div className="grid gap-5 md:grid-cols-3">
        {[
          ["Campañas activas", "2", "1 programada"],
          ["Ingresos atribuidos", "Bs 6,780", "+22% semanal"],
          ["CTR promedio", "8.4%", "+1.2%"],
        ].map(([label, value, helper]) => (
          <article key={label} className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-slate-400">
              <CampaignIcon />
              <p className="text-sm font-semibold text-slate-500">{label}</p>
            </div>
            <p className="mt-3 text-4xl font-semibold tracking-normal text-slate-900">{value}</p>
            <p className="mt-2 text-sm font-medium text-blue-600">{helper}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-base font-semibold text-slate-900">Campañas</p>
          <div className="mt-5 space-y-4">
            {campaigns.map(([name, status, revenue, result]) => (
              <div key={name} className="rounded-[8px] border border-slate-100 p-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-900">{name}</p>
                  <span className="rounded-[6px] bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700">{status}</span>
                </div>
                <div className="mt-4 grid grid-cols-2 text-sm">
                  <span className="font-semibold text-slate-900">{revenue}</span>
                  <span className="text-right text-slate-500">{result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <aside className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-base font-semibold text-slate-900">Audiencias</p>
          <div className="mt-5 space-y-4">
            {[
              ["Gamers", "48%"],
              ["Creadores", "31%"],
              ["Oficina", "21%"],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="flex justify-between text-sm font-semibold text-slate-600">
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-blue-600" style={{ width: value }} />
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
