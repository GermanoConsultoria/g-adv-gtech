"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => router.push("/dashboard"), 400);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-muted/30 px-4 py-12">
      <Link href="/">
        <Logo />
      </Link>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Acessar o G-ADV</CardTitle>
          <CardDescription>
            Ambiente de demonstração — use qualquer e-mail e senha para entrar.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="voce@escritorio.com.br" defaultValue="demo@gadv.com.br" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" placeholder="••••••••" defaultValue="demonstracao" required />
            </div>
            <Button type="submit" className="mt-2 w-full" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </form>
        </CardContent>
      </Card>
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
        ← Voltar para o site
      </Link>
    </div>
  );
}
