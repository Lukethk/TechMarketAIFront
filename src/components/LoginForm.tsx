import { useState } from "react";
import type { UserRole } from "../types";

type LoginFormProps = {
  onSubmit: (role: UserRole) => void;
  onGoToRegister: () => void;
};

export function LoginForm({ onSubmit, onGoToRegister }: LoginFormProps) {
  const [role, setRole] = useState<UserRole>("empresa");

  return (
    <form
      className="space-y-5"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(role);
      }}
    >
      <div className="space-y-2">
        <p className="text-sm font-medium text-slate-700">Tipo de acceso</p>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setRole("empresa")}
            className={[
              "rounded-2xl border px-4 py-3 text-left transition",
              role === "empresa"
                ? "border-blue-200 bg-blue-50 text-blue-700"
                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300",
            ].join(" ")}
          >
            <p className="text-sm font-semibold">Empresa</p>
            <p className="mt-1 text-xs leading-5 text-current/70">
              Panel de administración y ventas.
            </p>
          </button>
          <button
            type="button"
            onClick={() => setRole("usuario")}
            className={[
              "rounded-2xl border px-4 py-3 text-left transition",
              role === "usuario"
                ? "border-blue-200 bg-blue-50 text-blue-700"
                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300",
            ].join(" ")}
          >
            <p className="text-sm font-semibold">Usuario</p>
            <p className="mt-1 text-xs leading-5 text-current/70">
              Comunidad, actividad y mensajes.
            </p>
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700" htmlFor="login-email">
          Correo electrónico
        </label>
        <input
          id="login-email"
          type="email"
          placeholder={role === "empresa" ? "tu@techmarket.com" : "tu@comunidad.com"}
          className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700" htmlFor="login-password">
          Contraseña
        </label>
        <input
          id="login-password"
          type="password"
          placeholder="••••••••"
          className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
        />
      </div>
      <div className="flex items-center justify-between gap-3 text-sm">
        <label className="flex items-center gap-2 text-slate-600">
          <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
          Recordarme
        </label>
        <button
          type="button"
          onClick={() => {
            // This stays as a visual affordance for now.
          }}
          className="font-medium text-blue-600 transition hover:text-blue-700"
        >
          Olvidé mi contraseña
        </button>
      </div>
      <button
        type="submit"
        className="h-12 w-full rounded-2xl bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        {role === "empresa" ? "Entrar al panel" : "Entrar a la comunidad"}
      </button>
      <p className="text-center text-sm text-slate-500">
        ¿No tienes cuenta?{" "}
        <button
          type="button"
          onClick={onGoToRegister}
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          Crear una
        </button>
      </p>
    </form>
  );
}
