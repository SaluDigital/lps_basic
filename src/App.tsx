import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Instagram,
  Menu,
  MessageCircle,
  Navigation,
  X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import logoBacic from '../assets/logo-basic.webp';
import draBacic from '../assets/sobre.jpg';

const WHATSAPP_LINK =
  'https://wa.me/5511924558697?text=Ol%C3%A1%2C%20vim%20pelo%20Google%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Bacic%20Odontologia%20Integrada.';
const MAPS_LINK = 'https://share.google/8kPXRKlmD2nJsAAjK';
const INSTAGRAM_LINK = 'https://instagram.com/bacic.odontologia';

const services = [
  {
    title: 'Profilaxia e prevenção',
    desc: 'Cuidados essenciais para manter a saúde bucal em dia e acompanhamento constante.',
  },
  {
    title: 'Dentística restauradora',
    desc: 'Restaurações pensadas para recuperar função, conforto e estética natural.',
  },
  {
    title: 'Clareamento dental',
    desc: 'Procedimento realizado após avaliação criteriosa da saúde de gengivas e dentes.',
  },
  {
    title: 'Odontologia domiciliar',
    desc: 'Atendimento humanizado para quem necessita de cuidados fora do consultório.',
  },
  {
    title: 'Prótese',
    desc: 'Reabilitação total ou parcial para devolver sua segurança ao sorrir e mastigar.',
  },
  {
    title: 'Endodontia',
    desc: 'Tratamento de canal especializado focando no alívio da dor e preservação dental.',
  },
  {
    title: 'Cirurgia',
    desc: 'Procedimentos clínicos executados com máximo planejamento e biossegurança.',
  },
  {
    title: 'Implantodontia',
    desc: 'Reposição dentária moderna com técnicas consolidadas e planejamento individual.',
  },
  {
    title: 'Periodontia',
    desc: 'Prevenção e tratamento das estruturas de suporte e saúde periodontal.',
  },
  {
    title: 'Harmonização orofacial',
    desc: 'Busca pelo equilíbrio facial com indicação técnica, clínica e responsável.',
  },
];

const differentials = [
  {
    title: 'Localização estratégica',
    text: 'A poucos passos da Av. Paulista, em uma região central, segura e de fácil acesso para quem circula pela Consolação e Bela Vista.',
  },
  {
    title: 'Atendimento próximo',
    text: 'Uma abordagem cuidadosa, sem a pressa comum de grandes clínicas, respeitando o tempo de cada paciente.',
  },
  {
    title: 'Visão integrada',
    text: 'Diferentes especialidades reunidas sob uma mesma filosofia de cuidado: olhar para o todo antes da parte.',
  },
  {
    title: 'Foco na saúde',
    text: 'Indicações pautadas em critério clínico, ética odontológica e necessidade real do paciente.',
  },
  {
    title: 'Conveniência aos sábados',
    text: 'Atendimento estendido para conciliar sua saúde com a rotina corrida do dia a dia paulistano.',
  },
  {
    title: 'Biossegurança e conforto',
    text: 'Ambiente preparado com rigor técnico para transmitir tranquilidade em cada consulta.',
  },
];

const faqs = [
  {
    q: 'A Bacic Odontologia Integrada fica perto da Avenida Paulista?',
    a: 'Sim. A clínica está localizada na Rua Luís Coelho, 308, na Consolação, a poucos minutos a pé da Avenida Paulista e do metrô Consolação.',
  },
  {
    q: 'Quais tratamentos a clínica oferece?',
    a: 'Atuamos em odontologia integrada com prevenção, estética, reabilitação, implantes, canal, periodontia, cirurgias, atendimento domiciliar e harmonização orofacial.',
  },
  {
    q: 'A clínica atende aos sábados?',
    a: 'Sim. Os atendimentos aos sábados ajudam pacientes com agenda mais restrita durante a semana, sempre com agendamento prévio.',
  },
  {
    q: 'Preciso saber qual tratamento fazer antes de agendar?',
    a: 'Não. A avaliação inicial existe justamente para entender sua necessidade, realizar o diagnóstico e indicar o plano mais adequado.',
  },
  {
    q: 'O atendimento é coberto por convênios?',
    a: 'O atendimento é particular para garantir tempo e dedicação a cada caso. Quando aplicável, a clínica fornece documentação para pedidos de reembolso.',
  },
  {
    q: 'A clínica atende apenas moradores da região?',
    a: 'Não. A localização favorece a região da Paulista, mas a clínica atende pacientes de toda São Paulo.',
  },
];

