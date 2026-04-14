type RegisterFormProps = {
  onSubmit: () => void;
  onGoToLogin: () => void;
};

export function RegisterForm({ onSubmit, onGoToLogin }: RegisterFormProps) {
  return (
    <form
      className="space-y-5"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700" htmlFor="register-name">
            Nombre completo
          </label>
          <input
            id="register-name"
            type="text"
            placeholder="Juan Pérez"
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700" htmlFor="register-company">
            Empresa
          </label>
          <input
            id="register-company"
            type="text"
            placeholder="TechMarket"
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700" htmlFor="register-email">
          Correo electrónico
        </label>
        <input
          id="register-email"
          type="email"
          placeholder="tu@techmarket.com"
          className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700" htmlFor="register-password">
            Contraseña
          </label>
          <input
            id="register-password"
            type="password"
            placeholder="••••••••"
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700" htmlFor="register-confirm">
            Confirmar contraseña
          </label>
          <input
            id="register-confirm"
            type="password"
            placeholder="••••••••"
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
          />
        </div>
      </div>
      <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
        />
        Acepto los términos y condiciones y confirmo que quiero recibir actualizaciones de producto.
      </label>
      <button
        type="submit"
        className="h-12 w-full rounded-2xl bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        Crear cuenta
      </button>
      <p className="text-center text-sm text-slate-500">
        ¿Ya tienes cuenta?{" "}
        <button
          type="button"
          onClick={onGoToLogin}
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          Inicia sesión
        </button>
      </p>
    </form>
  );
}
