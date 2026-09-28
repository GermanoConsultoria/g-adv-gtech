import Link from "next/link";
import {
  Briefcase,
  CalendarClock,
  Users,
  Wallet,
  FileText,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Briefcase,
    title: "Processos",
    description: "Acompanhe todos os processos do escritório com status, fase e responsável em um só lugar.",
  },
  {
    icon: CalendarClock,
    title: "Prazos",
    description: "Nunca perca um prazo processual com alertas de prioridade e visão consolidada da agenda.",
  },
  {
    icon: Users,
    title: "Clientes",
    description: "Cadastro completo de clientes pessoa física e jurídica, com histórico de relacionamento.",
  },
  {
    icon: Wallet,
    title: "Financeiro",
    description: "Controle de honorários, receitas e despesas com visão clara do fluxo de caixa do escritório.",
  },
  {
    icon: FileText,
    title: "Documentos",
    description: "Centralize petições, contratos e laudos organizados por processo.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    description: "Acesso controlado por perfil, pensado para escritórios que lidam com dados sensíveis.",
  },
];

const highlights = [
  "Painel único com a visão do dia a dia do escritório",
  "Feito para pequenos e médios escritórios de advocacia",
  "Implantação rápida, sem complicação técnica",
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-6">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground sm:flex">
            <a href="#recursos" className="hover:text-foreground">Recursos</a>
            <a href="#sobre" className="hover:text-foreground">Sobre</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Entrar</Link>
            </Button>
            <Button asChild>
              <Link href="/login">Ver demonstração</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center lg:px-6 lg:py-28">
          <Badge variant="secondary" className="px-3 py-1">
            Desenvolvido pela G-TECH
          </Badge>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            A gestão do seu escritório de advocacia, simples e em um só lugar
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground text-balance">
            O G-ADV reúne processos, prazos, clientes e financeiro em um sistema único,
            para que sua equipe foque no que realmente importa: os seus clientes.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/login" className="flex items-center gap-2">
                Ver demonstração <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#recursos">Conhecer recursos</a>
            </Button>
          </div>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:gap-6">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="recursos" className="border-t border-border bg-muted/30 py-20">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <div className="mb-12 flex flex-col items-center text-center">
              <h2 className="text-3xl font-semibold tracking-tight">Tudo o que o seu escritório precisa</h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Um sistema pensado para o dia a dia da advocacia, do cadastro do cliente ao recebimento dos honorários.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.title}>
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="py-20">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center lg:px-6">
            <h2 className="text-3xl font-semibold tracking-tight">Quer ver o sistema funcionando?</h2>
            <p className="max-w-xl text-muted-foreground">
              Acesse a demonstração com dados de exemplo e explore o painel de processos, prazos, clientes e financeiro.
            </p>
            <Button size="lg" asChild>
              <Link href="/login" className="flex items-center gap-2">
                Ver demonstração <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground sm:flex-row lg:px-6">
          <Logo showWordmark={false} imgClassName="h-6 w-6" />
          <p>© {new Date().getFullYear()} G-TECH. G-ADV é um produto de demonstração.</p>
        </div>
      </footer>
    </div>
  );
}
