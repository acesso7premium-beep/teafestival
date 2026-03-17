import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mic, TreePine, Palette, Heart } from "lucide-react";

interface EventItem {
  time: string;
  title: string;
  description?: string;
}

const palcoPrincipal: EventItem[] = [
  { time: "14:00", title: "Abertura dos Portões" },
  { time: "14:20", title: "Abertura Oficial", description: "Fala da Presidência da { time: "14:20", title: "Abertura Oficial", description: "Fala da Presidência da Associação Colo de Mãe e autoridades convidadas." }, convidadas." },
  { time: "15:00", title: "Ballet Inclusivo", description: "Apresentação do grupo de ballet que une crianças neurodivergentes e neurotípicas em coreografias emocionantes." },
  { time: "15:30", title: "Teatro Sensorial", description: "Peça adaptada com estímulos visuais e sonoros cuidadosamente planejados para o público autista." },
  { time: "16:00", title: "Musicoterapia ao Vivo", description: "Sessão interativa de musicoterapia com instrumentos acessíveis." },
  { time: "16:20", title: "Intervalo Musical" },
  { time: "17:00", title: "Ciclo de Palestras", description: "Inclusão e Autismo na Vida Adulta — com especialistas e ativistas da causa." },
  { time: "17:45", title: "Palestra: Direitos e Acessibilidade", description: "Debate sobre políticas públicas e direitos da pessoa autista." },
  { time: "18:00", title: "Desfile Luz & Voz", description: "O grande momento de protagonismo: mães e filhos desfilam celebrando a vida, a luta e o amor." },
  { time: "18:45", title: "Show de Encerramento" },
  { time: "19:00", title: "Encerramento Oficial" },
];

const areaExterna: EventItem[] = [
  { time: "14:00–19:00", title: "Brinquedos Infláveis", description: "Área com brinquedos seguros e monitorados para crianças de todas as idades." },
  { time: "14:00–19:00", title: "Pipoca & Algodão Doce", description: "Distribuição gratuita de pipoca e algodão doce." },
  { time: "14:00–19:00", title: "Exposição de Carros", description: "Exposição de carros usados com parceiros locais." },
];

const foyer: EventItem[] = [
  { time: "14:00–19:00", title: "Exposição de Telas e Esculturas", description: "Obras de artistas da comunidade autista e suas famílias." },
  { time: "14:00–19:00", title: "Espaço Literário", description: "Livros, zines e publicações sobre neurodiversidade e inclusão." },
  { time: "15:00–17:00", title: "Intervenções Artísticas", description: "Performances espontâneas e arte colaborativa." },
];

const cuidado: EventItem[] = [
  { time: "14:00–19:00", title: "Corte de Cabelo & Escova", description: "Serviço gratuito de beleza para as mães, oferecido por profissionais voluntários." },
  { time: "14:00–19:00", title: "Acolhimento Psicológico", description: "Espaço de escuta ativa e acolhimento emocional com psicólogas voluntárias." },
  { time: "14:00–19:00", title: "Massagem Relaxante", description: "Sessões rápidas de relaxamento oferecidas com carinho." },
];

const tabs = [
  { value: "palco", label: "Palco Principal", icon: Mic, events: palcoPrincipal },
  { value: "externa", label: "Área Externa", icon: TreePine, events: areaExterna },
  { value: "foyer", label: "Foyer / Artes", icon: Palette, events: foyer },
  { value: "cuidado", label: "Cuidado", icon: Heart, events: cuidado },
];

const TimelineEvent = ({ item, index }: { item: EventItem; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.04 }}
  >
    {item.description ? (
      <AccordionItem value={`${item.time}-${index}`} className="border-b border-[hsl(210_60%_50%/0.2)]">
        <AccordionTrigger className="hover:no-underline py-5 px-2">
          <div className="flex items-center gap-4 text-left">
            <span className="text-sm font-mono font-bold text-secondary whitespace-nowrap min-w-[80px]">
              {item.time}
            </span>
            <span className="font-semibold text-foreground text-base">{item.title}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-2">
          <p className="text-muted-foreground pl-[96px] text-base leading-relaxed pb-2">{item.description}</p>
        </AccordionContent>
      </AccordionItem>
    ) : (
      <div className="flex items-center gap-4 py-5 px-2 border-b border-[hsl(210_60%_50%/0.2)]">
        <span className="text-sm font-mono font-bold text-secondary whitespace-nowrap min-w-[80px]">
          {item.time}
        </span>
        <span className="font-semibold text-foreground text-base">{item.title}</span>
      </div>
    )}
  </motion.div>
);

const ProgramacaoSection = () => (
  <section id="programacao" className="py-24 md:py-32 bg-background puzzle-pattern" aria-labelledby="programacao-title">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 id="programacao-title" className="font-display font-black text-3xl md:text-4xl text-foreground mb-4">
          Programação
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Explore tudo o que preparamos com carinho para você.
        </p>
      </motion.div>

      <Tabs defaultValue="palco" className="max-w-3xl mx-auto">
        <TabsList className="w-full flex flex-wrap h-auto gap-1 bg-[hsl(210_100%_15%/0.6)] p-2 rounded-xl mb-10 border border-[hsl(210_60%_50%/0.2)]">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="flex-1 min-w-[120px] gap-2 rounded-lg data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-sm py-3 text-sm font-semibold text-muted-foreground"
            >
              <tab.icon className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <div className="bg-[hsl(210_100%_15%/0.5)] backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[hsl(210_60%_50%/0.2)]">
              <Accordion type="multiple">
                {tab.events.map((event, i) => (
                  <TimelineEvent key={`${event.time}-${i}`} item={event} index={i} />
                ))}
              </Accordion>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  </section>
);

export default ProgramacaoSection;
