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
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-5 py-2 text-sm font-bold mb-8">
          <span>🧩</span>
          O que é o Festival?
        </div>

        <h2 id="sobre-title" className="font-display font-black text-3xl md:text-4xl text-card-foreground mb-8">
          Um palco para quem sempre foi protagonista
        </h2>

        <p className="text-card-foreground/70 text-lg leading-relaxed mb-6">
          O <strong className="text-card-foreground">Festival Luz & Voz – Colo de Mãe</strong> é uma realização da{" "}
          <strong className="text-card-foreground">Associação Colo de Mãe</strong>, em parceria com a Secretaria de
          Cultura e Turismo e a Prefeitura de Cotia. O evento celebra a arte, a inclusão e o protagonismo
          atípico, trazendo apresentações artísticas, palestras, experiências sensoriais e muita acolhida.
        </p>

        <p className="text-card-foreground/70 text-lg leading-relaxed mb-8">
          Mais do que um festival, é um encontro de famílias, profissionais e artistas que acreditam em um
          mundo onde cada voz importa e cada luz brilha.
        </p>

        {/* Info cards - autism awareness style */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          {[
            { number: "1", title: "Comunicação social", desc: "Apoio à comunicação e expressão para todas as formas de linguagem.", color: "bg-festival-red" },
            { number: "2", title: "Interação social", desc: "Espaços acolhedores para promover conexão e pertencimento.", color: "bg-primary" },
            { number: "3", title: "Protagonismo", desc: "Celebração das capacidades e talentos únicos de cada pessoa.", color: "bg-festival-green" },
          ].map((item) => (
            <div key={item.number} className="bg-card-foreground/5 rounded-2xl p-6 text-center">
              <div className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <span className="text-white font-bold text-sm">{item.number}</span>
              </div>
              <h3 className="font-bold text-card-foreground text-sm mb-2">{item.title}</h3>
              <p className="text-card-foreground/60 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Puzzle color bar */}
        <div className="h-1.5 puzzle-bar rounded-full mt-10" aria-hidden="true" />
      </motion.div>
    </div>
  </section>
);

export default SobreSection;
