import type { ReactNode } from "react";

type AuthLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  reversed?: boolean;
};

function AuthVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(145deg,#0f2f6d_0%,#1d4ed8_48%,#60a5fa_100%)] p-8 text-white shadow-glow">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.16),transparent_30%)]" />
      <div className="relative flex h-full min-h-[520px] flex-col justify-between">
        <div className="max-w-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
            TechMarket
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-balance">
            Conecta inventario, clientes y ventas desde una sola vista.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/80">
            Una interfaz limpia, rápida y clara para autenticación y navegación
            de producto.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/15 bg-white/12 p-4 backdrop-blur-xl">
            <div className="h-2 w-20 rounded-full bg-white/70" />
            <div className="mt-4 h-32 rounded-2xl bg-white/18" />
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/12 p-4 backdrop-blur-xl">
            <div className="h-2 w-28 rounded-full bg-white/70" />
            <div className="mt-4 space-y-3">
              <div className="h-3 rounded-full bg-white/30" />
              <div className="h-3 rounded-full bg-white/25" />
              <div className="h-3 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AuthLayout({ eyebrow, title, description, children, reversed }: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-hero-grid px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <section className={reversed ? "order-2 lg:order-1" : ""}>
          <AuthVisual />
        </section>
        <section className={reversed ? "order-1 lg:order-2" : ""}>
          <div className="rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.1)] backdrop-blur-xl sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
              {eyebrow}
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600 sm:text-base">
              {description}
            </p>
            <div className="mt-8">{children}</div>
          </div>
        </section>
      </div>
    </main>
  );
}
