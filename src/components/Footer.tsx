const Footer = () => (
  <footer id="realizacao" className="bg-festival-dark text-foreground py-16" role="contentinfo">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center" aria-hidden="true">
              <span className="text-secondary-foreground font-black text-lg">🧩</span>
            </div>
            <span className="font-display font-bold text-lg text-foreground">TEA Festival Luz & Voz</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Festival Luz & Voz – Associação Colo de Mãe. Arte, inclusão e protagonismo atípico.
          </p>
          <p className="text-xs text-muted-foreground/60 leading-relaxed">
            Associação Colo de Mãe<br />
            CNPJ: 00.000.000/0001-00
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground/60 mb-5">
            Realização
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>Associação Colo de Mãe</li>
            <li>Secretaria de Cultura e Turismo de Cotia</li>
            <li>Prefeitura de Cotia</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground/60 mb-5">
            Navegação
          </h4>
          <nav aria-label="Links do rodapé">
            <ul className="space-y-3 text-sm">
              {[
                { label: "Sobre", href: "#sobre" },
                { label: "Programação", href: "#programacao" },
                { label: "Atrações", href: "#atracoes" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-muted-foreground hover:text-secondary transition-colors rounded px-1"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Puzzle bar */}
      <div className="h-1.5 puzzle-bar rounded-full mt-12 mb-6" aria-hidden="true" />

      <div className="text-center text-xs text-muted-foreground/50">
        © 2026 Associação Colo de Mãe. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
