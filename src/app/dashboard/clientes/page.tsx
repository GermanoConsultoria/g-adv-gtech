import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/mock-data";
import { getClientes } from "@/lib/data";

function initials(nome: string) {
  const parts = nome.split(" ").filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}

export default async function ClientesPage() {
  const clientes = await getClientes();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Clientes</h1>
        <p className="text-sm text-muted-foreground">
          {clientes.length} clientes cadastrados, entre pessoas físicas e jurídicas.
        </p>
      </div>

      <Card>
        <CardContent className="overflow-x-auto pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cliente</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Documento</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead className="text-center">Processos ativos</TableHead>
                <TableHead>Cliente desde</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientes.map((cliente) => (
                <TableRow key={cliente.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-accent text-accent-foreground text-xs">
                          {initials(cliente.nome)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{cliente.nome}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{cliente.tipo}</Badge>
                  </TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {cliente.documento}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    <div className="flex flex-col text-xs">
                      <span>{cliente.email}</span>
                      <span>{cliente.telefone}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">{cliente.processosAtivos}</TableCell>
                  <TableCell className="text-muted-foreground">{formatDate(cliente.clienteDesde)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
