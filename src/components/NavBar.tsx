import { useState } from "react";
import { Menu, X, Sun } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <Sun className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg text-foreground">Luz & Voz</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
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
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-background">
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-foreground"
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
  );
};

export default NavBar;
