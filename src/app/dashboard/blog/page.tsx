import { Eye } from "lucide-react";
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
import { formatDate, type StatusPost } from "@/lib/mock-data";
import { getPosts } from "@/lib/data";

const statusVariant: Record<StatusPost, "default" | "secondary"> = {
  Publicado: "default",
  Rascunho: "secondary",
};

export default async function BlogPage() {
  const posts = await getPosts();
  const publicados = posts.filter((p) => p.status === "Publicado").length;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Blog</h1>
        <p className="text-sm text-muted-foreground">
          {publicados} artigos publicados no blog público do escritório.
        </p>
      </div>

      <Card>
        <CardContent className="overflow-x-auto pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Título</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Autor</TableHead>
                <TableHead>Publicado em</TableHead>
                <TableHead className="text-right">Visualizações</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="font-medium">{post.titulo}</TableCell>
                  <TableCell className="text-muted-foreground">{post.categoria}</TableCell>
                  <TableCell className="text-muted-foreground">{post.autor}</TableCell>
                  <TableCell className="text-muted-foreground">{formatDate(post.data)}</TableCell>
                  <TableCell className="text-right">
                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                      <Eye className="h-3.5 w-3.5" />
                      {post.visualizacoes.toLocaleString("pt-BR")}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge variant={statusVariant[post.status]}>{post.status}</Badge>
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
