import { CheckCircle2, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAtendimentos } from "@/lib/data";

export default async function WhatsappIntegracaoPage() {
  const atendimentos = await getAtendimentos();
  const viaWhatsapp = atendimentos.filter((a) => a.canal === "WhatsApp");
  const abertas = viaWhatsapp.filter((a) => a.status === "Aberto").length;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">WhatsApp</h1>
        <p className="text-sm text-muted-foreground">
          Integração com a API oficial do WhatsApp para atendimento e notificações automáticas.
        </p>
      </div>

      <Card>
        <CardContent className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-600">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">+55 (11) 3456-7890</p>
              <p className="text-xs text-muted-foreground">Número conectado · WhatsApp Business API</p>
            </div>
          </div>
          <Badge className="flex w-fit items-center gap-1.5 bg-emerald-600 hover:bg-emerald-600">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Conectado
          </Badge>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Conversas via WhatsApp</p>
            <p className="text-2xl font-semibold">{viaWhatsapp.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Conversas em aberto</p>
            <p className="text-2xl font-semibold">{abertas}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Mensagens automáticas ativas</p>
            <p className="text-2xl font-semibold">3</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Mensagens automáticas configuradas</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col divide-y divide-border">
          {[
            { titulo: "Boas-vindas", desc: "Enviada ao primeiro contato de um novo cliente" },
            { titulo: "Confirmação de agendamento", desc: "Enviada 24h antes de reuniões e audiências" },
            { titulo: "Lembrete de prazo", desc: "Enviada quando um prazo do cliente se aproxima" },
          ].map((item) => (
            <div key={item.titulo} className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0">
              <div>
                <p className="text-sm font-medium">{item.titulo}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
              <Badge variant="outline">Ativa</Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
