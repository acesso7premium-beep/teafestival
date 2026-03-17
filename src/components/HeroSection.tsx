import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const targetDate = new Date("2026-04-25T14:00:00-03:00").getTime();

const PuzzlePiece = ({ color, className }: { color: string; className: string }) => (
  <svg viewBox="0 0 60 60" className={className} fill={color} aria-hidden="true">
    <path d="M15 0h30c0 0 0 5-5 8s-5 12 0 15 5 8 5 8v29H15V31s0-3-5-6-5-11 0-14 5-6 5-6V0z" opacity="0.15" />
  </svg>
);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-background puzzle-pattern"
      aria-label="Seção principal do festival"
    >
      {/* Decorative puzzle pieces */}
      <PuzzlePiece color="hsl(48 100% 55%)" className="absolute top-20 left-10 w-24 h-24 rotate-12" />
      <PuzzlePiece color="hsl(0 80% 50%)" className="absolute top-40 right-16 w-20 h-20 -rotate-45" />
      <PuzzlePiece color="hsl(145 70% 40%)" className="absolute bottom-32 left-20 w-16 h-16 rotate-90" />
      <PuzzlePiece color="hsl(210 100% 50%)" className="absolute bottom-20 right-10 w-28 h-28 rotate-180" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(210_100%_15%/0.5)] via-transparent to-[hsl(210_100%_10%/0.6)] pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Awareness badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary rounded-full px-5 py-2 text-sm font-bold mb-8 border border-secondary/30">
            <span>🧩</span>
            <span>Abril Azul — Conscientização do Autismo</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-7xl leading-tight mb-4 text-foreground">
            <span className="text-foreground">TEA Festival</span>{" "}
            <span className="text-gradient-autism">Luz & Voz</span>
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">
            Associação Colo de Mãe
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Arte, inclusão e protagonismo no palco. Uma celebração da comunidade autista e suas famílias.
          </p>
        </motion.div>

        {/* Info cards */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {[
            { icon: CalendarDays, text: "25 de Abril, 2026" },
            { icon: Clock, text: "A partir das 14h" },
            { icon: MapPin, text: "Teatro Municipal de Cotia" },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="bg-[hsl(210_100%_30%/0.6)] backdrop-blur-sm rounded-xl px-5 py-3 flex items-center gap-3 border border-[hsl(210_60%_50%/0.3)]"
            >
              <Icon className="w-5 h-5 text-secondary shrink-0" aria-hidden="true" />
              <span className="text-sm font-medium text-foreground">{text}</span>
            </div>
          ))}
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex justify-center gap-4 mb-10"
          role="timer"
          aria-label="Contagem regressiva para o evento"
        >
          {countdownItems.map((item) => (
            <div
              key={item.label}
              className="bg-[hsl(210_100%_30%/0.5)] backdrop-blur-sm rounded-xl p-4 min-w-[72px] border border-[hsl(210_60%_50%/0.2)] text-center"
            >
              <p className="font-display font-black text-2xl md:text-3xl text-secondary" aria-label={`${item.value} ${item.label}`}>
                {String(item.value).padStart(2, "0")}
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{item.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base font-bold px-10 py-4 shadow-lg shadow-secondary/20"
            onClick={() => document.getElementById("programacao")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ver Programação
          </Button>
        </motion.div>
      </div>

      {/* Bottom puzzle bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 puzzle-bar" aria-hidden="true" />
    </section>
  );
};

export default HeroSection;
