import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { AppShell } from "./components/AppShell";
import { CompanyInventory } from "./components/CompanyInventory";
import { CompanyPerformance } from "./components/CompanyPerformance";
import { CompanyTickets } from "./components/CompanyTickets";
import { CommunityHome } from "./components/CommunityHome";
import { CommunityShell } from "./components/CommunityShell";
import { AuthLayout } from "./components/AuthLayout";
import { DevNotice } from "./components/DevNotice";
import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";
import type { UserRole } from "./types";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <AuthLayout
      eyebrow="Acceso"
      title="Inicia sesión en TechMarket"
      description="Ingresa con tu correo y contraseña para acceder al panel de operaciones, catálogo y métricas."
    >
      <LoginForm
        onSubmit={(role: UserRole) => {
          navigate(role === "empresa" ? "/app/home" : "/community/home");
        }}
        onGoToRegister={() => navigate("/register")}
      />
    </AuthLayout>
  );
}

function RegisterPage() {
  const navigate = useNavigate();

  return (
    <AuthLayout
      eyebrow="Registro"
      title="Crea tu cuenta"
      description="Configura tu acceso para empezar a administrar inventario, ventas y clientes desde un solo lugar."
      reversed
    >
      <RegisterForm
        onSubmit={() => navigate("/app/home")}
        onGoToLogin={() => navigate("/login")}
      />
    </AuthLayout>
  );
}

function AppHomePage() {
  return <CompanyInventory />;
}

function DevRoutePage({ title }: { title: string }) {
  return <DevNotice title={title} />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/app" element={<AppShell />}>
        <Route path="home" element={<AppHomePage />} />
        <Route path="tickets" element={<CompanyTickets />} />
        <Route path="catalogo" element={<DevRoutePage title="Catálogo" />} />
        <Route path="sucursales" element={<DevRoutePage title="Sucursales" />} />
        <Route path="resenas" element={<DevRoutePage title="Reseñas" />} />
        <Route path="campanas" element={<DevRoutePage title="Campañas" />} />
        <Route path="rendimiento" element={<CompanyPerformance />} />
        <Route path="facturacion" element={<DevRoutePage title="Facturación" />} />
        <Route path="configuracion" element={<DevRoutePage title="Configuración" />} />
        <Route path="" element={<Navigate to="home" replace />} />
      </Route>
      <Route path="/community" element={<CommunityShell />}>
        <Route path="home" element={<CommunityHome />} />
        <Route path="explorar" element={<DevRoutePage title="Explorar" />} />
        <Route path="publicaciones" element={<DevRoutePage title="Mis publicaciones" />} />
        <Route path="mensajes" element={<DevRoutePage title="Mensajes" />} />
        <Route path="eventos" element={<DevRoutePage title="Eventos" />} />
        <Route path="perfil" element={<DevRoutePage title="Perfil" />} />
        <Route path="configuracion" element={<DevRoutePage title="Configuración" />} />
        <Route path="" element={<Navigate to="home" replace />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
