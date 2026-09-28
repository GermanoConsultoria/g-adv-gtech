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
import { acessosProcessos } from "@/lib/mock-data";

export default function AcessoProcessosPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Acesso aos processos</h1>
        <p className="text-sm text-muted-foreground">
          Controle de quais advogados têm acesso a cada processo do escritório.
        </p>
      </div>

      <Card>
        <CardContent className="overflow-x-auto pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Processo</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Responsável principal</TableHead>
                <TableHead>Advogados com acesso</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {acessosProcessos.map((item) => (
                <TableRow key={item.processoNumero}>
                  <TableCell className="font-mono text-xs">{item.processoNumero}</TableCell>
                  <TableCell className="font-medium">{item.cliente}</TableCell>
                  <TableCell className="text-muted-foreground">{item.responsavelPrincipal}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1.5">
                      {item.advogadosComAcesso.map((advogado) => (
                        <Badge key={advogado} variant="outline">
                          {advogado}
                        </Badge>
                      ))}
                    </div>
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
