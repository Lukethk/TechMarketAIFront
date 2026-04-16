import { CatalogIcon, SearchIcon, StoreIcon } from "./Icons";

const metrics = [
  {
    label: "Total de Artículos",
    value: "142",
    helper: "+12 esta semana",
    tone: "text-emerald-600",
    icon: <CatalogIcon />,
  },
  {
    label: "Stock Bajo",
    value: "5",
    helper: "Acción requerida",
    tone: "text-red-500",
    icon: <StoreIcon />,
  },
  {
    label: "Valor Total",
    value: "$12,400",
    helper: "Valor de venta est.",
    tone: "text-slate-400",
    icon: <span className="text-lg font-semibold">$</span>,
  },
];

const products = [
  {
    category: "GPU",
    name: "NV RTX",
    price: "$799.00",
    stock: "12",
    status: "En Stock",
    statusClass: "bg-emerald-100 text-emerald-700",
    visual: "from-[#0a0f12] via-[#17251d] to-[#66a243]",
  },
  {
    category: "CPU",
    name: "Intel 13S",
    price: "$569.00",
    stock: "0",
    status: "Agotado",
    statusClass: "bg-red-100 text-red-600",
    visual: "from-[#eaf0f4] via-[#49a1bb] to-[#11647d]",
  },
  {
    category: "Placa Base",
    name: "ASUS R Z790",
    price: "$499.99",
    stock: "4",
    status: "En Stock",
    statusClass: "bg-emerald-100 text-emerald-700",
    visual: "from-[#c4e5d5] via-[#527d67] to-[#0d2a25]",
  },
  {
    category: "Memoria",
    name: "Corsa RGB 3",
    price: "$149.99",
    stock: "2",
    status: "Poco Stock",
    statusClass: "bg-orange-100 text-orange-600",
    visual: "from-[#111827] via-[#121826] to-[#5a6474]",
  },
  {
    category: "Almacenamiento",
    name: "Samsung 9 1TB NVMe",
    price: "$89.99",
    stock: "25",
    status: "En Stock",
    statusClass: "bg-emerald-100 text-emerald-700",
    visual: "from-[#0f1d19] via-[#1c332c] to-[#303b3a]",
  },
  {
    category: "Gabinete",
    name: "NZXT Comp",
    price: "$94.99",
    stock: "8",
    status: "En Stock",
    statusClass: "bg-emerald-100 text-emerald-700",
    visual: "from-[#c8efe3] via-[#f2f5ef] to-[#8cbfae]",
  },
];

function ProductVisual({ visual }: { visual: string }) {
  return (
    <div className={`relative h-[150px] overflow-hidden bg-gradient-to-br ${visual}`}>
      <div className="absolute left-6 top-8 h-20 w-28 rounded-[6px] bg-black/30 shadow-[0_12px_30px_rgba(0,0,0,0.28)]" />
      <div className="absolute left-10 top-12 h-8 w-20 rounded-[4px] border border-white/20 bg-white/10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
}

export function CompanyInventory() {
  return (
    <section className="flex-1 bg-[#f4f6f8] px-8 py-8">
      <div className="grid gap-5 md:grid-cols-3">
        {metrics.map((metric) => (
          <article key={metric.label} className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-slate-400">
              {metric.icon}
              <p className="text-sm font-semibold text-slate-500">{metric.label}</p>
            </div>
            <p className="mt-3 text-4xl font-semibold tracking-normal text-slate-900">{metric.value}</p>
            <p className={`mt-2 text-sm font-medium ${metric.tone}`}>{metric.helper}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_170px_150px]">
        <label className="flex h-11 items-center gap-3 rounded-[8px] border border-slate-200 bg-white px-4 text-sm text-slate-400 shadow-sm">
          <SearchIcon />
          Buscar GPU, CPU, RAM...
        </label>
        <button
          type="button"
          className="h-11 rounded-[8px] border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-500 shadow-sm"
        >
          Todas las Categorías
        </button>
        <button
          type="button"
          className="h-11 rounded-[8px] border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-500 shadow-sm"
        >
          Más reciente
        </button>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <article key={product.name} className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-sm">
            <div className="relative">
              <ProductVisual visual={product.visual} />
              <span className={`absolute left-4 top-4 rounded-[6px] px-2.5 py-1 text-xs font-semibold ${product.statusClass}`}>
                {product.status}
              </span>
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold text-blue-600">{product.category}</p>
              <h2 className="mt-1 min-h-[48px] text-xl font-semibold leading-6 text-slate-900">{product.name}</h2>
              <div className="mt-4 grid grid-cols-2 border-t border-slate-100 pt-4">
                <div>
                  <p className="text-xs font-medium text-slate-400">Precio</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">{product.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium text-slate-400">Stock</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">
                    <span className={product.stock === "0" ? "text-red-500" : product.stock === "2" ? "text-orange-500" : ""}>
                      {product.stock}
                    </span>{" "}
                    <span className="text-sm font-medium text-slate-500">unidades</span>
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
