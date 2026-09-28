import { ProcessosTable } from "@/components/dashboard/processos-table";
import { getProcessos } from "@/lib/data";

export default async function ProcessosPage() {
  const processos = await getProcessos();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Processos</h1>
        <p className="text-sm text-muted-foreground">
          {processos.length} processos cadastrados no escritório.
        </p>
      </div>

      <ProcessosTable processos={processos} />
    </div>
  );
}
