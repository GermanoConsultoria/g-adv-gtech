import { CheckCircle2, FileCheck2 } from "lucide-react";
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
import { formatCurrency, formatDate } from "@/lib/mock-data";
import { getNotasFiscais } from "@/lib/data";

const statusVariant = {
  Emitida: "default",
  Processando: "secondary",
  Cancelada: "destructive",
} as const;

export default async function NfseIntegracaoPage() {
  const notasFiscais = await getNotasFiscais();
  const emitidas = notasFiscais.filter((n) => n.status === "Emitida").length;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Focus NFe (NFS-e)</h1>
        <p className="text-sm text-muted-foreground">
          Integração para emissão automática de notas fiscais de serviço eletrônicas.
        </p>
      </div>

      <Card>
        <CardContent className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
              <FileCheck2 className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">Focus NFe</p>
              <p className="text-xs text-muted-foreground">
                {emitidas} notas emitidas nos últimos 30 dias
              </p>
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
          <CardTitle>Notas fiscais emitidas</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Número</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Serviço</TableHead>
                <TableHead className="text-right">Valor</TableHead>
                <TableHead>Emitida em</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notasFiscais.map((nf) => (
                <TableRow key={nf.id}>
                  <TableCell className="font-mono text-xs">{nf.numero}</TableCell>
                  <TableCell className="font-medium">{nf.cliente}</TableCell>
                  <TableCell className="text-muted-foreground">{nf.servico}</TableCell>
                  <TableCell className="text-right">{formatCurrency(nf.valor)}</TableCell>
                  <TableCell className="text-muted-foreground">{formatDate(nf.data)}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariant[nf.status]}>{nf.status}</Badge>
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
