import { BillingIcon } from "./Icons";

const invoices = [
  ["FAC-2044", "PC Gamer Shop Center", "Bs 8,630", "Pagada"],
  ["FAC-2043", "MaraTech", "Bs 5,910", "Pendiente"],
  ["FAC-2042", "SetupLab", "Bs 14,620", "Pagada"],
  ["FAC-2041", "Daniel Rojas", "Bs 3,960", "Vencida"],
];

export function CompanyBilling() {
  return (
    <section className="flex-1 bg-[#f4f6f8] px-8 py-8">
      <div className="grid gap-5 md:grid-cols-3">
        {[
          ["Facturado", "Bs 172,610", "+16% mensual"],
          ["Pendiente", "Bs 23,790", "6 facturas"],
          ["Vencido", "Bs 3,960", "1 factura"],
        ].map(([label, value, helper]) => (
          <article key={label} className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-slate-400">
              <BillingIcon />
              <p className="text-sm font-semibold text-slate-500">{label}</p>
            </div>
            <p className="mt-3 text-4xl font-semibold tracking-normal text-slate-900">{value}</p>
            <p className="mt-2 text-sm font-medium text-slate-500">{helper}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-sm">
        <div className="grid grid-cols-[120px_1fr_140px_120px] border-b border-slate-100 px-5 py-3 text-xs font-semibold uppercase text-slate-400">
          <span>Factura</span>
          <span>Cliente</span>
          <span>Monto</span>
          <span>Estado</span>
        </div>
        <div className="divide-y divide-slate-100">
          {invoices.map(([id, customer, amount, status]) => (
            <div key={id} className="grid grid-cols-[120px_1fr_140px_120px] px-5 py-4 text-sm">
              <span className="font-semibold text-blue-600">{id}</span>
              <span className="font-semibold text-slate-900">{customer}</span>
              <span className="font-semibold text-slate-900">{amount}</span>
              <span className={status === "Pagada" ? "font-semibold text-emerald-600" : status === "Vencida" ? "font-semibold text-red-500" : "font-semibold text-orange-500"}>
                {status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
