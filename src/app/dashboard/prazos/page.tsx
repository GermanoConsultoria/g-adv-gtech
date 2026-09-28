import { CalendarClock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate, type PrioridadePrazo } from "@/lib/mock-data";
import { getPrazos } from "@/lib/data";

const prioridadeVariant: Record<PrioridadePrazo, "destructive" | "default" | "secondary"> = {
  Urgente: "destructive",
  Alta: "default",
  Normal: "secondary",
};

export default async function PrazosPage() {
  const prazos = await getPrazos();
  const ordenados = [...prazos].sort((a, b) => a.data.localeCompare(b.data));

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Prazos</h1>
        <p className="text-sm text-muted-foreground">
          Acompanhamento dos próximos prazos processuais do escritório.
        </p>
      </div>

      <Card>
        <CardContent className="overflow-x-auto pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Processo</TableHead>
                <TableHead>Responsável</TableHead>
                <TableHead>Prioridade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ordenados.map((prazo) => (
                <TableRow key={prazo.id}>
                  <TableCell className="flex items-center gap-2 whitespace-nowrap font-medium">
                    <CalendarClock className="h-3.5 w-3.5 text-muted-foreground" />
                    {formatDate(prazo.data)}
                  </TableCell>
                  <TableCell>{prazo.descricao}</TableCell>
                  <TableCell className="text-muted-foreground">{prazo.tipo}</TableCell>
                  <TableCell className="text-muted-foreground">{prazo.cliente}</TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {prazo.processoNumero}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{prazo.responsavel}</TableCell>
                  <TableCell>
                    <Badge variant={prioridadeVariant[prazo.prioridade]}>{prazo.prioridade}</Badge>
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
