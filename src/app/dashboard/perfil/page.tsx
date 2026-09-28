import { Mail, Phone, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PerfilPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Meu perfil</h1>
        <p className="text-sm text-muted-foreground">
          Informações da conta e preferências do usuário logado.
        </p>
      </div>

      <Card>
        <CardContent className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center">
          <Avatar className="h-16 w-16">
            <AvatarFallback className="bg-primary text-primary-foreground text-lg">CR</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold">Dra. Camila Reis</p>
            <p className="text-sm text-muted-foreground">Sócia-administradora · OAB/SP 123.456</p>
            <Badge variant="outline" className="mt-2 flex w-fit items-center gap-1.5">
              <Shield className="h-3.5 w-3.5" />
              Administrador
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Dados de contato</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email" className="flex items-center gap-1.5 text-muted-foreground">
              <Mail className="h-3.5 w-3.5" /> E-mail
            </Label>
            <Input id="email" readOnly value="camila.reis@reisenogueira.adv.br" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="telefone" className="flex items-center gap-1.5 text-muted-foreground">
              <Phone className="h-3.5 w-3.5" /> Telefone
            </Label>
            <Input id="telefone" readOnly value="(11) 98888-1234" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preferências</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col divide-y divide-border">
          {[
            { titulo: "Notificações de prazos", desc: "Receber alertas de prazos próximos por e-mail" },
            { titulo: "Notificações de atendimento", desc: "Receber alertas de novas mensagens de clientes" },
            { titulo: "Resumo semanal", desc: "Receber um resumo semanal de atividades do escritório" },
          ].map((pref, idx) => (
            <div key={pref.titulo} className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0">
              <div>
                <p className="text-sm font-medium">{pref.titulo}</p>
                <p className="text-xs text-muted-foreground">{pref.desc}</p>
              </div>
              <Badge variant={idx === 2 ? "outline" : "default"}>{idx === 2 ? "Desativada" : "Ativada"}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
