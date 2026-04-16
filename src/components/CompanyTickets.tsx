import { SearchIcon, TicketIcon, UsersIcon } from "./Icons";

const ticketMetrics = [
  ["Tickets abiertos", "28", "+6 hoy", "text-blue-600"],
  ["Tiempo respuesta", "18 min", "-4 min", "text-emerald-600"],
  ["Pendientes", "7", "Alta prioridad", "text-orange-500"],
];

const tickets = [
  {
    id: "#TK-1024",
    title: "Consulta por disponibilidad de RTX 4070",
    customer: "Nicolas Parra",
    channel: "Comunidad",
    status: "Abierto",
    priority: "Alta",
    time: "Hace 8 min",
  },
  {
    id: "#TK-1023",
    title: "Problema con retiro en sucursal Centro",
    customer: "Marta Ruiz",
    channel: "Web",
    status: "En proceso",
    priority: "Media",
    time: "Hace 22 min",
  },
  {
    id: "#TK-1022",
    title: "Solicitud de garantía para memoria RGB",
    customer: "Alex Medina",
    channel: "Email",
    status: "Esperando cliente",
    priority: "Baja",
    time: "Hace 1 h",
  },
  {
    id: "#TK-1021",
    title: "Cotización para setup de streaming",
    customer: "Carla Soto",
    channel: "WhatsApp",
    status: "Abierto",
    priority: "Alta",
    time: "Hace 2 h",
  },
];

const agents = [
  ["Alex Morgan", "12 resueltos", "92% satisfacción"],
  ["Sofia Chen", "9 resueltos", "88% satisfacción"],
  ["Rafael Ortiz", "7 resueltos", "84% satisfacción"],
];

function priorityClass(priority: string) {
  if (priority === "Alta") return "bg-red-50 text-red-600";
  if (priority === "Media") return "bg-orange-50 text-orange-600";
  return "bg-slate-100 text-slate-500";
}

export function CompanyTickets() {
  return (
    <section className="flex-1 bg-[#f4f6f8] px-8 py-8">
      <div className="grid gap-5 md:grid-cols-3">
        {ticketMetrics.map(([label, value, helper, tone]) => (
          <article key={label} className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-slate-400">
              <TicketIcon />
              <p className="text-sm font-semibold text-slate-500">{label}</p>
            </div>
            <p className="mt-3 text-4xl font-semibold tracking-normal text-slate-900">{value}</p>
            <p className={`mt-2 text-sm font-medium ${tone}`}>{helper}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_150px_150px]">
        <label className="flex h-11 items-center gap-3 rounded-[8px] border border-slate-200 bg-white px-4 text-sm text-slate-400 shadow-sm">
          <SearchIcon />
          Buscar ticket, cliente o canal...
        </label>
        <button type="button" className="h-11 rounded-[8px] border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-500 shadow-sm">
          Estado
        </button>
        <button type="button" className="h-11 rounded-[8px] border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-500 shadow-sm">
          Prioridad
        </button>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-5 py-4">
            <p className="text-base font-semibold text-slate-900">Bandeja de tickets</p>
            <p className="mt-1 text-sm text-slate-500">Casos ordenados por urgencia y actividad reciente.</p>
          </div>
          <div className="divide-y divide-slate-100">
            {tickets.map((ticket) => (
              <article key={ticket.id} className="grid gap-4 px-5 py-5 lg:grid-cols-[1fr_auto]">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold text-blue-600">{ticket.id}</span>
                    <span className={`rounded-[6px] px-2 py-1 text-xs font-semibold ${priorityClass(ticket.priority)}`}>
                      {ticket.priority}
                    </span>
                    <span className="rounded-[6px] bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700">
                      {ticket.status}
                    </span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold leading-snug text-slate-900">{ticket.title}</h2>
                  <p className="mt-2 text-sm text-slate-500">
                    {ticket.customer} · {ticket.channel} · {ticket.time}
                  </p>
                </div>
                <div className="flex items-center gap-3 self-center">
                  <button type="button" className="rounded-[8px] border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-500">
                    Asignar
                  </button>
                  <button type="button" className="rounded-[8px] bg-slate-900 px-3 py-2 text-sm font-semibold text-white">
                    Abrir
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-slate-400">
              <UsersIcon />
              <p className="text-base font-semibold text-slate-900">Equipo activo</p>
            </div>
            <div className="mt-5 space-y-4">
              {agents.map(([name, solved, score]) => (
                <div key={name} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600">
                      {name.split(" ").map((part) => part[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{name}</p>
                      <p className="text-xs text-slate-500">{solved}</p>
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-emerald-600">{score}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-base font-semibold text-slate-900">SLA del día</p>
            <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[78%] rounded-full bg-blue-600" />
            </div>
            <p className="mt-3 text-sm text-slate-500">78% de tickets dentro del tiempo prometido.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
