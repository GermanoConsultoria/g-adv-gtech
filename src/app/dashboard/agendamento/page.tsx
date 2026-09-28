import { Calendar, MapPin, Video } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { agendamentos, formatDate, type StatusAgendamento } from "@/lib/mock-data";

const statusVariant: Record<StatusAgendamento, "default" | "secondary" | "destructive"> = {
  Confirmado: "default",
  Pendente: "secondary",
  Cancelado: "destructive",
};

export default function AgendamentoPage() {
  const confirmados = agendamentos.filter((a) => a.status === "Confirmado").length;
  const pendentes = agendamentos.filter((a) => a.status === "Pendente").length;
  const ordenados = [...agendamentos].sort((a, b) => (a.data + a.hora).localeCompare(b.data + b.hora));

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Agendamento</h1>
        <p className="text-sm text-muted-foreground">
          Reuniões, audiências e consultas agendadas com clientes.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Total agendados</p>
            <p className="text-2xl font-semibold">{agendamentos.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Confirmados</p>
            <p className="text-2xl font-semibold text-emerald-600">{confirmados}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Pendentes de confirmação</p>
            <p className="text-2xl font-semibold">{pendentes}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="flex flex-col divide-y divide-border pt-6">
          {ordenados.map((ag) => (
            <div key={ag.id} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-14 shrink-0 flex-col items-center justify-center rounded-md border border-border bg-muted/40">
                  <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="mt-0.5 text-xs font-medium">{ag.hora}</span>
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{ag.tipo}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {ag.cliente} · {formatDate(ag.data)} · {ag.responsavel}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <span className="hidden items-center gap-1 text-xs text-muted-foreground sm:flex">
                  {ag.modalidade === "Online" ? (
                    <Video className="h-3.5 w-3.5" />
                  ) : (
                    <MapPin className="h-3.5 w-3.5" />
                  )}
                  {ag.modalidade}
                </span>
                <Badge variant={statusVariant[ag.status]}>{ag.status}</Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
