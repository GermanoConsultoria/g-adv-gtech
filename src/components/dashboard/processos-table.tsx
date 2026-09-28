"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency, formatDate, type Processo, type StatusProcesso } from "@/lib/mock-data";

const statusVariant: Record<StatusProcesso, "default" | "secondary" | "outline"> = {
  "Em andamento": "default",
  Aguardando: "secondary",
  Concluído: "outline",
};

const filters = ["Todos", "Em andamento", "Aguardando", "Concluído"] as const;

export function ProcessosTable({ processos }: { processos: Processo[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todos");

  const filtered = useMemo(
    () => (filter === "Todos" ? processos : processos.filter((p) => p.status === filter)),
    [filter, processos]
  );

  return (
    <Card>
      <CardHeader>
        <Tabs value={filter} onValueChange={(v) => setFilter(v as (typeof filters)[number])}>
          <TabsList>
            {filters.map((f) => (
              <TabsTrigger key={f} value={f}>
                {f}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Número</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Área</TableHead>
              <TableHead>Fase</TableHead>
              <TableHead>Responsável</TableHead>
              <TableHead>Próximo prazo</TableHead>
              <TableHead className="text-right">Valor da causa</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((processo) => (
              <TableRow key={processo.id}>
                <TableCell className="font-mono text-xs">{processo.numero}</TableCell>
                <TableCell className="font-medium">{processo.cliente}</TableCell>
                <TableCell>{processo.area}</TableCell>
                <TableCell className="text-muted-foreground">{processo.fase}</TableCell>
                <TableCell className="text-muted-foreground">{processo.responsavel}</TableCell>
                <TableCell className="text-muted-foreground">{formatDate(processo.proximoPrazo)}</TableCell>
                <TableCell className="text-right">
                  {processo.valorCausa > 0 ? formatCurrency(processo.valorCausa) : "—"}
                </TableCell>
                <TableCell>
                  <Badge variant={statusVariant[processo.status]}>{processo.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
