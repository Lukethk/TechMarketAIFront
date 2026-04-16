import {
  BookmarkIcon,
  CompassIcon,
  HomeIcon,
  MessageIcon,
  ProfileIcon,
  StoreIcon,
} from "./Icons";
import { useState } from "react";
import type { FormEvent } from "react";

const leftNavigation = [
  { label: "Inicio", icon: <HomeIcon />, count: "Hoy" },
  { label: "Explorar", icon: <CompassIcon />, count: "128" },
  { label: "Favoritos", icon: <BookmarkIcon />, count: "24" },
  { label: "Mi Perfil", icon: <ProfileIcon />, count: "Pro" },
];

const stories = [
  ["Tu Historia", "Subir setup", "#d8a477"],
  ["gamer_pc", "RTX 4090", "#87b99d"],
  ["clean.hardware", "Minimal desk", "#7ba69c"],
  ["tech_chp", "Watercooling", "#2e5a52"],
  ["linux_hacks", "Workstation", "#31516e"],
];

const trendingTags = ["#DeskSetup", "#CableManagement", "#RTX4090", "#KeyboardMod", "#BoliviaTech"];

const suggestions = [
  ["@builder_pro", "Experto en refrigeración", "#477a65"],
  ["@custom_keyboards", "Teclados custom", "#9a7a61"],
  ["@linux_hacks", "Workstations limpias", "#354b45"],
];

const featuredPosts = [
  {
    author: "AlexTech",
    handle: "@alextech",
    meta: "Publicado hace 2 horas · Madrid",
    title: "Setup ultrawide para productividad",
    body: "Actualicé mi escritorio con un monitor ultra wide 49”. Aún estoy afinando el cable management debajo de la mesa.",
    tags: ["#DreamSetup", "#Productivity", "#CleanWorkspace"],
    likes: "1.4k",
    comments: "84",
    variant: "lamp",
  },
  {
    author: "CarlHardware",
    handle: "@carlhardware",
    meta: "Review de tienda · Hace 5 horas",
    title: "PC Gamer Shop Center",
    body: "Excelente variedad de componentes y buen asesoramiento, aunque el armado tomó dos días más de lo prometido.",
    tags: ["#Review", "#HardwareStore", "#GamingPC"],
    likes: "124",
    comments: "12",
    variant: "review",
  },
];

type SetupPost = {
  title: string;
  description: string;
};

type PostVisualProps = {
  variant: string;
};

function PostVisual({ variant }: PostVisualProps) {
  if (variant === "review") {
    return (
      <div className="grid h-[240px] grid-cols-2 gap-3 bg-slate-50 p-3">
        <div className="rounded-[18px] bg-[linear-gradient(135deg,#dca34f,#f3dfb7)] shadow-inner" />
        <div className="relative overflow-hidden rounded-[18px] bg-[linear-gradient(135deg,#0f172a,#60758b)]">
          <div className="absolute left-8 top-8 h-20 w-20 rounded-full border border-white/20" />
          <div className="absolute bottom-8 right-6 h-16 w-28 rounded-[10px] bg-slate-950/60" />
        </div>
      </div>
    );
  }

  if (variant === "new") {
    return (
      <div className="relative h-[240px] overflow-hidden bg-[#123238]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(96,165,250,0.75),transparent_0_18%),radial-gradient(circle_at_78%_35%,rgba(45,212,191,0.55),transparent_0_24%),linear-gradient(145deg,#0f172a,#164e63_55%,#0f766e)]" />
        <div className="absolute bottom-9 left-9 h-16 w-52 rounded-[14px] bg-slate-950/70 shadow-2xl" />
        <div className="absolute bottom-24 left-16 h-24 w-36 rounded-[12px] border border-white/20 bg-white/10 backdrop-blur" />
        <span className="absolute right-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-bold uppercase text-white">
          Nuevo setup
        </span>
      </div>
    );
  }

  return (
    <div className="relative h-[260px] overflow-hidden bg-[#173435]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_24%,rgba(203,245,232,0.95),transparent_0_13%),radial-gradient(circle_at_75%_70%,rgba(60,105,100,0.85),transparent_0_36%),linear-gradient(135deg,#0a1516,#22484a)]" />
      <div className="absolute left-[35%] top-7 h-32 w-[3px] rotate-[-25deg] rounded-full bg-slate-100/80" />
      <div className="absolute left-[35%] top-5 h-10 w-20 rotate-[-20deg] rounded-full bg-white/90 blur-[2px]" />
      <div className="absolute bottom-8 left-8 h-12 w-56 rounded-[14px] bg-black/30 backdrop-blur" />
      <span className="absolute right-4 top-4 rounded-full bg-slate-950 px-3 py-1 text-[10px] font-bold uppercase text-white">
        Setup showcase
      </span>
    </div>
  );
}

