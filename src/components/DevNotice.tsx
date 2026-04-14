type DevNoticeProps = {
  title: string;
  description?: string;
};

export function DevNotice({ title, description }: DevNoticeProps) {
  return (
    <section className="flex flex-1 items-center justify-center bg-slate-50 px-8 py-10">
      <div className="w-full max-w-2xl rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-400">
          En desarrollo
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
          {description ?? "Esta sección todavía no está disponible. Estamos preparando su contenido y funcionalidades."}
        </p>
        <div className="mt-8 rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-6">
          <div className="mx-auto h-12 w-12 rounded-2xl bg-slate-200/70" />
          <p className="mt-4 text-sm font-medium text-slate-500">
            Próximamente añadiremos contenido y acciones aquí.
          </p>
        </div>
      </div>
    </section>
  );
}
