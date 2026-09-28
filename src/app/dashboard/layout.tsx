"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { DashboardNav } from "@/components/dashboard/nav";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <aside className="hidden w-64 shrink-0 border-r border-sidebar-border bg-sidebar text-sidebar-foreground lg:flex lg:flex-col">
        <div className="flex h-16 items-center border-b border-sidebar-border px-5">
          <Logo />
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-4">
          <DashboardNav />
        </div>
        <div className="border-t border-sidebar-border p-4">
          <Badge variant="secondary" className="w-full justify-center py-1.5">
            Ambiente de demonstração
          </Badge>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center justify-between gap-4 border-b border-border bg-background px-4 lg:px-6">
          <div className="flex items-center gap-3">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 bg-sidebar p-0 text-sidebar-foreground">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <div className="flex h-16 items-center border-b border-sidebar-border px-5">
                  <Logo />
                </div>
                <div className="px-3 py-4">
                  <DashboardNav onNavigate={() => setOpen(false)} />
                </div>
              </SheetContent>
            </Sheet>
            <span className="text-sm font-medium text-muted-foreground hidden sm:inline">
              Escritório Reis &amp; Nogueira Advocacia
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">Sair da demonstração</Link>
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                CR
              </AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex-1 bg-muted/30 p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
