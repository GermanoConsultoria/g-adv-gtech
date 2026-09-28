import { FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/mock-data";
import { getDocumentos } from "@/lib/data";

export default async function DocumentosPage() {
  const documentos = await getDocumentos();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Documentos</h1>
        <p className="text-sm text-muted-foreground">
          Arquivos anexados aos processos do escritório.
        </p>
      </div>

      <Card>
        <CardContent className="overflow-x-auto pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Arquivo</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Processo</TableHead>
                <TableHead>Tamanho</TableHead>
                <TableHead>Adicionado em</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documentos.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell className="flex items-center gap-2 font-medium">
                    <FileText className="h-4 w-4 shrink-0 text-muted-foreground" />
                    {doc.nome}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{doc.tipo}</TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground">{doc.processo}</TableCell>
                  <TableCell className="text-muted-foreground">{doc.tamanho}</TableCell>
                  <TableCell className="text-muted-foreground">{formatDate(doc.data)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
