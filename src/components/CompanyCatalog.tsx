import { CatalogIcon, SearchIcon } from "./Icons";
import { useState } from "react";
import type { FormEvent } from "react";

const categories = [
  ["GPUs", "38", "12 nuevas"],
  ["CPUs", "24", "5 nuevas"],
  ["Memorias", "41", "9 nuevas"],
  ["Gabinetes", "16", "3 nuevas"],
];

const initialCatalogItems = [
  ["RTX 4070 Super", "GPU", "Bs 5,560", "Publicado", "124 vistas"],
  ["Intel Core i7 13th", "CPU", "Bs 3,960", "Publicado", "92 vistas"],
  ["Corsair RGB 32GB", "Memoria", "Bs 1,040", "Borrador", "18 vistas"],
  ["Samsung 990 NVMe", "Almacenamiento", "Bs 625", "Publicado", "76 vistas"],
];

export function CompanyCatalog() {
  const [catalogItems, setCatalogItems] = useState(initialCatalogItems);
  const [isCreating, setIsCreating] = useState(false);
  const [form, setForm] = useState({
    name: "",
    category: "GPU",
    price: "",
    status: "Publicado",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const price = form.price.trim().startsWith("Bs") ? form.price.trim() : `Bs ${form.price.trim()}`;

    setCatalogItems([[form.name.trim(), form.category, price, form.status, "0 vistas"], ...catalogItems]);
    setForm({ name: "", category: "GPU", price: "", status: "Publicado" });
    setIsCreating(false);
  };

  return (
    <section className="flex-1 bg-[#f4f6f8] px-8 py-8">
      <div className="grid gap-5 md:grid-cols-4">
        {categories.map(([label, value, helper]) => (
          <article key={label} className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-slate-400">
              <CatalogIcon />
              <p className="text-sm font-semibold text-slate-500">{label}</p>
            </div>
            <p className="mt-3 text-4xl font-semibold tracking-normal text-slate-900">{value}</p>
            <p className="mt-2 text-sm font-medium text-blue-600">{helper}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_170px]">
        <label className="flex h-11 items-center gap-3 rounded-[8px] border border-slate-200 bg-white px-4 text-sm text-slate-400 shadow-sm">
          <SearchIcon />
          Buscar producto del catálogo...
        </label>
        <button
          type="button"
          onClick={() => setIsCreating(true)}
          className="h-11 rounded-[8px] bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm"
        >
          Nuevo producto
        </button>
      </div>

      <div className="mt-8 overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-sm">
        <div className="grid grid-cols-[1fr_140px_120px_120px_120px] border-b border-slate-100 px-5 py-3 text-xs font-semibold uppercase text-slate-400">
          <span>Producto</span>
          <span>Categoría</span>
          <span>Precio</span>
          <span>Estado</span>
          <span>Actividad</span>
        </div>
        <div className="divide-y divide-slate-100">
          {catalogItems.map(([name, category, price, status, views]) => (
            <div key={name} className="grid grid-cols-[1fr_140px_120px_120px_120px] items-center px-5 py-4 text-sm">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-[8px] bg-slate-900" />
                <span className="font-semibold text-slate-900">{name}</span>
              </div>
              <span className="text-slate-500">{category}</span>
              <span className="font-semibold text-slate-900">{price}</span>
              <span className={status === "Publicado" ? "font-semibold text-emerald-600" : "font-semibold text-orange-500"}>
                {status}
              </span>
              <span className="text-slate-500">{views}</span>
            </div>
          ))}
        </div>
      </div>

      {isCreating ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="new-product-title"
          className="fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-y-auto bg-slate-950/55 px-4 py-8 backdrop-blur-md"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsCreating(false);
            }
          }}
        >
          <form
            onSubmit={handleSubmit}
            className="relative w-full max-w-2xl overflow-hidden rounded-[24px] border border-white/70 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.35)]"
          >
            <div className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_10%,rgba(96,165,250,0.55),transparent_0_30%),linear-gradient(135deg,#0f172a,#1d4ed8)] px-6 py-6 text-white">
              <div className="absolute right-8 top-6 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-normal text-blue-50">
                    Catálogo
                  </span>
                  <p id="new-product-title" className="mt-3 text-2xl font-bold">Nuevo producto</p>
                  <p className="mt-2 max-w-md text-sm leading-6 text-blue-50">
                    Agrega un producto visible para clientes y mantén el precio en bolivianos.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCreating(false)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-xl leading-none text-white transition hover:bg-white/25"
                  aria-label="Cerrar modal"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-normal text-slate-400">Producto</span>
                  <input
                    required
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    placeholder="RTX 4070 Super"
                    className="h-12 w-full rounded-[12px] border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-normal text-slate-400">Categoría</span>
                  <select
                    value={form.category}
                    onChange={(event) => setForm({ ...form, category: event.target.value })}
                    className="h-12 w-full rounded-[12px] border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  >
                    <option>GPU</option>
                    <option>CPU</option>
                    <option>Memoria</option>
                    <option>Almacenamiento</option>
                    <option>Gabinete</option>
                  </select>
                </label>
                <label className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-normal text-slate-400">Precio</span>
                  <input
                    required
                    value={form.price}
                    onChange={(event) => setForm({ ...form, price: event.target.value })}
                    placeholder="Bs 5,560"
                    className="h-12 w-full rounded-[12px] border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-normal text-slate-400">Estado</span>
                  <select
                    value={form.status}
                    onChange={(event) => setForm({ ...form, status: event.target.value })}
                    className="h-12 w-full rounded-[12px] border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  >
                    <option>Publicado</option>
                    <option>Borrador</option>
                  </select>
                </label>
              </div>

              <div className="mt-6 flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setIsCreating(false)}
                  className="h-12 rounded-[12px] border border-slate-200 px-5 text-sm font-bold text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700"
                >
                  Cancelar
                </button>
                <button type="submit" className="h-12 rounded-[12px] bg-blue-600 px-6 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700">
                  Crear producto
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : null}
    </section>
  );
}
