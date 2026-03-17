import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const SobreSection = () => (
  <section id="sobre" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
          <Heart className="w-4 h-4" />
          Sobre o Evento
        </div>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
          Um palco para quem sempre foi protagonista
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          O <strong className="text-foreground">Festival Luz & Voz – Colo de Mãe</strong> é uma realização da{" "}
          <strong className="text-foreground">Associação Colo de Mãe</strong>, em parceria com a Secretaria de
          Cultura e Turismo e a Prefeitura de Cotia. O evento celebra a arte, a inclusão e o protagonismo
          atípico, trazendo apresentações artísticas, palestras, experiências sensoriais e muita acolhida.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Mais do que um festival, é um encontro de famílias, profissionais e artistas que acreditam em um
          mundo onde cada voz importa e cada luz brilha.
        </p>
      </motion.div>
    </div>
  </section>
);

export default SobreSection;
