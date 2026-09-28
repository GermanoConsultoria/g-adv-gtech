import { ArrowDownRight, ArrowUpRight, Wallet } from "lucide-react";
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
import { formatCurrency, formatDate, type StatusMovimento } from "@/lib/mock-data";
import { getMovimentos } from "@/lib/data";

const statusVariant: Record<StatusMovimento, "default" | "secondary"> = {
  Pago: "default",
  Pendente: "secondary",
};

export default async function FinanceiroPage() {
  const movimentos = await getMovimentos();
  const receitas = movimentos.filter((m) => m.tipo === "Receita").reduce((acc, m) => acc + m.valor, 0);
  const despesas = movimentos.filter((m) => m.tipo === "Despesa").reduce((acc, m) => acc + m.valor, 0);
  const saldo = receitas - despesas;
  const ordenados = [...movimentos].sort((a, b) => b.data.localeCompare(a.data));

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Financeiro</h1>
        <p className="text-sm text-muted-foreground">Resumo de receitas e despesas do escritório.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Receitas</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-emerald-600">{formatCurrency(receitas)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Despesas</CardTitle>
            <ArrowDownRight className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-red-500">{formatCurrency(despesas)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Saldo</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">{formatCurrency(saldo)}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lançamentos</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead className="text-right">Valor</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ordenados.map((mov) => (
                <TableRow key={mov.id}>
                  <TableCell className="whitespace-nowrap text-muted-foreground">{formatDate(mov.data)}</TableCell>
                  <TableCell className="font-medium">{mov.descricao}</TableCell>
                  <TableCell className="text-muted-foreground">{mov.cliente}</TableCell>
                  <TableCell className="text-muted-foreground">{mov.categoria}</TableCell>
                  <TableCell
                    className={`text-right font-medium ${
                      mov.tipo === "Receita" ? "text-emerald-600" : "text-red-500"
                    }`}
                  >
                    {mov.tipo === "Receita" ? "+" : "-"} {formatCurrency(mov.valor)}
                  </TableCell>
                  <TableCell>
                    <Badge variant={statusVariant[mov.status]}>{mov.status}</Badge>
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
