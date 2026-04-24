import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Programação", href: "#programacao" },
  { label: "Notícias", href: "#noticias" },
  { label: "Atrações", href: "#atracoes" },
  { label: "Realização", href: "#realizacao" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a href="#sobre" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <header className="fixed top-0 left-0 right-0 z-50 glass" role="banner">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <a href="#" className="flex items-center gap-3" aria-label="Início - TEA Festival Luz & Voz">
            <img src="/tea-festival-logo.png" alt="TEA Festival Luz & Voz" className="w-10 h-10" />
            <span className="font-display font-bold text-lg text-foreground tracking-tight">TEA Festival Luz & Voz</span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-muted-foreground hover:text-secondary transition-colors rounded px-2 py-1"
              >
                {l.label}
              </a>
            ))}
            <Button size="sm" className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 px-5 font-bold">
              Participar
            </Button>
          </nav>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Abrir menu de navegação" className="text-foreground">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-festival-dark border-border p-6">
              <nav className="flex flex-col gap-6 mt-8" aria-label="Menu de navegação mobile">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-semibold text-foreground hover:text-secondary rounded px-3 py-2 transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
                <Button className="rounded-full bg-secondary text-secondary-foreground mt-4 py-3 font-bold">
                  Participar
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
};

export default NavBar;
