"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  CalendarClock,
  Users,
  Wallet,
  FileText,
  MessageSquare,
  Calendar,
  UserCog,
  KanbanSquare,
  ShieldCheck,
  BookOpen,
  Landmark,
  MessageCircle,
  FileCheck2,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = { href: string; label: string; icon: LucideIcon };
type NavGroup = { label: string; items: NavItem[] };

const visaoGeral: NavItem = { href: "/dashboard", label: "Visão geral", icon: LayoutDashboard };

const groups: NavGroup[] = [
  {
    label: "Operação",
    items: [
      { href: "/dashboard/processos", label: "Processos", icon: Briefcase },
      { href: "/dashboard/prazos", label: "Prazos", icon: CalendarClock },
      { href: "/dashboard/clientes", label: "Clientes", icon: Users },
      { href: "/dashboard/financeiro", label: "Financeiro", icon: Wallet },
      { href: "/dashboard/documentos", label: "Documentos", icon: FileText },
      { href: "/dashboard/atendimento", label: "Atendimento", icon: MessageSquare },
      { href: "/dashboard/agendamento", label: "Agendamento", icon: Calendar },
    ],
  },
  {
    label: "Administração",
    items: [
      { href: "/dashboard/usuarios", label: "Usuários", icon: UserCog },
      { href: "/dashboard/kanban", label: "Kanban", icon: KanbanSquare },
      { href: "/dashboard/acesso-processos", label: "Acesso aos processos", icon: ShieldCheck },
      { href: "/dashboard/blog", label: "Blog", icon: BookOpen },
    ],
  },
  {
    label: "Integrações",
    items: [
      { href: "/dashboard/integracoes/inter", label: "Banco Inter (PIX)", icon: Landmark },
      { href: "/dashboard/integracoes/whatsapp", label: "WhatsApp", icon: MessageCircle },
      { href: "/dashboard/integracoes/nfse", label: "Focus NFe (NFS-e)", icon: FileCheck2 },
    ],
  },
];

const perfil: NavItem = { href: "/dashboard/perfil", label: "Meu perfil", icon: Settings };

function isActive(pathname: string, href: string) {
  return href === "/dashboard" ? pathname === "/dashboard" : pathname.startsWith(href);
}

function NavLink({
  item,
  active,
  onNavigate,
}: {
  item: NavItem;
  active: boolean;
  onNavigate?: () => void;
}) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
        active
          ? "bg-sidebar-primary text-sidebar-primary-foreground"
          : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      )}
    >
      <Icon className="h-4 w-4" />
      {item.label}
    </Link>
  );
}

export function DashboardNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <NavLink item={visaoGeral} active={isActive(pathname, visaoGeral.href)} onNavigate={onNavigate} />
      </div>

      {groups.map((group) => (
        <div key={group.label} className="flex flex-col gap-1">
          <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-sidebar-foreground/50">
            {group.label}
          </p>
          {group.items.map((item) => (
            <NavLink
              key={item.href}
              item={item}
              active={isActive(pathname, item.href)}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      ))}

      <div className="mt-auto flex flex-col gap-1 border-t border-sidebar-border pt-3">
        <NavLink item={perfil} active={isActive(pathname, perfil.href)} onNavigate={onNavigate} />
      </div>
    </nav>
  );
}
