import { CheckCircle2, Landmark } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { transacoesPix, formatCurrency, formatDate } from "@/lib/mock-data";

export default function InterIntegracaoPage() {
  const recebido = transacoesPix
    .filter((t) => t.tipo === "Recebido")
    .reduce((acc, t) => acc + t.valor, 0);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Banco Inter (PIX)</h1>
        <p className="text-sm text-muted-foreground">
          Integração com o Banco Inter para recebimento e conciliação automática via Pix.
        </p>
      </div>

      <Card>
        <CardContent className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-orange-500/10 text-orange-500">
              <Landmark className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">Conta Inter — Reis &amp; Nogueira Advocacia</p>
              <p className="text-xs text-muted-foreground">Conectada · sincronização automática a cada 5 minutos</p>
            </div>
          </div>
          <Badge className="flex w-fit items-center gap-1.5 bg-emerald-600 hover:bg-emerald-600">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Conectado
          </Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Total recebido via Pix (últimos 30 dias)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-semibold text-emerald-600">{formatCurrency(recebido)}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Últimas transações</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead className="text-right">Valor</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transacoesPix.map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell className="whitespace-nowrap text-muted-foreground">{formatDate(tx.data)}</TableCell>
                  <TableCell className="font-medium">{tx.descricao}</TableCell>
                  <TableCell
                    className={`text-right font-medium ${
                      tx.tipo === "Recebido" ? "text-emerald-600" : "text-red-500"
                    }`}
                  >
                    {tx.tipo === "Recebido" ? "+" : "-"} {formatCurrency(tx.valor)}
                  </TableCell>
                  <TableCell>
                    <Badge variant={tx.status === "Concluído" ? "default" : "secondary"}>{tx.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
