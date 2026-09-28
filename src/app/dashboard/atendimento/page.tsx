import { MessageSquare, Mail, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { formatDate, type Canal } from "@/lib/mock-data";
import { getAtendimentos } from "@/lib/data";

const canalIcon: Record<Canal, typeof MessageSquare> = {
  WhatsApp: Smartphone,
  "E-mail": Mail,
  "Portal do cliente": MessageSquare,
};

function initials(nome: string) {
  const parts = nome.split(" ").filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}

export default async function AtendimentoPage() {
  const atendimentos = await getAtendimentos();
  const abertos = atendimentos.filter((a) => a.status === "Aberto").length;
  const naoLidas = atendimentos.reduce((acc, a) => acc + a.naoLidas, 0);
  const ordenados = [...atendimentos].sort((a, b) => b.data.localeCompare(a.data));

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Atendimento</h1>
        <p className="text-sm text-muted-foreground">
          Conversas com clientes recebidas por WhatsApp, e-mail e portal do cliente.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="flex items-center justify-between pt-6">
            <div>
              <p className="text-sm text-muted-foreground">Conversas abertas</p>
              <p className="text-2xl font-semibold">{abertos}</p>
            </div>
            <MessageSquare className="h-5 w-5 text-muted-foreground" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Mensagens não lidas</p>
            <p className="text-2xl font-semibold">{naoLidas}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Total de conversas</p>
            <p className="text-2xl font-semibold">{atendimentos.length}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="flex flex-col divide-y divide-border pt-6">
          {ordenados.map((at) => {
            const CanalIcon = canalIcon[at.canal];
            return (
              <div key={at.id} className="flex items-start gap-3 py-4 first:pt-0 last:pb-0">
                <Avatar className="h-9 w-9 shrink-0">
                  <AvatarFallback className="bg-accent text-accent-foreground text-xs">
                    {initials(at.cliente)}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-sm font-medium">{at.cliente}</p>
                    <span className="shrink-0 text-xs text-muted-foreground">{formatDate(at.data)}</span>
                  </div>
                  <p className="truncate text-xs font-medium text-muted-foreground">{at.assunto}</p>
                  <p className="mt-1 truncate text-sm text-muted-foreground">{at.ultimaMensagem}</p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-2">
                  <Badge variant={at.status === "Aberto" ? "default" : "outline"}>{at.status}</Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <CanalIcon className="h-3.5 w-3.5" />
                    {at.canal}
                    {at.naoLidas > 0 && (
                      <Badge variant="destructive" className="ml-1 h-5 min-w-5 justify-center px-1">
                        {at.naoLidas}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
