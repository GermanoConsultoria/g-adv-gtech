import Link from "next/link";
import { Briefcase, CalendarClock, Users, Wallet, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  clientes,
  processos,
  prazos,
  movimentos,
  formatCurrency,
  formatDate,
} from "@/lib/mock-data";

const prioridadeVariant = {
  Urgente: "destructive",
  Alta: "default",
  Normal: "secondary",
} as const;

const statusVariant = {
  "Em andamento": "default",
  Aguardando: "secondary",
  Concluído: "outline",
} as const;

export default function DashboardPage() {
  const processosAtivos = processos.filter((p) => p.status !== "Concluído").length;
  const proximosPrazos = [...prazos].sort((a, b) => a.data.localeCompare(b.data)).slice(0, 5);
  const receitaMes = movimentos
    .filter((m) => m.tipo === "Receita")
    .reduce((acc, m) => acc + m.valor, 0);
  const ultimosProcessos = processos.slice(0, 5);

  const stats = [
    { label: "Processos ativos", value: processosAtivos, icon: Briefcase, href: "/dashboard/processos" },
    { label: "Prazos nos próximos 30 dias", value: prazos.length, icon: CalendarClock, href: "/dashboard/prazos" },
    { label: "Clientes ativos", value: clientes.length, icon: Users, href: "/dashboard/clientes" },
    { label: "Faturamento do mês", value: formatCurrency(receitaMes), icon: Wallet, href: "/dashboard/financeiro" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Visão geral</h1>
        <p className="text-sm text-muted-foreground">
          Resumo da atividade do escritório com dados de demonstração.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Próximos prazos</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/prazos" className="flex items-center gap-1">
                Ver todos <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col divide-y divide-border">
            {proximosPrazos.map((prazo) => (
              <div key={prazo.id} className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{prazo.descricao}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {prazo.cliente} · {formatDate(prazo.data)}
                  </p>
                </div>
                <Badge variant={prioridadeVariant[prazo.prioridade]} className="shrink-0">
                  {prazo.prioridade}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Processos recentes</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/processos" className="flex items-center gap-1">
                Ver todos <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col divide-y divide-border">
            {ultimosProcessos.map((processo) => (
              <div key={processo.id} className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{processo.cliente}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {processo.area} · {processo.numero}
                  </p>
                </div>
                <Badge variant={statusVariant[processo.status]} className="shrink-0">
                  {processo.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
