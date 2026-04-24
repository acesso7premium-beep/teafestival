import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const noticias = [
  {
    id: 1,
    titulo: "TEA Festival Luz & Voz confirma programação completa",
    resumo: "Com 15 atrações artísticas, o festival promete uma celebração inédita da comunidade autista.",
    data: "20 de Abril, 2026",
    autor: "Associação Colo de Mãe",
    imagem: "https://via.placeholder.com/400x250?text=Noticia+1"
  },
  {
    id: 2,
    titulo: "Inscrições abertas para participantes e voluntários",
    resumo: "Comunidade autista pode se inscrever para apresentações no festival. Vagas limitadas para voluntários.",
    data: "18 de Abril, 2026",
    autor: "Equipe de Produção",
    imagem: "https://via.placeholder.com/400x250?text=Noticia+2"
  },
  {
    id: 3,
    titulo: "Teatro Municipal de Cotia será palco do maior festival autista do Brasil",
    resumo: "Conheça o espaço que receberá o TEA Festival Luz & Voz no dia 25 de Abril.",
    data: "15 de Abril, 2026",
    autor: "Secretaria de Cultura",
    imagem: "https://via.placeholder.com/400x250?text=Noticia+3"
  }
];

const NoticiasSection = () => {
  return (
    <section
      id="noticias"
      className="py-16 md:py-24 bg-background"
      aria-label="Seção de notícias do festival">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16">
          <h2 className="font-display font-black text-3xl md:text-5xl mb-4 text-foreground">
            Notícias
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fique atualizado com as últimas novidades sobre o TEA Festival Luz & Voz
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {noticias.map((noticia, i) => (
            <motion.article
              key={noticia.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl overflow-hidden border border-border hover:border-secondary/50 transition-all hover:shadow-lg">

              <div className="h-48 bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center overflow-hidden">
                <img
                  src={noticia.imagem}
                  alt={noticia.titulo}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{noticia.data}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{noticia.autor}</span>
                  </div>
                </div>

                <h3 className="font-bold text-lg text-foreground mb-3 line-clamp-2 hover:text-secondary transition-colors">
                  {noticia.titulo}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {noticia.resumo}
                </p>

                <Button
                  variant="ghost"
                  className="group text-secondary hover:text-secondary p-0 h-auto">
                  Ler mais
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center">
          <Button
            size="lg"
            className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
            Ver todas as notícias
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default NoticiasSection;
