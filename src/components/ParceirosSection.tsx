import { motion } from "framer-motion";
import { Building2, Heart, Palette, GraduationCap, Landmark, HandHeart } from "lucide-react";

const parceiros = [
  { nome: "Prefeitura de Cotia", icon: Landmark },
  { nome: "Secretaria de Cultura e Turismo", icon: Palette },
  { nome: "Secretaria de Educação", icon: GraduationCap },
  { nome: "Secretaria de Saúde", icon: Heart },
  { nome: "Associação Colo de Mãe", icon: HandHeart },
  { nome: "Apoiadores do Evento", icon: Building2 },
];

const ParceirosSection = () => (
  <section className="py-20 bg-festival-dark" aria-labelledby="parceiros-title">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2
          id="parceiros-title"
          className="font-display font-black text-3xl md:text-4xl text-foreground mb-3"
        >
          Parceiros & Apoiadores
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto text-center">
          Instituições que tornam o TEA Festival Luz & Voz possível.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
        {parceiros.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.nome}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center gap-3 bg-card/40 backdrop-blur-sm rounded-2xl p-5 border border-border/30 hover:border-secondary/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/15 flex items-center justify-center">
                <Icon className="w-7 h-7 text-secondary" aria-hidden="true" />
              </div>
              <span className="text-xs text-muted-foreground text-center font-medium leading-tight">
                {p.nome}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ParceirosSection;
