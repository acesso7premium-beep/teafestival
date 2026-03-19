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
            TEA Festival Luz & Voz – Associação Colo de Mãe. Arte, inclusão e protagonismo atípico.
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

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground/60 mb-5">
            Redes Sociais
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://www.facebook.com/p/Associa%C3%A7%C3%A3o-Colo-de-M%C3%A3e-TEA-61582749415573/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors rounded px-1 inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
            </li>
          </ul>
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
