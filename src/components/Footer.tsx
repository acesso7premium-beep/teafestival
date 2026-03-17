const Footer = () => (
  <footer id="realizacao" className="bg-festival-dark text-white/80 py-16" role="contentinfo">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center" aria-hidden="true">
              <span className="text-primary-foreground font-bold text-lg">L</span>
            </div>
            <span className="font-display font-bold text-lg text-white">Luz & Voz</span>
          </div>
          <p className="text-sm text-white/60 leading-relaxed mb-4">
            Festival Luz & Voz – Colo de Mãe. Arte, inclusão e protagonismo atípico.
          </p>
          <p className="text-xs text-white/40 leading-relaxed">
            Associação Colo de Mãe<br />
            CNPJ: 00.000.000/0001-00
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/50 mb-5">
            Realização
          </h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li>Associação Colo de Mãe</li>
            <li>Secretaria de Cultura e Turismo de Cotia</li>
            <li>Prefeitura de Cotia</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/50 mb-5">
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
                    className="text-white/60 hover:text-white transition-colors rounded px-1"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Simple divider */}
      <div className="flex gap-2 mt-12 mb-6" aria-hidden="true">
        <div className="h-1 w-8 rounded-full bg-primary/40" />
        <div className="h-1 w-8 rounded-full bg-accent/40" />
        <div className="h-1 w-6 rounded-full bg-festival-red/40" />
        <div className="h-1 w-6 rounded-full bg-festival-green/40" />
      </div>

      <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40">
        © 2026 Associação Colo de Mãe. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
