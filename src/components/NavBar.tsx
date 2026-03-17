import { useState } from "react";
import { Menu, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Programação", href: "#programacao" },
  { label: "Atrações", href: "#atracoes" },
  { label: "Realização", href: "#realizacao" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Skip to content link */}
      <a href="#sobre" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <header className="fixed top-0 left-0 right-0 z-50 glass" role="banner">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" aria-label="Início - Festival Luz & Voz">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <Puzzle className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
            </div>
            <span className="font-display font-bold text-lg text-foreground">Luz & Voz</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded px-1"
              >
                {l.label}
              </a>
            ))}
            <Button size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              Participar
            </Button>
          </nav>

          {/* Mobile */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Abrir menu de navegação">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-background">
              <nav className="flex flex-col gap-6 mt-8" aria-label="Menu de navegação mobile">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-ring rounded px-2 py-1"
                  >
                    {l.label}
                  </a>
                ))}
                <Button className="rounded-full bg-primary text-primary-foreground">Participar</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
};

export default NavBar;
