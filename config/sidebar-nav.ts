import { Home, BarChart2, CreditCard, Settings, Shield, Users } from "lucide-react";

export type NavItem = { href: string; label: string; icon: keyof typeof icons; };

export const icons = { Home, BarChart2, CreditCard, Settings, Users, Shield, };

export const userNav: NavItem[] = [
  { href: "/dashboard", label: "Home", icon: 'Home', },
  { href: "/dashboard/usage", label: "API Usage", icon: 'BarChart2', },
  { href: "/dashboard/billing", label: "Billing", icon: 'CreditCard', },
  { href: "/dashboard/settings", label: "Settings", icon: 'Settings' },
];

export const adminNav: NavItem[] = [
  { href: "/admin", label: "Overview", icon: 'Home', },
  { href: "/admin/users", label: "Users", icon: 'Users', },
  { href: "/admin/usage", label: "API Usage", icon: 'BarChart2', },
  { href: "/admin/billing", label: "Billing", icon: 'CreditCard', },
  { href: "/admin/settings", label: "Admin Settings", icon: 'Shield', },
];
