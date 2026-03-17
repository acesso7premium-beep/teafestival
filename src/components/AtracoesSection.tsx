import { motion } from "framer-motion";
import { Scissors, Heart, Image, Music, Gift, Car } from "lucide-react";

const atracoes = [
  { icon: Scissors, title: "Espaço Beleza", description: "Corte, escova e cuidados de beleza gratuitos para as mães.", color: "bg-primary/10 text-primary" },
  { icon: Heart, title: "Acolhimento", description: "Escuta ativa e acolhimento psicológico com profissionais voluntárias.", color: "bg-festival-red/10 text-festival-red" },
  { icon: Image, title: "Exposição de Arte", description: "Telas, esculturas e obras criadas por artistas da comunidade.", color: "bg-accent/10 text-accent-foreground" },
  { icon: Music, title: "Intervenções Musicais", description: "Performances sonoras e musicoterapia em espaços acolhedores.", color: "bg-festival-green/10 text-festival-green" },
  { icon: Gift, title: "Sorteios Especiais", description: "Sorteio de armações de óculos e outros brindes exclusivos.", color: "bg-primary/10 text-primary" },
  { icon: Car, title: "Exposição de Carros", description: "Mostra de veículos com parceiros locais do setor automotivo.", color: "bg-accent/10 text-accent-foreground" },
];

const AtracoesSection = () => (
  <section id="atracoes" className="py-20 md:py-28" aria-labelledby="atracoes-title">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 id="atracoes-title" className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-ring"
          >
            <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
              <item.icon className="w-6 h-6" aria-hidden="true" />
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
