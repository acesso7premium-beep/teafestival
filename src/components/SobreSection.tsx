import { motion } from "framer-motion";

const SobreSection = () => (
  <section id="sobre" className="py-24 md:py-32 bg-card" aria-labelledby="sobre-title">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-lg px-4 py-2 text-sm font-semibold mb-8">
          <span>ℹ️</span>
          Sobre o Evento
        </div>

        <h2 id="sobre-title" className="font-display font-bold text-3xl md:text-4xl text-foreground mb-8">
          Um palco para quem sempre foi protagonista
        </h2>

        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          O <strong className="text-foreground">Festival Luz & Voz – Colo de Mãe</strong> é uma realização da{" "}
          <strong className="text-foreground">Associação Colo de Mãe</strong>, em parceria com a Secretaria de
          Cultura e Turismo e a Prefeitura de Cotia. O evento celebra a arte, a inclusão e o protagonismo
          atípico, trazendo apresentações artísticas, palestras, experiências sensoriais e muita acolhida.
        </p>

        <p className="text-muted-foreground text-lg leading-relaxed">
          Mais do que um festival, é um encontro de famílias, profissionais e artistas que acreditam em um
          mundo onde cada voz importa e cada luz brilha.
        </p>

        {/* Simple color-bar divider */}
        <div className="flex gap-2 mt-10" aria-hidden="true">
          <div className="h-1 w-12 rounded-full bg-primary" />
          <div className="h-1 w-12 rounded-full bg-accent" />
          <div className="h-1 w-8 rounded-full bg-festival-red" />
          <div className="h-1 w-8 rounded-full bg-festival-green" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default SobreSection;
