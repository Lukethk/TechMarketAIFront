import {
  BookmarkIcon,
  CompassIcon,
  HomeIcon,
  MessageIcon,
  ProfileIcon,
  ReviewIcon,
  StoreIcon,
} from "./Icons";

const leftNavigation = [
  { label: "Inicio", icon: <HomeIcon />, active: true },
  { label: "Explorar", icon: <CompassIcon /> },
  { label: "Favoritos", icon: <BookmarkIcon /> },
  { label: "Mi Perfil", icon: <ProfileIcon /> },
];

const stories = [
  ["Tu Historia", "#d8a477"],
  ["gamer_pc", "#87b99d"],
  ["clean.hardware", "#7ba69c"],
  ["tech_chp", "#2e5a52"],
];

const suggestions = [
  ["@builder_pro", "Experto en refrigeración"],
  ["@custom_keyboards", "Sugirió por tus intereses"],
  ["@linux_hacks", "Popular en tu zona"],
];

export function CommunityHome() {
  return (
    <section className="mx-auto grid max-w-[1120px] grid-cols-1 gap-6 px-5 py-8 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,460px)_300px]">
      <aside className="space-y-5 lg:sticky lg:top-20 lg:self-start">
        <nav className="space-y-2">
          {leftNavigation.map((item) => (
            <button
              key={item.label}
              type="button"
              className={[
                "flex h-10 w-full items-center gap-3 rounded-[8px] px-4 text-sm font-semibold transition",
                item.active
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-500 hover:bg-white hover:text-slate-900",
              ].join(" ")}
            >
              <span className={item.active ? "text-blue-600" : "text-slate-400"}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="rounded-[8px] bg-white p-4 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-normal text-slate-400">Temas populares</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["#RTX4090", "#KeyboardMod", "#CableManagement", "#DeskSetup"].map((tag) => (
              <span key={tag} className="rounded-[6px] bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-500">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </aside>

      <div className="space-y-6">
        <div className="flex gap-5 overflow-hidden px-1">
          {stories.map(([name, color]) => (
            <button key={name} type="button" className="w-[72px] shrink-0 text-center">
              <span
                className="mx-auto block h-14 w-14 rounded-full border-2 border-blue-500"
                style={{ backgroundColor: color }}
              />
              <span className="mt-2 block truncate text-xs font-medium text-slate-600">{name}</span>
            </button>
          ))}
        </div>

        <article className="overflow-hidden rounded-[8px] bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-[#d9a47d]" />
              <div>
                <p className="text-sm font-bold text-slate-900">AlexTech</p>
                <p className="text-xs text-slate-400">Publicado hace 2 horas · Madrid</p>
              </div>
            </div>
            <button type="button" className="text-lg leading-none text-slate-400">...</button>
          </div>
          <div className="relative h-[245px] bg-[#173435]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_24%,rgba(203,245,232,0.95),transparent_0_13%),radial-gradient(circle_at_75%_70%,rgba(60,105,100,0.85),transparent_0_36%),linear-gradient(135deg,#0a1516,#22484a)]" />
            <div className="absolute left-[35%] top-7 h-32 w-[3px] rotate-[-25deg] rounded-full bg-slate-100/80" />
            <div className="absolute left-[35%] top-5 h-10 w-20 rotate-[-20deg] rounded-full bg-white/90 blur-[2px]" />
            <span className="absolute right-3 top-3 rounded-[6px] bg-slate-950 px-2 py-1 text-[10px] font-bold text-white">
              SETUP SHOWCASE
            </span>
          </div>
          <div className="px-4 py-3">
            <div className="flex items-center justify-between text-slate-500">
              <div className="flex items-center gap-5 text-sm">
                <span>♡ 1.4k</span>
                <span>▣ 84</span>
                <span>↗</span>
              </div>
              <BookmarkIcon />
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              <span className="font-bold text-slate-900">@alextech</span> He actualizado mi escritorio con un monitor ultra wide 49".
              ¿Qué opinan del manejo de cables? Todavía falta pulir un poco la repisa.
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-400">Ver los 84 comentarios</p>
            <p className="mt-1 text-sm font-semibold text-blue-600">#DreamSetup #Productivity #CleanWorkspace</p>
          </div>
        </article>

        <section className="rounded-[8px] bg-white p-5 shadow-sm">
          <div className="flex gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <StoreIcon />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Tip de la Semana</p>
              <p className="mt-1 text-xs text-slate-500">Hardware & Rendimiento</p>
            </div>
          </div>
          <div className="mt-4 rounded-[8px] bg-slate-50 p-4">
            <h2 className="text-base font-bold text-slate-900">Optimiza tu flujo de aire</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Asegúrate de que tus ventiladores frontales estén metiendo aire y los traseros o superiores sacándolo.
            </p>
            <button type="button" className="mt-4 text-sm font-bold text-blue-600">
              Leer guía completa →
            </button>
          </div>
        </section>

        <article className="rounded-[8px] bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-[#d9a47d]" />
              <div>
                <p className="text-sm font-bold text-slate-900">CarlHardware</p>
                <p className="text-xs text-slate-400">Review de Tienda · Hace 5 horas</p>
              </div>
            </div>
            <span className="text-sm text-yellow-500">★★★★☆</span>
          </div>
          <h2 className="mt-4 text-lg font-bold text-slate-900">Review: PC Gamer Shop Center</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Excelente variedad de componentes, pero el servicio de armado demoró dos días de lo prometido.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="h-36 rounded-[8px] bg-[linear-gradient(135deg,#dca34f,#f3dfb7)]" />
            <div className="h-36 rounded-[8px] bg-[linear-gradient(135deg,#0f172a,#60758b)]" />
          </div>
          <div className="mt-4 flex justify-between text-xs text-slate-400">
            <span>♡ 124 · ▣ 12</span>
            <span>Madrid, ES</span>
          </div>
        </article>
      </div>

      <aside className="space-y-5 lg:col-span-2 xl:col-span-1 xl:sticky xl:top-20 xl:self-start">
        <div className="rounded-[8px] bg-white p-4 shadow-sm">
          <p className="text-sm font-bold text-slate-900">Sugerencias para ti</p>
          <div className="mt-4 space-y-4">
            {suggestions.map(([handle, detail], index) => (
              <div key={handle} className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div
                    className="h-9 w-9 shrink-0 rounded-full"
                    style={{ backgroundColor: ["#477a65", "#9a7a61", "#354b45"][index] }}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-slate-900">{handle}</p>
                    <p className="truncate text-xs text-slate-400">{detail}</p>
                  </div>
                </div>
                <button type="button" className="text-xs font-bold text-blue-600">Seguir</button>
              </div>
            ))}
          </div>
          <button type="button" className="mt-5 w-full text-center text-xs font-bold uppercase text-slate-400">
            Ver todos
          </button>
        </div>

        <div className="rounded-[8px] bg-blue-600 p-5 text-white shadow-sm">
          <h2 className="text-xl font-bold">¿Amaste tu PC?</h2>
          <p className="mt-2 text-sm leading-6 text-blue-50">
            Comparte tu setup con la comunidad y recibe consejos para mejorar tu rendimiento.
          </p>
          <button type="button" className="mt-5 h-10 w-full rounded-[8px] bg-white text-sm font-bold text-blue-700">
            Subir Setup
          </button>
        </div>

        <div className="px-2 text-xs leading-6 text-slate-400">
          <p>Privacidad · Términos · Ayuda · Prensa</p>
          <p>© 2026 TechMarket</p>
        </div>
      </aside>
    </section>
  );
}
