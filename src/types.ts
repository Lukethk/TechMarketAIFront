import type { ReactNode } from "react";

export type ViewMode = "login" | "register" | "sidebar";

export type NavItem = {
  label: string;
  icon: ReactNode;
  active?: boolean;
  badge?: string;
};
