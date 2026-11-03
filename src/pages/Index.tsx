import { useState, type FormEvent } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  LayoutTemplate,
  Menu,
  MessageCircle,
  Palette,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  X,
} from 'lucide-react';

const services = [
  { icon: LayoutTemplate, title: 'Sites institucionais', text: 'Uma vitrine digital bonita, clara e profissional para apresentar seu negócio.' },
  { icon: Smartphone, title: 'Sites responsivos', text: 'Uma experiência impecável no celular, tablet e computador, onde seus clientes estiverem.' },
  { icon: Rocket, title: 'Landing pages', text: 'Páginas estratégicas para divulgar serviços, campanhas e transformar visitas em contatos.' },
  { icon: Palette, title: 'Identidade visual', text: 'Cores, tipografia e detalhes que deixam sua marca reconhecível e confiável.' },
];

const testimonials = [
  { quote: 'A Presença Virtual entendeu exatamente o que eu precisava e transformou minha ideia em um site profissional.', name: 'Mariana Alves', role: 'Empreendedora' },
  { quote: 'Hoje meus clientes encontram meu trabalho com muito mais facilidade. O resultado ficou leve, bonito e a minha cara.', name: 'Rafael Santos', role: 'Prestador de serviços' },
  { quote: 'O processo foi simples, próximo e sem complicação. Me senti seguro em cada etapa da criação.', name: 'Camila Oliveira', role: 'Comerciante' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#f8fbfa] text-[#10243e]">
      <header className="sticky top-0 z-50 border-b border-[#e4ecea] bg-[#f8fbfa]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#inicio" onClick={closeMenu} className="shrink-0" aria-label="Presença Virtual - início">
            <img src="/presenca-digital-logo-completo.png" alt="Presença Digital" className="h-12 w-auto object-contain" />
          </a>
          <nav className={`${menuOpen ? 'absolute left-4 right-4 top-[76px] flex flex-col rounded-2xl border border-[#dfe9e5] bg-white p-5 shadow-xl' : 'hidden'} gap-5 md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
            <a href="#servicos" onClick={closeMenu} className="text-sm font-bold text-[#597083] transition hover:text-[#10243e]">Serviços</a>
            <a href="#processo" onClick={closeMenu} className="text-sm font-bold text-[#597083] transition hover:text-[#10243e]">Como funciona</a>
            <a href="#depoimentos" onClick={closeMenu} className="text-sm font-bold text-[#597083] transition hover:text-[#10243e]">Depoimentos</a>
            <a href="#contato" onClick={closeMenu} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#10243e] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1c3e62]">Quero meu site <ArrowRight size={16} /></a>
          </nav>
          <button className="rounded-xl border border-[#d8e5e1] p-2.5 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ccebdc] bg-[#effaf4] px-4 py-2 text-xs font-extrabold uppercase tracking-[.14em] text-[#16824c]"><Sparkles size={14} /> Sites que aproximam pessoas</div>
              <h1 className="max-w-3xl text-[3.4rem] font-extrabold leading-[.98] tracking-[-.07em] sm:text-6xl lg:text-[5.7rem]">Sua ideia merece <span className="text-[#18bb60]">presença</span> na internet.</h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#5d7180]">Criamos sites profissionais para pequenos comércios, profissionais autônomos e pessoas que querem ser encontradas, passar confiança e crescer.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#contato" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#18bb60] px-7 py-4 font-extrabold text-white shadow-[0_16px_30px_-18px_#078442] transition hover:-translate-y-1 hover:bg-[#109c4c]">Vamos conversar <ArrowRight size={18} /></a><a href="#servicos" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cdded9] bg-white px-7 py-4 font-extrabold text-[#10243e] transition hover:border-[#18bb60]">Conheça nossos serviços <ChevronDown size={18} /></a></div>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-[#71838d]"><span className="flex items-center gap-2"><Check size={17} className="text-[#18bb60]" /> Atendimento próximo</span><span className="flex items-center gap-2"><Check size={17} className="text-[#18bb60]" /> Feito sob medida</span></div>
            </div>
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-[#b9f2d1] blur-3xl" />
              <div className="relative rounded-[2rem] border border-[#d9ebe4] bg-white p-3 shadow-[0_28px_70px_-35px_#10243e]"><img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1100&q=85" alt="Pessoa trabalhando em uma loja" className="h-[410px] w-full rounded-[1.5rem] object-cover" /><div className="absolute bottom-7 left-7 right-7 rounded-2xl bg-[#10243e] p-5 text-white shadow-xl"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#18bb60]"><ShieldCheck size={20} /></span><div><strong className="block text-sm">Seu negócio mais perto</strong><span className="text-xs text-white/65">da pessoa certa, no momento certo.</span></div></div></div></div>
              <div className="absolute -bottom-6 -right-4 grid h-24 w-24 rotate-6 place-items-center rounded-full bg-[#18bb60] text-center text-[11px] font-extrabold uppercase leading-4 tracking-wider text-white shadow-lg">presença<br />que gera<br />confiança</div>
            </div>
          </div>
        </section>

        <section id="servicos" className="bg-[#10243e] py-20 text-white lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#5ee58f]">O que fazemos</p><h2 className="mt-4 max-w-md text-4xl font-extrabold leading-tight tracking-[-.05em] sm:text-5xl">Tudo para sua marca ter uma boa presença.</h2><p className="mt-5 max-w-sm leading-7 text-white/65">Cada projeto nasce de uma conversa. A gente entende seu momento e cria uma solução que faça sentido para você.</p></div><div className="grid gap-4 sm:grid-cols-2">{services.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-[1.5rem] border border-white/10 bg-white/[.06] p-6 transition hover:-translate-y-1 hover:border-[#18bb60] hover:bg-white/[.1]"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#18bb60] text-white"><Icon size={22} /></span><h3 className="mt-7 text-xl font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/60">{text}</p></article>)}</div></div></div></section>

        <section id="processo" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#13964b]">Como funciona</p><h2 className="mt-4 max-w-md text-4xl font-extrabold leading-tight tracking-[-.05em] sm:text-5xl">Simples para você. Estratégico para o seu negócio.</h2><p className="mt-5 max-w-md leading-7 text-[#647985]">Você não precisa entender de tecnologia. Nós cuidamos da parte difícil e mantemos você por dentro de tudo.</p></div><div className="grid gap-4 sm:grid-cols-3">{[['01', 'A conversa', 'Entendemos sua ideia, seu público e os objetivos do seu negócio.'], ['02', 'A criação', 'Desenhamos e desenvolvemos um site bonito, claro e funcional.'], ['03', 'O lançamento', 'Ajustamos juntos e colocamos sua presença digital no ar.']].map(([num, title, text]) => <article key={num} className="rounded-[1.5rem] border border-[#dce9e5] bg-white p-6 shadow-sm"><span className="text-sm font-extrabold text-[#18bb60]">{num}</span><h3 className="mt-12 text-lg font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#70828c]">{text}</p></article>)}</div></div></section>

        <section id="depoimentos" className="bg-[#eaf7f0] py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="text-center"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#13964b]">Quem já confiou</p><h2 className="mt-4 text-4xl font-extrabold tracking-[-.05em] sm:text-5xl">Boas ideias merecem ser compartilhadas.</h2></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{testimonials.map((item) => <article key={item.name} className="rounded-[1.5rem] border border-[#d6ebe0] bg-white p-7"><div className="flex gap-1 text-[#18bb60]">{[1, 2, 3, 4, 5].map((star) => <Sparkles key={star} size={15} fill="currentColor" />)}</div><p className="mt-6 text-[17px] leading-7 text-[#40596a]">“{item.quote}”</p><div className="mt-7 border-t border-[#e8f0ed] pt-5"><strong className="block text-sm">{item.name}</strong><span className="text-sm text-[#81919a]">{item.role}</span></div></article>)}</div></div></section>

        <section id="contato" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-12 rounded-[2rem] bg-[#18bb60] p-7 text-white sm:p-12 lg:grid-cols-[1fr_.8fr] lg:p-16"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-white/75">Seu próximo passo</p><h2 className="mt-4 max-w-lg text-4xl font-extrabold leading-[1.05] tracking-[-.06em] sm:text-6xl">Vamos colocar sua ideia no mundo?</h2><p className="mt-6 max-w-md leading-7 text-white/80">Conte um pouco sobre o que você precisa. A primeira conversa é leve, sem compromisso e já ajuda a tirar o projeto do papel.</p><div className="mt-8 flex items-center gap-3 text-sm font-bold"><MessageCircle size={20} /> Atendimento pelo WhatsApp</div></div><form onSubmit={handleSubmit} className="rounded-[1.5rem] bg-white p-5 text-[#10243e] shadow-xl sm:p-7"><label className="block text-xs font-extrabold uppercase tracking-wider text-[#657985]">Seu nome<input required className="mt-2 w-full rounded-xl border border-[#dce8e5] bg-[#f8fbfa] px-4 py-3.5 text-sm outline-none transition focus:border-[#18bb60]" placeholder="Como podemos te chamar?" /></label><label className="mt-4 block text-xs font-extrabold uppercase tracking-wider text-[#657985]">Sobre o projeto<textarea required className="mt-2 min-h-28 w-full resize-none rounded-xl border border-[#dce8e5] bg-[#f8fbfa] px-4 py-3.5 text-sm outline-none transition focus:border-[#18bb60]" placeholder="O que você gostaria de criar?" /></label><button className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#10243e] px-5 py-4 font-bold text-white transition hover:bg-[#1c3e62]">{sent ? 'Mensagem recebida ✓' : 'Enviar pelo WhatsApp'} {!sent && <ArrowRight size={17} />}</button>{sent && <p className="mt-3 text-center text-xs font-semibold text-[#16824c]">Obrigado! Em breve entraremos em contato.</p>}</form></div></section>
      </main>

      <footer className="border-t border-[#e0ebe7] bg-[#f8fbfa]"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8"><img src="/presenca-digital-logo-completo.png" alt="Presença Digital" className="h-10 w-auto object-contain object-left" /><p className="text-xs text-[#7b8c94]">Sites que dão presença para boas ideias. © {new Date().getFullYear()}</p><a href="#contato" className="text-sm font-bold text-[#16824c] hover:underline">Fale com a gente <ArrowRight className="ml-1 inline" size={15} /></a></div></footer>
    </div>
  );
};

export default Index;
