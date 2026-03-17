import { Sun } from "lucide-react";

const Footer = () => (
  <footer id="realizacao" className="bg-festival-dark text-white/80 py-16">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Logo & info */}
        <div className="max-w-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <Sun className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg text-white">Luz & Voz</span>
          </div>
          <p className="text-sm text-white/60 leading-relaxed mb-3">
            Festival Luz & Voz – Colo de Mãe. Arte, inclusão e protagonismo atípico.
          </p>
          <p className="text-xs text-white/40">
            Associação Colo de Mãe<br />
            CNPJ: 00.000.000/0001-00
          </p>
        </div>

        {/* Realização */}
        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
            Realização
          </h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>Associação Colo de Mãe</li>
            <li>Secretaria de Cultura e Turismo de Cotia</li>
            <li>Prefeitura de Cotia</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
            Navegação
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Sobre", href: "#sobre" },
              { label: "Programação", href: "#programacao" },
              { label: "Atrações", href: "#atracoes" },
            ].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-white/60 hover:text-white transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-white/40">
        © 2026 Associação Colo de Mãe. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
