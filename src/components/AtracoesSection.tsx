import { motion } from "framer-motion";
import { Scissors, Heart, Image, Music, Gift, Car } from "lucide-react";

const atracoes = [
  { icon: Scissors, title: "Espaço Beleza", description: "Corte, escova e cuidados de beleza gratuitos para as mães." },
  { icon: Heart, title: "Acolhimento", description: "Escuta ativa e acolhimento psicológico com profissionais voluntárias." },
  { icon: Image, title: "Exposição de Arte", description: "Telas, esculturas e obras criadas por artistas da comunidade." },
  { icon: Music, title: "Intervenções Musicais", description: "Performances sonoras e musicoterapia em espaços acolhedores." },
  { icon: Gift, title: "Sorteios Especiais", description: "Sorteio de armações de óculos e outros brindes exclusivos." },
  { icon: Car, title: "Exposição de Carros", description: "Mostra de veículos com parceiros locais do setor automotivo." },
];

const AtracoesSection = () => (
  <section id="atracoes" className="py-24 md:py-32 bg-background" aria-labelledby="atracoes-title">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 id="atracoes-title" className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
          Atrações & Experiências
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Muito mais do que um festival — uma jornada de cuidado e celebração.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {atracoes.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="bg-card border border-border rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <item.icon className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <h3 className="font-display font-bold text-lg text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AtracoesSection;
