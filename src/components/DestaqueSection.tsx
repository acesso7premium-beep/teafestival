import { motion } from "framer-motion";
import { Instagram, Zap } from "lucide-react";
import kartBanner from "@/assets/kart-banner.png";

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
          {/* Kart banner image */}
          <div className="w-full md:w-72 shrink-0">
            <img
              src={kartBanner}
              alt="Piloto João Pedro Simões no kart número 44"
              className="w-full rounded-2xl object-cover border border-secondary/30"
            />
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
              que limites existem apenas para serem ultrapassados. Sua presença no TEA Festival Luz & Voz
              é um testemunho de velocidade, determinação e protagonismo.
            </p>

            <p className="text-muted-foreground/70 text-base leading-relaxed mb-5">
              Venha conhecer sua história e torcer por quem transforma desafios em vitórias.
            </p>

            <a
              href="https://www.instagram.com/jpsimoespiloto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-bold transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @jpsimoespiloto
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 puzzle-bar" aria-hidden="true" />
      </motion.div>
    </div>
  </section>
);

export default DestaqueSection;
