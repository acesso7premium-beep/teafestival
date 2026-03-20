import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const targetDate = new Date("2026-04-25T14:00:00-03:00").getTime();

const SplashScreen = ({ onFinish }: {onFinish: () => void;}) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [show, setShow] = useState(true);

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, targetDate - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor(diff % 86400000 / 3600000),
        minutes: Math.floor(diff % 3600000 / 60000),
        seconds: Math.floor(diff % 60000 / 1000)
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const handleEnter = () => {
    setShow(false);
    setTimeout(onFinish, 700);
  };

  const items = [
  { value: timeLeft.days, label: "Dias" },
  { value: timeLeft.hours, label: "Horas" },
  { value: timeLeft.minutes, label: "Min" },
  { value: timeLeft.seconds, label: "Seg" }];


  return (
    <AnimatePresence>
      {show &&
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden">
        
          {/* Animated puzzle pieces background */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {[...Array(6)].map((_, i) =>
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: 80 + i * 40,
              height: 80 + i * 40,
              left: `${10 + i * 15}%`,
              top: `${15 + i % 3 * 25}%`,
              background: `hsl(${[48, 210, 0, 145, 48, 210][i]} ${[100, 100, 80, 70, 100, 100][i]}% ${[55, 50, 50, 40, 55, 36][i]}%)`
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }} />

          )}
          </div>

          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center px-4">
          
            {/* Badge */}
            <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 bg-secondary/20 text-secondary rounded-full px-5 py-2 text-sm font-bold mb-8 border border-secondary/30">
            
              <span>🧩</span>
              <span>Abril Azul — Conscientização do Autismo</span>
            </motion.div>

            {/* Title */}
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-7xl leading-tight mb-3 text-foreground">
            
              <span className="text-foreground">TEA Festival</span>{" "}
              <span className="text-gradient-autism">Luz & Voz</span>
            </motion.h1>

            






          

            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="text-muted-foreground text-base md:text-lg mb-10 max-w-md mx-auto text-center">
            
              25 de Abril, 2026 • Teatro Municipal de Cotia
            </motion.p>

            {/* Countdown */}
            <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center gap-3 sm:gap-5 mb-10"
            role="timer"
            aria-label="Contagem regressiva para o evento">
            
              {items.map((item, i) =>
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 + i * 0.1, type: "spring", stiffness: 200 }}
              className="bg-primary/30 backdrop-blur-sm rounded-2xl p-4 sm:p-5 min-w-[70px] sm:min-w-[90px] border border-primary/20">
              
                  <p className="font-display font-black text-3xl sm:text-4xl text-secondary">
                    {String(item.value).padStart(2, "0")}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{item.label}</p>
                </motion.div>
            )}
            </motion.div>

            {/* Buttons */}
            <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="flex flex-wrap justify-center items-center gap-4">
              <motion.a
              href="https://acolodemae.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-accent text-accent-foreground text-base font-bold px-8 py-4 shadow-lg shadow-accent/20 transition-colors hover:bg-accent/90">
                Associação Colo de Mãe
              </motion.a>
              <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnter}
              className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base font-bold px-10 py-4 shadow-lg shadow-secondary/20 transition-colors">
                Entrar no Site
              </motion.button>
              <motion.a
              href="https://movimentopcd.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-primary text-primary-foreground text-base font-bold px-8 py-4 shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90">
                Movimento PcD
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

};

export default SplashScreen;