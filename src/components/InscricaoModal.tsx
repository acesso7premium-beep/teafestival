import { useState } from "react";
import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Evento {
  id: string;
  hora: string;
  titulo: string;
  vagas: number;
}

const EVENTOS: Evento[] = [
  { id: "1", hora: "14:50", titulo: "Abertura do Evento", vagas: 400 },
  { id: "2", hora: "15:05", titulo: "Apresentação Comunidade Autista", vagas: 400 },
  { id: "3", hora: "15:25", titulo: "Palestra Inclusão & Autismo", vagas: 400 },
  { id: "4", hora: "15:45", titulo: "Desfile TEA Festival Luz & Voz", vagas: 400 },
  { id: "5", hora: "16:05", titulo: "Música Ao Vivo", vagas: 400 },
  { id: "6", hora: "16:45", titulo: "Encerramento", vagas: 400 },
];

const InscricaoModal = () => {
  const [step, setStep] = useState<"form" | "confirmacao">("form");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
  });
  const [eventosSelect, setEventosSelect] = useState<string[]>([]);
  const [codigoInscrição, setCodigoInscrição] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEventoChange = (eventoId: string) => {
    setEventosSelect(prev =>
      prev.includes(eventoId)
        ? prev.filter(id => id !== eventoId)
        : prev.length < 6 ? [...prev, eventoId] : prev
    );
  };

  const handleConfirmar = async () => {
    if (!formData.nome || !formData.email || !formData.whatsapp || eventosSelect.length === 0) {
      alert("Por favor, preencha todos os campos e selecione pelo menos um evento");
      return;
    }

    try {
      // Chamar API para criar inscrição
      const response = await fetch("/api/inscricoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          whatsapp: formData.whatsapp,
          eventos: eventosSelect
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || "Erro na inscrição");
      }

      const data = await response.json();
      setCodigoInscrição(data.codigo_referral);
      setStep("confirmacao");
    } catch (error) {
      alert(`Erro: ${error instanceof Error ? error.message : "Falha na inscrição"}`);
    }
  };

  const handleCompartilhar = async () => {
    const eventosSelecionados = EVENTOS
      .filter(e => eventosSelect.includes(e.id))
      .map(e => `${e.hora} - ${e.titulo}`)
      .join("\n");

    const texto = `🧩 TEA Festival Luz & Voz 🧩\n\nMe inscrevi nos eventos:\n${eventosSelecionados}\n\nVem com a gente! 🎭✨\n\nSeu código: ${codigoInscrição}\n\n${window.location.href}`;

    // Registrar compartilhamento no backend
    try {
      await fetch(`/api/compartilhamentos/${codigoInscrição}?origem=whatsapp`, {
        method: "POST"
      });
    } catch (error) {
      console.error("Erro ao registrar compartilhamento:", error);
    }

    window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`, '_blank');
  };

  const handleFechar = () => {
    const modal = document.getElementById('inscricao-modal');
    if (modal) modal.classList.add('hidden');
    setStep("form");
    setFormData({ nome: "", email: "", whatsapp: "" });
    setEventosSelect([]);
  };

  return (
    <div id="inscricao-modal" className="hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-400 text-white p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🧩</span>
            <h2 className="text-2xl font-bold">Participar dos Eventos</h2>
          </div>
          <button onClick={handleFechar} className="text-white hover:bg-white/20 p-2 rounded">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {step === "form" ? (
            <>
              {/* Formulário */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Seus Dados</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo *</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="João Silva"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="joao@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp (com DDD) *</label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="11987654321"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Eventos */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Escolha seus Eventos (máx 6)</h3>
                <div className="grid gap-3 max-h-64 overflow-y-auto">
                  {EVENTOS.map(evento => (
                    <label key={evento.id} className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={eventosSelect.includes(evento.id)}
                        onChange={() => handleEventoChange(evento.id)}
                        disabled={!eventosSelect.includes(evento.id) && eventosSelect.length >= 6}
                        className="mt-1 w-5 h-5 text-blue-600 rounded"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800">{evento.hora} - {evento.titulo}</div>
                        <div className="text-sm text-gray-500">{evento.vagas} vagas disponíveis</div>
                      </div>
                    </label>
                  ))}
                </div>
                <div className="mt-3 text-sm text-gray-600">
                  Selecionados: {eventosSelect.length} / 6
                </div>
              </div>

              {/* Botão Confirmar */}
              <Button
                onClick={handleConfirmar}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg text-lg"
              >
                ✓ Confirmar Inscrição
              </Button>

              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-gray-700">
                <strong>ℹ️ Você receberá um código de inscrição único.</strong> Use-o para compartilhar e ganhar pontos extras!
              </div>
            </>
          ) : (
            <>
              {/* Confirmação */}
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Inscrição Confirmada!</h3>
                <p className="text-gray-600">Seus eventos foram reservados com sucesso.</p>
              </div>

              {/* Dados de Confirmação */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6 space-y-3">
                <div>
                  <div className="text-sm text-gray-600">Nome</div>
                  <div className="font-semibold text-gray-800">{formData.nome}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Email</div>
                  <div className="font-semibold text-gray-800">{formData.email}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Código de Inscrição</div>
                  <div className="font-mono font-bold text-blue-600 text-lg">{codigoInscrição}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Eventos Inscritos</div>
                  <div className="space-y-1">
                    {EVENTOS
                      .filter(e => eventosSelect.includes(e.id))
                      .map(e => (
                        <div key={e.id} className="text-gray-800">
                          • {e.hora} - {e.titulo}
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              {/* Botões */}
              <div className="space-y-3">
                <Button
                  onClick={handleCompartilhar}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg"
                >
                  💚 Compartilhar no WhatsApp
                </Button>
                <Button
                  onClick={handleFechar}
                  className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 rounded-lg"
                >
                  Fechar
                </Button>
              </div>

              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-gray-700">
                <strong>🎁 Compartilhe seu código</strong> com amigos e ganhe recompensas!
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InscricaoModal;