function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={logoBacic}
        alt="Bacic Odontologia Integrada"
        className={compact ? 'h-10 w-auto object-contain' : 'h-12 w-auto object-contain'}
      />
      {!compact && (
        <div className="flex flex-col">
          <span className="text-lg font-serif tracking-tight leading-5">Bacic</span>
          <span className="text-[10px] tracking-[0.28em] font-semibold uppercase text-basic-muted">
            Odontologia Integrada
          </span>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-basic-offwhite font-sans text-basic-navy antialiased">
      <header
        className={`fixed left-0 right-0 top-0 z-50 px-6 py-4 transition-all duration-300 lg:px-12 ${
          scrolled ? 'bg-white/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <BrandLogo />

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#tratamentos"
              className="text-sm font-medium text-basic-navy-muted transition-colors hover:text-basic-navy"
            >
              Tratamentos
            </a>
            <a
              href="#sobre"
              className="text-sm font-medium text-basic-navy-muted transition-colors hover:text-basic-navy"
            >
              Clínica
            </a>
            <a
              href="#localizacao"
              className="text-sm font-medium text-basic-navy-muted transition-colors hover:text-basic-navy"
            >
              Localização
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-basic-navy px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-basic-navy-elegant active:scale-95"
            >
              <MessageCircle size={16} />
              Agendar
            </a>
          </nav>

          <button
            className="p-2 text-basic-navy transition-transform active:scale-90 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 flex flex-col bg-white px-6 pt-24 md:hidden"
          >
            <nav className="flex flex-col gap-5">
              <a href="#tratamentos" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">
                Tratamentos
              </a>
              <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">
                Clínica
              </a>
              <a href="#localizacao" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">
                Localização
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-3 rounded-full bg-basic-navy px-8 py-4 font-medium text-white shadow-xl shadow-basic-navy/10 transition-all active:scale-95"
              >
                <MessageCircle size={20} />
                Agendar via WhatsApp
              </a>
            </nav>
            <div className="mt-auto flex flex-col items-center gap-4 pb-12 text-xs text-basic-muted">
              <p>Rua Luís Coelho, 308 • Consolação, São Paulo/SP</p>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-basic-offwhite p-2"
              >
                <Instagram size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white pb-20 pt-24">
          <div className="pointer-events-none absolute inset-0 flex select-none items-center justify-center opacity-[0.03]">
            <h2 className="font-serif text-[30vw] font-black leading-none tracking-tighter">BASIC</h2>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-10 flex justify-center">
                <img
                  src={logoBacic}
                  alt="Logo Bacic Odontologia Integrada"
                  className="h-20 w-auto object-contain md:h-24"
                />
              </div>

              <h1 className="mb-12 text-6xl leading-[0.95] tracking-tighter text-basic-navy md:text-7xl lg:text-8xl">
                Odontologia <br />
                <span className="italic text-basic-navy-elegant">integrada</span>
              </h1>

              <div className="mx-auto max-w-2xl">
                <p className="mb-16 text-xl font-light leading-relaxed text-basic-navy-muted lg:text-2xl">
                  Cuidado, critério e humanização no atendimento odontológico próximo à Av.
                  Paulista.
                </p>

                <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-full bg-basic-navy px-12 py-7 text-sm font-bold uppercase tracking-widest text-white shadow-2xl shadow-basic-navy/20 transition-all hover:scale-105 active:scale-95"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Agendar avaliação pelo WhatsApp
                      <ArrowRight
                        size={20}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                    <div className="absolute inset-0 translate-y-full bg-basic-navy-elegant transition-transform duration-500 group-hover:translate-y-0" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="tratamentos" className="relative bg-white py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <header className="mb-20 grid grid-cols-1 items-end gap-8 lg:grid-cols-2">
              <div>
                <span className="mb-5 block text-sm font-bold uppercase tracking-[0.3em] text-basic-blue-light">
                  Nossa atuação
                </span>
                <h2 className="text-4xl font-serif leading-none lg:text-6xl">
                  Cuidados completos para diferentes necessidades
                </h2>
              </div>
              <p className="mb-2 text-lg font-light leading-relaxed text-basic-navy-muted">
                Da prevenção aos tratamentos restauradores, a Bacic reúne diferentes áreas da
                odontologia para orientar cada paciente de forma individualizada.
              </p>
            </header>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {[
                'Profilaxia e prevenção',
                'Periodontia',
                'Dentística restauradora',
                'Clareamento dental',
                'Prótese',
                'Odontologia domiciliar',
                'Endodontia',
                'Cirurgia',
                'Implantodontia',
                'Harmonização orofacial',
              ].map((title) => {
                const service = services.find((item) => item.title === title);
                if (!service) return null;

                return (
                <motion.div
                  key={service.title}
                  whileHover={{
                    backgroundColor: 'var(--color-basic-offwhite)',
                    outlineColor: 'var(--color-basic-blue-light)',
                  }}
                  className="flex h-full flex-col justify-between rounded-3xl border border-gray-100 p-8 transition-all duration-300 group"
                >
                  <div>
                    <div className="mb-8 h-px w-10 bg-basic-blue-light transition-all duration-700 group-hover:w-full" />
                    <h3 className="mb-4 min-h-[3rem] text-xl font-serif leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-basic-navy-muted">
                      {service.desc}
                    </p>
                  </div>
                  <div className="mt-8 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="h-1 w-1 rounded-full bg-basic-navy" />
                  </div>
                </motion.div>
                );
              })}
            </div>

            <div className="mt-20 text-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-basic-navy"
              >
                Conversar sobre meu caso pelo WhatsApp
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-basic-offwhite transition-all group-hover:bg-basic-blue-light/20">
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-basic-offwhite py-32">
          <div className="absolute right-0 top-0 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 rounded-full border border-basic-navy/5" />

          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-24 px-6 lg:grid-cols-2 lg:px-12">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-gray-200 shadow-2xl lg:aspect-[4/5]">
                  <img
                    src={draBacic}
                    alt="Atendimento humanizado na Bacic"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-basic-navy/5" />
                </div>
                <div className="absolute -bottom-10 -right-10 hidden md:block">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-basic-offwhite bg-basic-navy-elegant p-6 text-center">
                    <p className="text-[9px] font-bold uppercase leading-tight tracking-widest text-white">
                      Clínica certificada e ética
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="mb-6 block text-sm font-bold uppercase tracking-[0.3em] text-basic-blue-light">
                Metodologia
              </span>
              <h2 className="mb-10 text-4xl font-serif leading-[0.9] tracking-tight lg:text-6xl">
                Antes de indicar um tratamento, entendemos você
              </h2>
              <p className="mb-12 text-lg font-light leading-relaxed text-basic-navy-muted lg:text-xl">
                A odontologia integrada permite olhar para a saúde bucal de forma mais completa.
                Na Bacic, a avaliação considera suas queixas, sua rotina, sua saúde geral e as
                reais possibilidades de sucesso clínico.
              </p>

              <div className="space-y-12">
                {[
                  {
                    num: '01',
                    title: 'Avaliação atenta',
                    text: 'Dedicamos tempo para ouvir seu histórico, entender desconfortos e mapear prioridades de saúde bucal.',
                  },
                  {
                    num: '02',
                    title: 'Orientação clara',
                    text: 'Você recebe explicações técnicas em linguagem simples, conhecendo prós e contras de cada etapa.',
                  },
                  {
                    num: '03',
                    title: 'Cuidado contínuo',
                    text: 'Estabelecemos um plano de manutenção preventiva focado em longevidade e bem-estar odontológico.',
                  },
                ].map((item) => (
                  <div key={item.num} className="group flex gap-8">
                    <span className="font-serif text-5xl text-basic-blue-light/30 transition-colors group-hover:text-basic-blue-light/60">
                      {item.num}
                    </span>
                    <div className="flex flex-col pt-1">
                      <h4 className="mb-3 font-serif text-xl transition-transform duration-500 group-hover:translate-x-2">
                        {item.title}
                      </h4>
                      <p className="font-light leading-relaxed text-basic-navy-muted">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="bg-white py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:items-center lg:px-12">
            <div className="lg:col-span-7">
              <h2 className="mb-12 text-5xl font-serif text-basic-navy-elegant lg:text-7xl">
                Bacic
              </h2>
              <div className="space-y-8 text-lg font-light leading-relaxed text-basic-navy-muted">
                <p>
                  Localizada estrategicamente na <span className="font-medium text-basic-navy">Consolação</span>,
                  a apenas um quarteirão da Avenida Paulista, a Bacic Odontologia Integrada foi
                  idealizada para resgatar a essência do atendimento próximo.
                </p>
                <p>
                  Sob a responsabilidade técnica da{' '}
                  <span className="font-medium text-basic-navy">Dra. Noedja Bacic</span>, cada
                  indicação é baseada em critério clínico sólido, sempre com foco na ética e no
                  conforto do paciente.
                </p>
                <p>
                  Nossa estrutura foi pensada para oferecer um ambiente de calma e acolhimento,
                  contrapondo o ritmo acelerado da região da Paulista.
                </p>
              </div>

              <div className="mt-16 flex flex-col items-start gap-12 border-t border-gray-100 pt-12 md:flex-row md:items-center">
                <div className="flex flex-col">
                  <p className="mb-1 font-serif text-2xl uppercase text-basic-navy">
                    Dra. Noedja Bacic
                  </p>
                  <p className="text-[10px] font-bold tracking-[0.3em] text-basic-blue-light">
                    CRO 157183 • Responsável técnica
                  </p>
                </div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-full bg-basic-navy px-12 py-5 text-sm font-bold uppercase tracking-widest text-white shadow-xl shadow-basic-navy/10 transition-all hover:bg-basic-navy-elegant"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </div>

            <div className="group relative lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-gray-100 shadow-sm transition-transform duration-700 group-hover:-translate-y-2">
                <img
                  src={draBacic}
                  alt="Consultório acolhedor na Consolação"
                  className="absolute inset-0 h-full w-full scale-110 object-cover transition-transform duration-1000 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-basic-navy/10 to-transparent" />
              </div>
              <div className="absolute -bottom-10 -left-10 -z-10 h-48 w-48 rounded-full bg-basic-blue-light/10 blur-3xl" />
              <div className="absolute top-1/2 -right-6 h-[2px] w-12 bg-basic-blue-light/40" />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-basic-navy-elegant py-32 text-white">
          <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full border border-white/5" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
            <h2 className="mx-auto mb-24 max-w-4xl text-center font-serif text-4xl leading-none lg:text-6xl">
              Excelência nos detalhes que fazem a diferença
            </h2>

            <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {differentials.map((diff) => (
                <div key={diff.title} className="group relative border-l border-white/10 pl-10">
                  <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 scale-0 rounded-full bg-basic-blue-light transition-transform duration-300 group-hover:scale-100" />
                  <h4 className="mb-5 font-serif text-2xl transition-colors group-hover:text-basic-blue-light">
                    {diff.title}
                  </h4>
                  <p className="text-base font-light leading-relaxed text-white/70">{diff.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="localizacao" className="bg-white py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
            <div className="lg:pr-12">
              <span className="mb-6 block text-sm font-bold uppercase tracking-[0.3em] text-basic-blue-light">
                São Paulo • Consolação
              </span>
              <h2 className="mb-10 text-4xl font-serif leading-none lg:text-6xl">
                No coração da cidade, ao lado da Paulista
              </h2>
              <p className="mb-12 text-lg font-light leading-relaxed text-basic-navy-muted lg:text-xl">
                Nossa localização na Rua Luís Coelho foi escolhida para facilitar o dia a dia de
                quem reside, estuda ou trabalha nas imediações do maior centro financeiro da América
                Latina.
              </p>

              <div className="flex flex-col gap-10 rounded-[3rem] border border-gray-50 bg-basic-offwhite p-10">
                <div>
                  <h5 className="mb-5 text-sm font-bold uppercase tracking-widest text-basic-muted">
                    Endereço completo
                  </h5>
                  <p className="mb-3 font-serif text-3xl leading-none tracking-tight text-basic-navy">
                    Rua Luís Coelho, 308
                  </p>
                  <p className="text-xl font-light leading-relaxed text-basic-navy-muted">
                    Consolação, São Paulo/SP
                  </p>
                  <p className="mt-4 flex items-center gap-2 text-sm font-medium text-basic-blue-light opacity-80">
                    <span className="h-1.5 w-1.5 rounded-full bg-basic-blue-light" />
                    Próximo ao metrô Consolação e à Av. Paulista
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 rounded-full bg-basic-navy px-10 py-5 text-xs font-bold uppercase tracking-widest text-white shadow-xl shadow-basic-navy/20 transition-all hover:bg-basic-navy-elegant"
                  >
                    <Navigation size={18} className="transition-transform group-hover:rotate-12" />
                    Ver rota no Maps
                  </a>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 rounded-full border border-basic-navy/20 px-10 py-5 text-xs font-bold uppercase tracking-widest text-basic-navy transition-all hover:bg-basic-navy/5"
                  >
                    Chamar via WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[1.2/1] overflow-hidden rounded-[3rem] border-8 border-basic-offwhite bg-gray-50 shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.437452656961!2d-46.6601446!3d-23.5527181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cd3e7b165b%3A0x63e9f454f0a996d9!2sR.%20Lu%C3%ADs%20Coelho%2C%20308%20-%20Consola%C3%A7%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001309-001!5e0!3m2!1spt-BR!2sbr!4v1715782000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale saturate-50 transition-all duration-1000 hover:grayscale-0"
                  title="Localização Bacic Odontologia"
                />
                <div className="pointer-events-none absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-lg backdrop-blur">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-basic-navy">
                    Localização exata
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-gray-100 bg-basic-offwhite py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="relative flex flex-col items-center justify-between gap-12 overflow-hidden rounded-[4rem] bg-basic-navy px-8 py-12 lg:flex-row lg:px-16">
              <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-bl-[8rem] border-b border-l border-white/5" />

              <div className="flex-1 text-center lg:text-left">
                <h3 className="mb-4 font-serif text-3xl text-white">
                  Deseja uma avaliação profissional?
                </h3>
                <p className="max-w-lg font-light text-white/60">
                  Nossa equipe está pronta para orientar o próximo passo para sua saúde bucal.
                </p>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap rounded-full bg-basic-blue-light px-12 py-5 text-sm font-bold uppercase tracking-widest text-basic-navy shadow-xl shadow-basic-blue-light/20 transition-all hover:scale-105"
              >
                Quero agendar agora
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-32">
          <div className="mx-auto max-w-3xl px-6 lg:px-12">
            <div className="mb-20 text-center">
              <span className="mb-4 block text-sm font-bold uppercase tracking-[0.3em] text-basic-blue-light">
                Central de ajuda
              </span>
              <h2 className="font-serif text-4xl leading-[0.9] text-basic-navy lg:text-6xl">
                Dúvidas frequentes
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <FAQItem question={faq.q} answer={faq.a} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-basic-offwhite py-32">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-4xl"
            >
              <h2 className="mb-12 font-serif text-4xl leading-[0.95] tracking-tighter text-basic-navy lg:text-7xl">
                Cuide do seu sorriso com quem valoriza critério e humanização
              </h2>
              <p className="mx-auto mb-16 max-w-2xl text-lg font-light leading-relaxed text-basic-navy-muted lg:text-xl">
                Agende sua avaliação na <span className="font-medium text-basic-navy">Bacic Odontologia Integrada</span> e receba um atendimento ético e especializado no coração de São Paulo.
              </p>
              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full bg-basic-navy px-12 py-6 text-sm font-bold uppercase tracking-widest text-white shadow-2xl shadow-basic-navy/20 transition-all hover:bg-basic-navy-elegant sm:w-auto"
                >
                  Agendar pelo WhatsApp
                </a>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full border border-basic-navy bg-white px-12 py-6 text-sm font-bold uppercase tracking-widest text-basic-navy transition-all hover:bg-basic-navy/5 sm:w-auto"
                >
                  Localização no Maps
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 bg-white pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-24 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <div className="mb-8">
                <BrandLogo compact />
              </div>
              <p className="mb-8 max-w-[260px] text-xs font-light leading-relaxed text-basic-navy-muted">
                Uma nova forma de vivenciar a odontologia: com tempo, ética e foco total na saúde integrada.
              </p>
              <div className="flex gap-4">
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 text-basic-navy transition-colors hover:bg-basic-offwhite"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 text-basic-navy transition-colors hover:bg-basic-offwhite"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            <div>
              <h5 className="mb-10 text-[10px] font-bold uppercase tracking-[0.3em] text-basic-blue-light">
                Localização
              </h5>
              <div className="flex flex-col gap-2">
                <p className="font-serif text-lg leading-tight text-basic-navy">Rua Luís Coelho, 308</p>
                <p className="text-sm font-light leading-relaxed text-basic-navy-muted">
                  Consolação, São Paulo/SP
                  <br />
                  CEP 01309-000
                </p>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-[10px] font-bold uppercase tracking-widest text-basic-navy hover:opacity-70"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>

            <div>
              <h5 className="mb-10 text-[10px] font-bold uppercase tracking-[0.3em] text-basic-blue-light">
                Contato
              </h5>
              <div className="flex flex-col gap-6">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="group">
                  <p className="mb-1 text-[10px] uppercase opacity-30 transition-opacity group-hover:opacity-60">
                    WhatsApp
                  </p>
                  <p className="text-sm font-medium">11 92455-8697</p>
                </a>
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="group">
                  <p className="mb-1 text-[10px] uppercase opacity-30 transition-opacity group-hover:opacity-60">
                    Instagram
                  </p>
                  <p className="text-sm font-medium">@bacic.odontologia</p>
                </a>
              </div>
            </div>

            <div>
              <h5 className="mb-10 text-[10px] font-bold uppercase tracking-[0.3em] text-basic-blue-light">
                Responsável técnica
              </h5>
              <div className="flex flex-col">
                <p className="mb-1 font-serif text-xl uppercase tracking-tight text-basic-navy">
                  Dra. Noedja Bacic
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-basic-navy/40">
                  CRO SP 157183
                </p>
                <div className="mt-8 border-t border-gray-100 pt-6">
                  <p className="text-[10px] font-bold tracking-widest opacity-30">Cirurgiã-dentista</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-10 border-t border-gray-100 pt-16 md:flex-row md:items-center">
            <div className="max-w-3xl">
              <p className="text-[10px] font-bold tracking-widest text-basic-muted">
                © {new Date().getFullYear()} BASIC ODONTOLOGIA INTEGRADA. TODOS OS DIREITOS RESERVADOS.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <motion.a
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-10 right-10 z-50 hidden rounded-full bg-[#25D366] p-5 text-white shadow-[0_20px_50px_rgba(37,211,102,0.3)] transition-all hover:scale-110 active:scale-95 lg:flex"
      >
        <MessageCircle size={28} />
        <span className="flex max-w-0 items-center overflow-hidden whitespace-nowrap text-[10px] font-bold uppercase tracking-widest transition-all duration-700 group-hover:ml-4 group-hover:max-w-xs">
          Agendar avaliação
        </span>
      </motion.a>

      <div className="fixed bottom-8 left-6 right-6 z-50 lg:hidden">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 rounded-full bg-basic-navy py-5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_20px_50px_rgba(16,24,50,0.3)] transition-all active:scale-95"
        >
          <MessageCircle size={20} className="text-[#25D366]" />
          Agendar pelo WhatsApp
        </a>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-3xl border border-gray-100 bg-white transition-all duration-500 ${
        isOpen ? '-translate-y-1 shadow-xl shadow-basic-navy/5' : ''
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center justify-between px-10 py-8 text-left"
        aria-expanded={isOpen}
      >
        <span className="pr-10 font-serif text-xl leading-snug text-basic-navy transition-colors group-hover:text-basic-blue-light lg:text-2xl">
          {question}
        </span>
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full bg-basic-offwhite transition-all duration-500 ${
            isOpen ? 'rotate-180 bg-basic-navy text-white' : ''
          }`}
        >
          <ChevronDown size={20} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="border-t border-gray-50 px-10 pb-10 pt-6 text-base font-light leading-relaxed text-basic-navy-muted">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

