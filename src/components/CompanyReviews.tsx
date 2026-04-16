import { ReviewIcon } from "./Icons";

const reviews = [
  ["CarlHardware", "PC Gamer Shop Center", "4.5", "Excelente variedad de componentes; el armado demoró más de lo prometido."],
  ["MaraTech", "RTX 4070 Super", "5.0", "Entrega rápida y producto impecable. Buen embalaje."],
  ["SetupLab", "Sucursal Norte", "3.8", "Buena atención, pero faltaban memorias en stock."],
];

export function CompanyReviews() {
  return (
    <section className="flex-1 bg-[#f4f6f8] px-8 py-8">
      <div className="grid gap-5 md:grid-cols-3">
        {[
          ["Calificación promedio", "4.6", "+0.2 este mes"],
          ["Reviews nuevas", "48", "12 sin responder"],
          ["Satisfacción", "91%", "alta confianza"],
        ].map(([label, value, helper]) => (
          <article key={label} className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-slate-400">
              <ReviewIcon />
              <p className="text-sm font-semibold text-slate-500">{label}</p>
            </div>
            <p className="mt-3 text-4xl font-semibold tracking-normal text-slate-900">{value}</p>
            <p className="mt-2 text-sm font-medium text-emerald-600">{helper}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 space-y-5">
        {reviews.map(([author, subject, rating, text]) => (
          <article key={author} className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">{author}</p>
                <p className="mt-1 text-sm text-slate-500">{subject}</p>
              </div>
              <span className="rounded-[6px] bg-yellow-50 px-2.5 py-1 text-sm font-semibold text-yellow-600">
                {rating} ★
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">{text}</p>
            <div className="mt-4 flex gap-3">
              <button type="button" className="rounded-[8px] bg-slate-900 px-3 py-2 text-sm font-semibold text-white">
                Responder
              </button>
              <button type="button" className="rounded-[8px] border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-500">
                Archivar
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