export function CommunityHome() {
  const [isComposerOpen, setIsComposerOpen] = useState(false);
  const [setupPosts, setSetupPosts] = useState<SetupPost[]>([]);
  const [setupForm, setSetupForm] = useState({
    title: "",
    description: "",
  });
  const [activeNav, setActiveNav] = useState("Inicio");
  const [activeTag, setActiveTag] = useState("#DeskSetup");
  const [following, setFollowing] = useState<string[]>(["@builder_pro"]);

  const handleSetupSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSetupPosts([
      {
        title: setupForm.title.trim(),
        description: setupForm.description.trim(),
      },
      ...setupPosts,
    ]);
    setSetupForm({ title: "", description: "" });
    setIsComposerOpen(false);
  };

  return (
    <section className="relative overflow-hidden bg-[#eef2f6]">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-blue-200/35 blur-3xl" />
      <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 gap-6 px-5 py-8 lg:grid-cols-[230px_minmax(0,1fr)] xl:grid-cols-[230px_minmax(0,520px)_300px]">
        <aside className="space-y-5 lg:sticky lg:top-20 lg:self-start">
          <div className="overflow-hidden rounded-[24px] bg-slate-950 text-white shadow-xl shadow-slate-950/10">
            <div className="relative h-24 bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.75),transparent_0_24%),linear-gradient(135deg,#0f172a,#0f766e)]">
              <div className="absolute -bottom-7 left-5 h-14 w-14 rounded-full border-4 border-slate-950 bg-[#d8a477]" />
            </div>
            <div className="px-5 pb-5 pt-9">
              <p className="text-sm font-bold">Lucas Morgan</p>
              <p className="mt-1 text-xs text-slate-400">Setup builder · Comunidad</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                <div className="rounded-[14px] bg-white/10 p-3">
                  <p className="text-lg font-bold">12</p>
                  <p className="text-[10px] uppercase text-slate-400">Setups</p>
                </div>
                <div className="rounded-[14px] bg-white/10 p-3">
                  <p className="text-lg font-bold">248</p>
                  <p className="text-[10px] uppercase text-slate-400">Puntos</p>
                </div>
              </div>
            </div>
          </div>

          <nav className="rounded-[22px] bg-white p-2 shadow-sm">
            {leftNavigation.map((item) => {
              const isActive = item.label === activeNav;

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setActiveNav(item.label)}
                  className={[
                    "flex h-11 w-full items-center justify-between rounded-[16px] px-3 text-sm font-semibold transition",
                    isActive ? "bg-blue-50 text-blue-700" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900",
                  ].join(" ")}
                >
                  <span className="flex items-center gap-3">
                    <span className={isActive ? "text-blue-600" : "text-slate-400"}>{item.icon}</span>
                    {item.label}
                  </span>
                  <span className={isActive ? "text-xs text-blue-500" : "text-xs text-slate-300"}>{item.count}</span>
                </button>
              );
            })}
          </nav>

          <div className="rounded-[22px] bg-white p-4 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-normal text-slate-400">Temas populares</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {trendingTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  className={[
                    "rounded-full px-3 py-1.5 text-xs font-bold transition",
                    activeTag === tag ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-500 hover:bg-blue-50 hover:text-blue-700",
                  ].join(" ")}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="space-y-6">
          <section className="overflow-hidden rounded-[28px] bg-white shadow-xl shadow-slate-200/70">
            <div className="relative min-h-[240px] bg-[radial-gradient(circle_at_75%_18%,rgba(125,211,252,0.9),transparent_0_20%),linear-gradient(135deg,#0f172a,#164e63_50%,#0f766e)] p-6 text-white">
              <div className="absolute bottom-0 right-6 h-40 w-56 rounded-t-[28px] border border-white/10 bg-white/10 backdrop-blur-sm" />
              <div className="absolute bottom-8 right-14 h-16 w-36 rounded-[14px] bg-slate-950/50 shadow-2xl" />
              <div className="relative max-w-[340px]">
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-normal text-blue-50">
                  Comunidad TechMarket
                </span>
                <h1 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em]">
                  Enseña tu setup. Mejora con la comunidad.
                </h1>
                <p className="mt-3 text-sm leading-6 text-blue-50">
                  Comparte componentes, escritorio, cable management y recibe consejos accionables.
                </p>
                <button
                  type="button"
                  onClick={() => setIsComposerOpen(true)}
                  className="mt-5 h-11 rounded-[14px] bg-white px-5 text-sm font-black text-blue-700 shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  Subir mi setup
                </button>
              </div>
            </div>
          </section>

          <div className="flex gap-4 overflow-hidden px-1">
            {stories.map(([name, detail, color], index) => (
              <button
                key={name}
                type="button"
                onClick={index === 0 ? () => setIsComposerOpen(true) : undefined}
                className="w-[84px] shrink-0 text-center"
              >
                <span className="relative mx-auto block h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-emerald-400 p-[3px] shadow-lg shadow-blue-200">
                  <span className="block h-full w-full rounded-full border-4 border-white" style={{ backgroundColor: color }} />
                  {index === 0 ? (
                    <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-sm font-black text-white">
                      +
                    </span>
                  ) : null}
                </span>
                <span className="mt-2 block truncate text-xs font-bold text-slate-700">{name}</span>
                <span className="block truncate text-[10px] font-semibold text-slate-400">{detail}</span>
              </button>
            ))}
          </div>

          <section className="rounded-[24px] bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-[#d8a477]" />
              <button
                type="button"
                onClick={() => setIsComposerOpen(true)}
                className="flex h-12 flex-1 items-center rounded-[16px] bg-slate-100 px-4 text-left text-sm font-semibold text-slate-400 transition hover:bg-slate-200 hover:text-slate-600"
              >
                ¿Qué mejoraste en tu setup hoy?
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Setup", "Review", "Tip rápido"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setIsComposerOpen(true)}
                  className="rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700 transition hover:bg-blue-100"
                >
                  {item}
                </button>
              ))}
            </div>
          </section>

          {setupPosts.map((post, index) => (
            <article key={`${post.title}-${index}`} className="overflow-hidden rounded-[28px] bg-white shadow-xl shadow-slate-200/70">
              <div className="flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-blue-100 ring-2 ring-blue-500" />
                  <div>
                    <p className="text-sm font-black text-slate-900">Tu setup</p>
                    <p className="text-xs font-semibold text-slate-400">Publicado ahora · Comunidad</p>
                  </div>
                </div>
                <button type="button" className="text-lg leading-none text-slate-400">...</button>
              </div>
              <PostVisual variant="new" />
              <div className="px-5 py-4">
                <PostActions likes="0" comments="0" />
                <h2 className="mt-4 text-lg font-black tracking-[-0.02em] text-slate-900">{post.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{post.description}</p>
                <p className="mt-3 text-sm font-bold text-blue-600">#DeskSetup #TechMarket #Comunidad</p>
              </div>
            </article>
          ))}

          {featuredPosts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-[28px] bg-white shadow-xl shadow-slate-200/70">
              <div className="flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-[#d9a47d]" />
                  <div>
                    <p className="text-sm font-black text-slate-900">{post.author}</p>
                    <p className="text-xs font-semibold text-slate-400">{post.meta}</p>
                  </div>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">Destacado</span>
              </div>
              <PostVisual variant={post.variant} />
              <div className="px-5 py-4">
                <PostActions likes={post.likes} comments={post.comments} />
                <h2 className="mt-4 text-lg font-black tracking-[-0.02em] text-slate-900">{post.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  <span className="font-black text-slate-900">{post.handle}</span> {post.body}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-sm font-bold text-blue-600">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          <section className="rounded-[28px] bg-slate-950 p-5 text-white shadow-xl shadow-slate-950/15">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-200">
                <StoreIcon />
              </div>
              <div>
                <p className="text-sm font-black">Tip de la semana</p>
                <p className="mt-1 text-xs font-semibold text-slate-400">Hardware & rendimiento</p>
              </div>
            </div>
            <div className="mt-4 rounded-[22px] bg-white/10 p-4">
              <h2 className="text-lg font-black">Optimiza tu flujo de aire</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Entrada frontal, salida superior y presión positiva ayudan a reducir polvo acumulado.
              </p>
              <button type="button" className="mt-4 text-sm font-black text-blue-200">
                Leer guía completa →
              </button>
            </div>
          </section>
        </div>

        <aside className="space-y-5 lg:col-span-2 xl:col-span-1 xl:sticky xl:top-20 xl:self-start">
          <div className="rounded-[24px] bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-black text-slate-900">Sugerencias para ti</p>
              <span className="text-xs font-bold text-slate-300">3 nuevas</span>
            </div>
            <div className="mt-4 space-y-4">
              {suggestions.map(([handle, detail, color]) => {
                const isFollowing = following.includes(handle);

                return (
                  <div key={handle} className="flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="h-10 w-10 shrink-0 rounded-full ring-4 ring-slate-100" style={{ backgroundColor: color }} />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-black text-slate-900">{handle}</p>
                        <p className="truncate text-xs font-semibold text-slate-400">{detail}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setFollowing(isFollowing ? following.filter((item) => item !== handle) : [...following, handle])
                      }
                      className={[
                        "rounded-full px-3 py-1.5 text-xs font-black transition",
                        isFollowing ? "bg-slate-100 text-slate-500" : "bg-blue-600 text-white hover:bg-blue-700",
                      ].join(" ")}
                    >
                      {isFollowing ? "Siguiendo" : "Seguir"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] bg-blue-600 text-white shadow-xl shadow-blue-600/20">
            <div className="relative p-5">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/15 blur-2xl" />
              <h2 className="relative text-2xl font-black tracking-[-0.03em]">¿Amaste tu PC?</h2>
              <p className="relative mt-2 text-sm leading-6 text-blue-50">
                Comparte tu setup y recibe recomendaciones de rendimiento, limpieza y upgrades.
              </p>
              <button
                type="button"
                onClick={() => setIsComposerOpen(true)}
                className="relative mt-5 h-11 w-full rounded-[14px] bg-white text-sm font-black text-blue-700 shadow-lg shadow-blue-950/10 transition hover:bg-blue-50"
              >
                Subir setup
              </button>
            </div>
          </div>

          <div className="rounded-[24px] bg-white p-4 shadow-sm">
            <p className="text-sm font-black text-slate-900">Actividad</p>
            <div className="mt-4 space-y-3">
              {[
                ["84", "comentarios nuevos"],
                ["19", "setups publicados"],
                ["7", "reviews de tiendas"],
              ].map(([value, label]) => (
                <div key={label} className="flex items-center justify-between rounded-[16px] bg-slate-50 px-3 py-3">
                  <span className="text-sm font-semibold text-slate-500">{label}</span>
                  <span className="text-sm font-black text-slate-900">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="px-2 text-xs leading-6 text-slate-400">
            <p>Privacidad · Términos · Ayuda · Prensa</p>
            <p>© 2026 TechMarket</p>
          </div>
        </aside>

        {isComposerOpen ? (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="setup-modal-title"
            className="fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-y-auto bg-slate-950/55 px-4 py-8 backdrop-blur-md"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                setIsComposerOpen(false);
              }
            }}
          >
            <form
              onSubmit={handleSetupSubmit}
              className="relative w-full max-w-xl overflow-hidden rounded-[24px] border border-white/70 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.35)]"
            >
              <div className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_10%,rgba(125,211,252,0.65),transparent_0_30%),linear-gradient(135deg,#0f766e,#2563eb)] px-6 py-6 text-white">
                <div className="absolute -right-8 top-3 h-32 w-32 rounded-full bg-white/15 blur-2xl" />
                <div className="absolute bottom-0 left-0 h-px w-full bg-white/25" />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-normal text-blue-50">
                      Comunidad
                    </span>
                    <p id="setup-modal-title" className="mt-3 text-2xl font-bold">Subir setup</p>
                    <p className="mt-2 max-w-md text-sm leading-6 text-blue-50">
                      Muestra tu espacio, tus componentes y recibe ideas de otros usuarios.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsComposerOpen(false)}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-xl leading-none text-white transition hover:bg-white/25"
                    aria-label="Cerrar modal"
                  >
                    ×
                  </button>
                </div>
              </div>

              <div className="p-6">
                <label className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-normal text-slate-400">Título</span>
                  <input
                    required
                    value={setupForm.title}
                    onChange={(event) => setSetupForm({ ...setupForm, title: event.target.value })}
                    placeholder="Mi setup limpio para programar"
                    className="h-12 w-full rounded-[12px] border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </label>
                <label className="mt-4 block space-y-2">
                  <span className="text-xs font-bold uppercase tracking-normal text-slate-400">Descripción</span>
                  <textarea
                    required
                    value={setupForm.description}
                    onChange={(event) => setSetupForm({ ...setupForm, description: event.target.value })}
                    placeholder="Describe tus componentes, cable management o lo que quieres mejorar..."
                    className="min-h-32 w-full resize-none rounded-[12px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </label>

                <div className="mt-5 overflow-hidden rounded-[16px] border border-slate-100 bg-slate-50 p-3">
                  <div className="relative h-36 overflow-hidden rounded-[12px] bg-[radial-gradient(circle_at_18%_20%,rgba(96,165,250,0.75),transparent_0_18%),radial-gradient(circle_at_78%_35%,rgba(45,212,191,0.55),transparent_0_24%),linear-gradient(145deg,#0f172a,#164e63_55%,#0f766e)]">
                    <div className="absolute bottom-5 left-5 h-10 w-32 rounded-[8px] bg-slate-950/70 shadow-2xl" />
                    <div className="absolute bottom-16 left-10 h-14 w-24 rounded-[8px] border border-white/20 bg-white/10 backdrop-blur" />
                    <span className="absolute right-3 top-3 rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase text-white">
                      Preview
                    </span>
                  </div>
                  <p className="mt-3 text-xs font-semibold text-slate-400">Vista previa generada para tu publicación</p>
                </div>

                <div className="mt-6 flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={() => setIsComposerOpen(false)}
                    className="h-12 rounded-[12px] border border-slate-200 px-5 text-sm font-bold text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700"
                  >
                    Cancelar
                  </button>
                  <button type="submit" className="h-12 rounded-[12px] bg-blue-600 px-5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700">
                    Crear publicación
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function PostActions({ likes, comments }: { likes: string; comments: string }) {
  return (
    <div className="flex items-center justify-between text-slate-500">
      <div className="flex items-center gap-3 text-sm font-bold">
        <button type="button" className="rounded-full bg-slate-100 px-3 py-1.5 transition hover:bg-rose-50 hover:text-rose-500">
          ♡ {likes}
        </button>
        <button type="button" className="rounded-full bg-slate-100 px-3 py-1.5 transition hover:bg-blue-50 hover:text-blue-600">
          <span className="inline-flex align-[-2px]"><MessageIcon /></span> {comments}
        </button>
        <button type="button" className="rounded-full bg-slate-100 px-3 py-1.5 transition hover:bg-emerald-50 hover:text-emerald-600">
          ↗ Compartir
        </button>
      </div>
      <button type="button" className="text-slate-400 transition hover:text-blue-600" aria-label="Guardar publicación">
        <BookmarkIcon />
      </button>
    </div>
  );
}
