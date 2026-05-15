import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  MessageCircle, 
  MapPin, 
  Check, 
  Instagram, 
  CircleCheck,
  ChevronDown,
  Navigation,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_LINK = "https://wa.me/5511924558697?text=Ol%C3%A1%2C%20vim%20pelo%20Google%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Basic%20Odontologia%20Integrada.";
const MAPS_LINK = "https://share.google/8kPXRKlmD2nJsAAjK";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-basic-offwhite text-basic-navy font-sans antialiased overflow-x-hidden">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 py-4 ${
          scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-basic-navy flex items-center justify-center relative overflow-hidden group rounded-sm">
              <span className="text-white font-serif text-xl relative z-10">B</span>
              <div className="absolute inset-0 bg-basic-blue-light transition-transform duration-500 origin-bottom scale-y-0 group-hover:scale-y-100"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-serif tracking-tight leading-4">BASIC</span>
              <span className="text-[10px] tracking-[0.2em] font-medium opacity-60">ODONTOLOGIA</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-basic-navy text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-basic-navy-elegant transition-all active:scale-95 flex items-center gap-2"
            >
              <MessageCircle size={16} />
              Agendar
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-basic-navy transition-transform active:scale-90"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-24 px-6 flex flex-col"
          >
            <nav className="flex flex-col gap-6">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-basic-navy text-white px-8 py-4 rounded-full text-center font-medium flex items-center justify-center gap-3 shadow-xl shadow-basic-navy/10 active:scale-95 transition-all"
              >
                <MessageCircle size={20} />
                Agendar via WhatsApp
              </a>
            </nav>
            <div className="mt-auto pb-12 flex flex-col items-center gap-4 text-basic-muted text-xs">
              <p>Rua Luís Coelho, 308 — Consolação/SP</p>
              <div className="flex gap-4">
                 <a href="https://instagram.com/bacic.odontologia" className="p-2 bg-basic-offwhite rounded-full"><Instagram size={18}/></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Section 1: Hero - Redesigned to be innovative and bold */}
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden bg-white">
          {/* Decorative background typography */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
             <h2 className="text-[30vw] font-serif font-black leading-none tracking-tighter">BASIC</h2>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-basic-navy leading-[0.95] mb-12 tracking-tighter">
                Odontologia <br />
                <span className="italic text-basic-navy-elegant">Integrada</span> 
              </h1>
              
              <div className="max-w-2xl mx-auto">
                <p className="text-xl lg:text-2xl text-basic-navy-muted mb-16 font-light leading-relaxed">
                  Cuidado, critério e humanização no atendimento odontológico próximo à Av. Paulista.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-basic-navy text-white px-12 py-7 rounded-full font-bold text-sm tracking-widest uppercase overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-basic-navy/20"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Agendar avaliação pelo WhatsApp
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-basic-navy-elegant translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </a>
                </div>
              </div>
            </motion.div>


          </div>
        </section>

        {/* Section 3: Tratamentos */}
        <section id="tratamentos" className="py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <header className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
              <div>
                <span className="text-sm uppercase font-bold tracking-[0.3em] text-basic-blue-light block mb-5">Nossa atuação</span>
                <h2 className="text-4xl lg:text-6xl font-serif leading-none">
                  Cuidados completos para diferentes necessidades
                </h2>
              </div>
              <p className="text-basic-navy-muted lg:text-lg font-light leading-relaxed mb-2">
                Da prevenção aos tratamentos restauradores, a Basic reúne diferentes áreas da odontologia para orientar cada paciente de forma individualizada.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {[
                { title: 'Profilaxia e Prevenção', desc: 'Cuidados essenciais para manter a saúde bucal em dia e acompanhamento constante.' },
                { title: 'Dentística Restauradora', desc: 'Restaurações pensadas para recuperar função, conforto e estética natural.' },
                { title: 'Clareamento Dental', desc: 'Procedimento realizado após avaliação criteriosa da saúde de gângivas e dentes.' },
                { title: 'Odontologia Domiciliar', desc: 'Atendimento humanizado para quem necessita de cuidados fora do consultório.' },
                { title: 'Prótese', desc: 'Reabilitação total ou parcial para devolver sua segurança ao sorrir e mastigar.' },
                { title: 'Endodontia', desc: 'Tratamento de canal especializado focando no alívio da dor e preservação dental.' },
                { title: 'Cirurgia', desc: 'Procedimentos clínicos executados com máximo planejamento e biosegurança.' },
                { title: 'Implantodontia', desc: 'Reposição dentária moderna com técnicas consolidadas e planejamento individual.' },
                { title: 'Periodontia', desc: 'Prevenção e tratamento das estruturas de suporte e saúde periodontal.' },
                { title: 'Harmonização Orofacial', desc: 'Busca pelo equilíbrio facial com indicação técnica, clínica e responsável.' },
              ].map((service, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ backgroundColor: "var(--color-basic-offwhite)", outlineColor: "var(--color-basic-blue-light)" }}
                  className="p-8 rounded-3xl border border-gray-100 transition-all duration-300 flex flex-col group h-full justify-between"
                >
                  <div>
                    <div className="w-10 h-px bg-basic-blue-light mb-8 group-hover:w-full transition-all duration-700"></div>
                    <h3 className="text-xl font-serif mb-4 leading-tight min-h-[3rem]">{service.title}</h3>
                    <p className="text-sm text-basic-navy-muted leading-relaxed font-light">{service.desc}</p>
                  </div>
                  <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    {/* Tiny decorative mark */}
                    <div className="w-1 h-1 bg-basic-navy rounded-full"></div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 text-basic-navy font-bold tracking-widest text-xs uppercase group"
              >
                Conversar sobre meu caso pelo WhatsApp
                <div className="w-12 h-12 rounded-full bg-basic-offwhite flex items-center justify-center group-hover:bg-basic-blue-light/20 transition-all">
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Section 4: Conceito Integrado */}
        <section className="py-32 bg-basic-offwhite relative overflow-hidden">
          {/* Curved Line Decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-basic-navy/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-[4/4] lg:aspect-[4/5] bg-gray-200 rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-2871b886759c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                    alt="Atendimento humanizado na Basic" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-basic-navy/5"></div>
                </div>
                {/* Floating badge for trust */}
                <div className="absolute -bottom-10 -right-10 hidden md:block">
                  <div className="w-32 h-32 bg-basic-navy-elegant rounded-full flex items-center justify-center p-6 text-center border-4 border-basic-offwhite">
                    <p className="text-[9px] uppercase font-bold tracking-widest text-white leading-tight">Clínica Certificada e Ética</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-sm uppercase font-bold tracking-[0.3em] text-basic-blue-light block mb-6">Metodologia</span>
              <h2 className="text-4xl lg:text-6xl font-serif mb-10 leading-[0.9] tracking-tight">Antes de indicar um tratamento, entendemos você</h2>
              <p className="text-lg lg:text-xl text-basic-navy-muted mb-12 font-light leading-relaxed">
                A odontologia integrada permite olhar para a saúde bucal de forma mais completa. Na Basic, a avaliação considera suas queixas, sua rotina, sua saúde geral e as reais possibilidades de sucesso clínico.
              </p>

              <div className="space-y-12">
                {[
                  { 
                    num: '01', 
                    title: 'Avaliação atenta', 
                    text: 'Dedicamos tempo para ouvir seu histórico, entender desconfortos e mapear prioridades de saúde bucal.' 
                  },
                  { 
                    num: '02', 
                    title: 'Orientação clara', 
                    text: 'Você recebe explicações técnicas em linguagem simples, conhecendo prós e contras de cada etapa.' 
                  },
                  { 
                    num: '03', 
                    title: 'Cuidado contínuo', 
                    text: 'Estabelecemos um plano de manutenção preventiva focado em longevidade e bem-estar odontológico.' 
                  },
                ].map((item) => (
                  <div key={item.num} className="flex gap-8 group">
                    <span className="font-serif text-5xl text-basic-blue-light/30 transition-colors group-hover:text-basic-blue-light/60">{item.num}</span>
                    <div className="flex flex-col pt-1">
                      <h4 className="text-xl font-serif mb-3 group-hover:translate-x-2 transition-transform duration-500">{item.title}</h4>
                      <p className="text-basic-navy-muted font-light leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Sobre a Clínica */}
        <section id="sobre" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:items-center">
            <div className="lg:col-span-7">
              <h2 className="text-5xl lg:text-7xl font-serif mb-12 text-basic-navy-elegant">Basic</h2>
              <div className="space-y-8 text-lg font-light text-basic-navy-muted leading-relaxed">
                <p>
                  Localizada estrategicamente na <span className="text-basic-navy font-medium">Consolação</span>, a apenas um quarteirão da Avenida Paulista, a Basic Odontologia Integrada foi idealizada para resgatar a essência do atendimento próximo: aquele onde o paciente é ouvido e respeitado.
                </p>
                <p>
                  Sob a responsabilidade técnica da <span className="text-basic-navy font-medium">Dra. Noedja Bacic</span>, operamos com uma premissa inegociável: a ética. Cada indicação é baseada em critério clínico sólido, visando a preservação da saúde e o conforto do paciente.
                </p>
                <p>
                  Nossa estrutura foi desenhada para oferecer um ambiente de calma e acolhimento, contrapondo o ritmo acelerado da região da Paulista. Aqui, a tecnologia serve à saúde, e não o contrário.
                </p>
              </div>

              <div className="mt-16 flex flex-col md:flex-row items-start md:items-center gap-12 pt-12 border-t border-gray-100">
                <div className="flex flex-col">
                  <p className="font-serif text-2xl text-basic-navy mb-1 uppercase">Dra. Noedja Bacic</p>
                  <p className="text-[10px] font-bold tracking-[0.3em] text-basic-blue-light">CRO 157183 • Responsável técnica</p>
                </div>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-basic-navy text-white px-12 py-5 rounded-full font-bold text-sm tracking-widest hover:bg-basic-navy-elegant transition-all shadow-xl shadow-basic-navy/10 flex items-center gap-3 uppercase"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative group">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative border border-gray-100 shadow-sm transition-transform duration-700 group-hover:-translate-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1445510866646-76ea4f732496?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Consultório acolhedor na Consolação" 
                  className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-basic-navy/10 to-transparent"></div>
              </div>
              {/* Accents */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-basic-blue-light/10 -z-10 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 -right-6 w-12 h-[2px] bg-basic-blue-light/40"></div>
            </div>
          </div>
        </section>

        {/* Section 6: Diferenciais */}
        <section className="py-32 bg-basic-navy-elegant text-white overflow-hidden relative">
           {/* Geometric shapes */}
          <div className="absolute -top-24 -left-24 w-96 h-96 border border-white/5 rounded-full pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <h2 className="text-4xl lg:text-6xl font-serif text-center mb-24 max-w-4xl mx-auto leading-none">Excelência nos detalhes que fazem a diferença</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-16">
              {[
                { 
                  title: 'Localização Estratégica', 
                  text: 'A poucos passos da Av. Paulista, em uma região central, segura e de fácil acesso para quem circula pela Consolação e Bela Vista.' 
                },
                { 
                  title: 'Atendimento Próximo', 
                  text: 'Damos valor ao tempo de cada paciente. Uma abordagem exclusiva, cuidadosa e sem a pressa comum de grandes clínicas.' 
                },
                { 
                  title: 'Visão Integrada', 
                  text: 'Diferentes especialidades reunidas sob uma mesma filosofia de cuidado: olhar para o todo antes da parte.' 
                },
                { 
                  title: 'Foco na Saúde', 
                  text: 'Indicações de tratamentos pautadas exclusivamente no critério clínico, ética odontológica e necessidade real do paciente.' 
                },
                { 
                  title: 'Conveniência aos Sábados', 
                  text: 'Atendimento estendido para conciliar sua saúde com a rotina corrida do dia a dia paulistano.' 
                },
                { 
                  title: 'Biosegurança e Conforto', 
                  text: 'Ambiente rigorosamente preparado seguindo protocolos de segurança, pensado para transmitir tranquilidade.' 
                },
              ].map((diff, idx) => (
                <div key={idx} className="relative pl-10 border-l border-white/10 group">
                  <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-basic-blue-light rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <h4 className="text-2xl font-serif mb-5 group-hover:text-basic-blue-light transition-colors">{diff.title}</h4>
                  <p className="text-base text-white/50 leading-relaxed font-light">{diff.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Localização & Map */}
        <section id="localizacao" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:pr-12">
              <span className="text-sm uppercase font-bold tracking-[0.3em] text-basic-blue-light block mb-6">São Paulo • Consolação</span>
              <h2 className="text-4xl lg:text-6xl font-serif mb-10 leading-none">No coração da cidade, ao lado da Paulista</h2>
              <p className="text-lg lg:text-xl text-basic-navy-muted font-light mb-12 leading-relaxed">
                Nossa localização na Rua Luís Coelho foi escolhida para facilitar o dia a dia de quem reside, estuda ou trabalha nas imediações do maior centro financeiro da América Latina.
              </p>

              <div className="bg-basic-offwhite p-10 rounded-[3rem] border border-gray-50 flex flex-col gap-10">
                <div>
                  <h5 className="text-sm uppercase font-bold tracking-widest text-basic-muted mb-5">Endereço Completo</h5>
                  <p className="font-serif text-3xl text-basic-navy leading-none mb-3 tracking-tight">Rua Luís Coelho, 308</p>
                  <p className="text-xl font-light text-basic-navy-muted leading-relaxed">Consolação, São Paulo/SP</p>
                  <p className="text-sm font-medium text-basic-blue-light opacity-80 mt-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-basic-blue-light rounded-full"></span>
                    Próximo ao Metrô Consolação / Av. Paulista
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-basic-navy text-white px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-basic-navy-elegant shadow-xl shadow-basic-navy/20 transition-all group"
                  >
                    <Navigation size={18} className="group-hover:rotate-12 transition-transform" /> Ver rota no Maps
                  </a>
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-basic-navy/20 text-basic-navy px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-basic-navy/5 transition-all"
                  >
                    Chamar via WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[1.2/1] bg-gray-50 rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-basic-offwhite">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.437452656961!2d-46.6601446!3d-23.5527181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cd3e7b165b%3A0x63e9f454f0a996d9!2sR.%20Lu%C3%ADs%20Coelho%2C%20308%20-%20Consola%C3%A7%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001309-001!5e0!3m2!1spt-BR!2sbr!4v1715782000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-1000 saturate-50"
                  title="Localização Basic Odontologia"
                ></iframe>
                <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg pointer-events-none">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-basic-navy">Localização Exata</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Middle Conversion Section */}
        <section className="py-24 bg-basic-offwhite border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="bg-basic-navy py-12 px-8 lg:px-16 rounded-[4rem] flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
               {/* Background detail */}
               <div className="absolute top-0 right-0 w-64 h-64 border-b border-l border-white/5 rounded-bl-[8rem] pointer-events-none"></div>

               <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-serif text-white mb-4">Deseja uma avaliação profissional?</h3>
                  <p className="text-white/60 font-light max-w-lg">Nossa equipe está pronta para orientar o próximo passo para sua saúde bucal.</p>
               </div>
               <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-basic-blue-light text-basic-navy px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl shadow-basic-blue-light/20 whitespace-nowrap"
               >
                 Quero agendar agora
               </a>
            </div>
          </div>
        </section>

        {/* Section 10: FAQ */}
        <section id="faq" className="py-32 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <span className="text-sm uppercase font-bold tracking-[0.3em] text-basic-blue-light mb-4 block">Central de Ajuda</span>
              <h2 className="text-4xl lg:text-6xl font-serif text-basic-navy leading-[0.9]">Dúvidas Frequentes</h2>
            </div>
            
            <div className="space-y-6">
              {[
                { 
                  q: 'A Basic Odontologia Integrada fica perto da Avenida Paulista?', 
                  a: 'Sim. A clínica está localizada na Rua Luís Coelho, 308, na Consolação, perfeitamente situada a cerca de 2 minutos a pé da Avenida Paulista e do Metrô Consolação.' 
                },
                { 
                  q: 'Quais tratamentos a clínica oferece?', 
                  a: 'Atuamos na odontologia integrada completa: prevenção, estética (clareamento, resinas), reabilitação (próteses, implantes), canal (endodontia), periodontia, cirurgias, atendimento domiciliar e harmonização orofacial.' 
                },
                { 
                  q: 'A clínica atende aos sábados?', 
                  a: 'Sim, realizamos atendimentos aos sábados para facilitar o acesso de quem possui agenda restrita em dias úteis. Recomenda-se agendamento prévio via WhatsApp.' 
                },
                { 
                  q: 'Preciso saber exatamente qual tratamento fazer antes de agendar?', 
                  a: 'Absolutamente não. A consulta inicial de avaliação é o momento para que possamos realizar o diagnóstico técnico, ouvir suas queixas e propor o plano de tratamento ideal.' 
                },
                { 
                  q: 'O atendimento é coberto por convênios?', 
                  a: 'Nosso atendimento é focado na modalidade particular para garantir o tempo e a dedicação que cada caso exige. No entanto, fornecemos documentação para facilitar pedidos de reembolso caso seu plano ofereça essa opção.' 
                },
                { 
                  q: 'A clínica atende apenas moradores da região?', 
                  a: 'Atendemos pacientes de toda São Paulo, mas nossa localização é especialmente conveniente para moradores e profissionais da Consolação, Paulista, Bela Vista, Cerqueira César e Higienópolis.' 
                },
              ].map((faq, idx) => (
                <FAQItem key={idx} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* Section 11: Final CTA */}
        <section className="py-32 bg-basic-offwhite">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl lg:text-7xl font-serif mb-12 text-basic-navy leading-[0.95] tracking-tighter">
                Cuide do seu sorriso com quem valoriza critério e humanização
              </h2>
              <p className="text-lg lg:text-xl text-basic-navy-muted mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                Agende sua avaliação na <span className="text-basic-navy font-medium">Basic Odontologia Integrada</span> e receba um atendimento ético e especializado no coração de São Paulo.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-basic-navy text-white px-12 py-6 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-basic-navy-elegant transition-all w-full sm:w-auto shadow-2xl shadow-basic-navy/20"
                >
                  Agendar pelo WhatsApp
                </a>
                <a 
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-basic-navy text-basic-navy px-12 py-6 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-basic-navy/5 transition-all w-full sm:w-auto"
                >
                  Localização no Maps
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-32 pb-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-basic-navy flex items-center justify-center rounded-sm">
                  <span className="text-white font-serif text-lg">B</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-serif tracking-tight">BASIC</span>
                  <span className="text-[9px] tracking-[0.3em] font-bold opacity-40 uppercase">ODONTOLOGIA</span>
                </div>
              </div>
              <p className="text-xs text-basic-navy-muted leading-relaxed font-light mb-8 max-w-[220px]">
                Uma nova forma de vivenciar a odontologia: com tempo, ética e foco total na saúde integrada.
              </p>
              <div className="flex gap-4">
                 <a 
                  href="https://instagram.com/bacic.odontologia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-basic-navy hover:bg-basic-offwhite transition-colors"
                 >
                   <Instagram size={18} />
                 </a>
                 <a 
                  href={WHATSAPP_LINK}
                  className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-basic-navy hover:bg-basic-offwhite transition-colors"
                 >
                   <MessageCircle size={18} />
                 </a>
              </div>
            </div>

            <div>
              <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-basic-blue-light mb-10">Localização</h5>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-basic-navy font-serif text-lg leading-tight">Rua Luís Coelho, 308</p>
                <p className="text-sm text-basic-navy-muted font-light leading-relaxed">
                  Consolação, São Paulo/SP<br />
                  CEP 01309-000
                </p>
                <a href={MAPS_LINK} className="text-[10px] font-bold uppercase tracking-widest text-basic-navy mt-4 inline-block hover:opacity-70">Ver no Google Maps</a>
              </div>
            </div>

            <div>
              <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-basic-blue-light mb-10">Contato</h5>
              <div className="flex flex-col gap-6">
                <a href={WHATSAPP_LINK} className="group">
                  <p className="text-[10px] uppercase font-bold opacity-30 group-hover:opacity-60 mb-1">WhatsApp</p>
                  <p className="text-sm font-medium">11 92455-8697</p>
                </a>
                <a href="https://instagram.com/bacic.odontologia" className="group">
                  <p className="text-[10px] uppercase font-bold opacity-30 group-hover:opacity-60 mb-1">Instagram</p>
                  <p className="text-sm font-medium">@bacic.odontologia</p>
                </a>
              </div>
            </div>

            <div>
              <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-basic-blue-light mb-10">Responsável Técnica</h5>
              <div className="flex flex-col">
                <p className="font-serif text-xl text-basic-navy mb-1 uppercase tracking-tight">Dra. Noedja Bacic</p>
                <p className="text-[10px] font-bold tracking-[0.2em] text-basic-navy/40 uppercase">CRO SP 157183</p>
                <div className="mt-8 pt-6 border-t border-gray-100">
                   <p className="text-[10px] font-bold tracking-widest opacity-30">CIRURGIÃ-DENTISTA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            <div className="max-w-3xl">
              <p className="text-[10px] text-basic-muted font-bold tracking-widest">
                © {new Date().getFullYear()} BASIC ODONTOLOGIA INTEGRADA. TODOS OS DIREITOS RESERVADOS. DESENVOLVIDO POR SUPERDENTAL®
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA Buttons */}
      {/* Desktop Floating WhatsApp */}
      <motion.a 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:flex fixed bottom-10 right-10 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.3)] hover:scale-110 active:scale-95 transition-all group"
      >
        <MessageCircle size={28} />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-4 transition-all duration-700 font-bold uppercase tracking-widest text-[10px] flex items-center">
          Agendar avaliação
        </span>
      </motion.a>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-8 left-6 right-6 z-50">
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-basic-navy text-white flex items-center justify-center gap-3 py-5 rounded-full shadow-[0_20px_50px_rgba(16,24,50,0.3)] font-bold active:scale-95 transition-all text-xs uppercase tracking-[0.2em]"
        >
          <MessageCircle size={20} className="text-[#25D366]" />
          Agendar pelo WhatsApp
        </a>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string, key?: React.Key }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`bg-white rounded-3xl border border-gray-100 overflow-hidden transition-all duration-500 ${isOpen ? 'shadow-xl shadow-basic-navy/5 -translate-y-1' : ''}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-10 py-8 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-xl lg:text-2xl text-basic-navy pr-10 leading-snug group-hover:text-basic-blue-light transition-colors">{question}</span>
        <div className={`w-10 h-10 rounded-full bg-basic-offwhite flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-basic-navy text-white rotate-180' : ''}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-10 pb-10 text-basic-navy-muted font-light leading-relaxed text-base border-t border-gray-50 pt-6">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
