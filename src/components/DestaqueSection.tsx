import { motion } from "framer-motion";
import { Trophy, Zap } from "lucide-react";

const DestaqueSection = () => (
  <section className="py-24 md:py-32 bg-background puzzle-pattern" aria-labelledby="destaque-title">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="relative bg-[hsl(210_100%_15%/0.8)] backdrop-blur-sm rounded-3xl overflow-hidden p-8 md:p-14 max-w-4xl mx-auto border border-[hsl(210_60%_50%/0.2)]"
      >
        <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
          {/* Placeholder card */}
          <div className="w-full md:w-72 h-56 rounded-2xl bg-secondary/15 border border-secondary/30 flex flex-col items-center justify-center shrink-0">
            <Trophy className="w-14 h-14 text-secondary mb-3" aria-hidden="true" />
            <span className="font-display font-black text-5xl text-foreground">#44</span>
            <span className="text-sm text-muted-foreground mt-1">Kart</span>
          </div>

          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary rounded-full px-4 py-2 text-sm font-bold mb-5">
              <Zap className="w-4 h-4" aria-hidden="true" />
              Destaque Especial
            </div>

            <h2 id="destaque-title" className="font-display font-black text-3xl md:text-4xl text-foreground mb-5">
              Piloto João Pedro Simões
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Aos 14 anos, João Pedro é piloto de kart e autista. Número 44, ele acelera nas pistas provando
              que limites existem apenas para serem ultrapassados. Sua presença no Festival Luz & Voz
              é um testemunho de velocidade, determinação e protagonismo.
            </p>

            <p className="text-muted-foreground/70 text-base leading-relaxed">
              Venha conhecer sua história e torcer por quem transforma desafios em vitórias.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 puzzle-bar" aria-hidden="true" />
      </motion.div>
    </div>
  </section>
);

export default DestaqueSection;
