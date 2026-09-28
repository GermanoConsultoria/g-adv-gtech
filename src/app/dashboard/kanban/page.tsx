import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { tarefas, formatDate, type ColunaTarefa, type PrioridadeTarefa } from "@/lib/mock-data";

const colunas: ColunaTarefa[] = ["A fazer", "Em andamento", "Em revisão", "Concluído"];

const prioridadeVariant: Record<PrioridadeTarefa, "destructive" | "default" | "secondary"> = {
  Alta: "destructive",
  Normal: "default",
  Baixa: "secondary",
};

export default function KanbanPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Kanban de projetos</h1>
        <p className="text-sm text-muted-foreground">
          Acompanhamento das tarefas internas da equipe por projeto.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {colunas.map((coluna) => {
          const itens = tarefas.filter((t) => t.coluna === coluna);
          return (
            <Card key={coluna} className="bg-muted/30">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{coluna}</CardTitle>
                <Badge variant="outline">{itens.length}</Badge>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                {itens.map((tarefa) => (
                  <div
                    key={tarefa.id}
                    className="rounded-md border border-border bg-background p-3 shadow-sm"
                  >
                    <p className="text-sm font-medium leading-snug">{tarefa.titulo}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{tarefa.projeto}</p>
                    <div className="mt-3 flex items-center justify-between gap-2">
                      <span className="truncate text-xs text-muted-foreground">{tarefa.responsavel}</span>
                      <Badge variant={prioridadeVariant[tarefa.prioridade]} className="shrink-0">
                        {tarefa.prioridade}
                      </Badge>
                    </div>
                    <p className="mt-2 text-[11px] text-muted-foreground">Prazo: {formatDate(tarefa.prazo)}</p>
                  </div>
                ))}
                {itens.length === 0 && (
                  <p className="py-6 text-center text-xs text-muted-foreground">Sem tarefas</p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
