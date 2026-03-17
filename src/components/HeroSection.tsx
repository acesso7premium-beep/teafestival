import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";

const targetDate = new Date("2026-04-25T14:00:00-03:00").getTime();

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, targetDate - now);
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const countdownItems = [
    { value: timeLeft.days, label: "Dias" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Seg" },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 puzzle-pattern"
      aria-label="Seção principal do festival"
    >
      {/* Decorative puzzle-colored orbs */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] rounded-full bg-accent/20 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute top-10 right-1/4 w-[200px] h-[200px] rounded-full bg-festival-red/10 blur-[80px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/3 left-10 w-[250px] h-[250px] rounded-full bg-festival-green/10 blur-[90px] pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Autism awareness badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-5 py-2 text-sm font-semibold mb-6">
            <Puzzle className="w-4 h-4" aria-hidden="true" />
            <span>Abril Azul — Mês da Conscientização do Autismo</span>
          </div>

          <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
            25 de Abril de 2026 · Teatro Municipal de Cotia
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl leading-tight mb-6 text-foreground">
            Festival <span className="text-gradient-autism">Luz & Voz</span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold">Colo de Mãe</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Arte, inclusão e protagonismo no palco. Uma celebração da comunidade autista e suas famílias.
          </p>
        </motion.div>

        {/* Info cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {[
            { icon: CalendarDays, text: "25 de Abril, 2026" },
            { icon: Clock, text: "A partir das 14h" },
            { icon: MapPin, text: "Teatro Municipal de Cotia" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="glass rounded-xl px-5 py-3 flex items-center gap-3 border-l-4 border-l-primary">
              <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium text-foreground">{text}</span>
            </div>
          ))}
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-4 mb-10"
          aria-label="Contagem regressiva para o evento"
        >
          {countdownItems.map((item) => (
            <div key={item.label} className="glass rounded-xl p-4 min-w-[70px] border-t-2 border-t-accent">
              <p className="font-display font-bold text-2xl md:text-3xl text-primary" aria-label={`${item.value} ${item.label}`}>
                {String(item.value).padStart(2, "0")}
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Button
            size="lg"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 shadow-lg"
            onClick={() => document.getElementById("programacao")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ver Programação
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
