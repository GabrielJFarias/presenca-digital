import { useState, type FormEvent } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Globe2,
  Instagram,
  LayoutTemplate,
  Menu,
  MessageCircle,
  Palette,
  PenTool,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  X,
} from 'lucide-react';

const whatsappNumber = '5519983085773';
const instagramUrl = 'https://www.instagram.com/presenca.digital.sites/';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Vim pelo site da Presença Digital e gostaria de solicitar um orçamento.')}`;

const services = [
  { icon: LayoutTemplate, title: 'Sites institucionais', text: 'Apresente sua empresa, seus serviços e formas de contato com clareza.' },
  { icon: Rocket, title: 'Landing pages', text: 'Uma página objetiva para divulgar um serviço, campanha ou oportunidade.' },
  { icon: Smartphone, title: 'Páginas profissionais', text: 'Uma presença online completa para MEIs, autônomos e profissionais liberais.' },
  { icon: Globe2, title: 'Catálogos digitais', text: 'Organize produtos e serviços em um espaço fácil de consultar e compartilhar.' },
  { icon: PenTool, title: 'Sites personalizados', text: 'Uma solução feita para o momento, o público e a identidade do seu negócio.' },
];

const steps = [
  ['01', 'Você conta sua ideia', 'Entendemos seu negócio, seu público e o que você precisa comunicar.'],
  ['02', 'Nós criamos', 'Organizamos o conteúdo e desenvolvemos uma página clara, bonita e responsiva.'],
  ['03', 'Você aprova', 'Ajustamos os detalhes com você antes de colocar o site no ar.'],
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '');
    const project = String(data.get('project') ?? '');
    const message = `Olá! Vim pelo site da Presença Digital. Meu nome é ${name} e gostaria de solicitar um orçamento. Sobre o projeto: ${project}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#f8fbfa] text-[#10243e]">
      <header className="sticky top-0 z-50 border-b border-[#e4ecea] bg-[#f8fbfa]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#inicio" onClick={closeMenu} className="shrink-0" aria-label="Presença Digital - início">
            <img src="/presenca-digital-logo-completo.png" alt="Logo Presença Digital" className="h-12 w-auto object-contain" />
          </a>
          <nav className={`${menuOpen ? 'absolute left-4 right-4 top-[76px] flex flex-col rounded-2xl border border-[#dfe9e5] bg-white p-5 shadow-xl' : 'hidden'} gap-5 md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none`} aria-label="Navegação principal">
            <a href="#por-que" onClick={closeMenu} className="text-sm font-bold text-[#597083] transition hover:text-[#10243e]">Por que ter um site?</a>
            <a href="#servicos" onClick={closeMenu} className="text-sm font-bold text-[#597083] transition hover:text-[#10243e]">Serviços</a>
            <a href="#processo" onClick={closeMenu} className="text-sm font-bold text-[#597083] transition hover:text-[#10243e]">Como funciona</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#10243e] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1c3e62]">Solicitar orçamento <ArrowRight size={16} /></a>
          </nav>
          <button className="rounded-xl border border-[#d8e5e1] p-2.5 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </header>

      <main>
        <section id="inicio" className="mx-auto max-w-7xl px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ccebdc] bg-[#effaf4] px-4 py-2 text-xs font-extrabold uppercase tracking-[.14em] text-[#16824c]"><Sparkles size={14} /> Tecnologia acessível para pequenos negócios</div>
              <h1 className="max-w-3xl text-[3.4rem] font-extrabold leading-[.98] tracking-[-.07em] sm:text-6xl lg:text-[5.7rem]">Seu negócio merece uma <span className="text-[#18bb60]">presença profissional</span> na internet.</h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#5d7180]">Criamos sites e páginas profissionais com preço acessível para pequenos negócios, comércios, MEIs e profissionais autônomos.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#18bb60] px-7 py-4 font-extrabold text-white shadow-[0_16px_30px_-18px_#078442] transition hover:-translate-y-1 hover:bg-[#109c4c]">Solicitar orçamento <ArrowRight size={18} /></a><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cdded9] bg-white px-7 py-4 font-extrabold text-[#10243e] transition hover:border-[#18bb60]">Falar pelo WhatsApp <MessageCircle size={18} /></a></div>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-[#71838d]"><span className="flex items-center gap-2"><Check size={17} className="text-[#18bb60]" /> Atendimento próximo</span><span className="flex items-center gap-2"><Check size={17} className="text-[#18bb60]" /> Sem complicação</span></div>
            </div>
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-[#b9f2d1] blur-3xl" />
              <div className="relative rounded-[2rem] border border-[#d9ebe4] bg-white p-3 shadow-[0_28px_70px_-35px_#10243e]"><img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=75" alt="Pequena empreendedora atendendo clientes em seu negócio" loading="eager" fetchPriority="high" className="h-[410px] w-full rounded-[1.5rem] object-cover" /><div className="absolute bottom-7 left-7 right-7 rounded-2xl bg-[#10243e] p-5 text-white shadow-xl"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#18bb60]"><ShieldCheck size={20} /></span><div><strong className="block text-sm">Transformamos ideias</strong><span className="text-xs text-white/65">em presença digital.</span></div></div></div></div>
              <div className="absolute -bottom-6 -right-4 grid h-24 w-24 rotate-6 place-items-center rounded-full bg-[#18bb60] text-center text-[11px] font-extrabold uppercase leading-4 tracking-wider text-white shadow-lg">simples<br />claro<br />profissional</div>
            </div>
          </div>
        </section>

        <section id="por-que" className="bg-[#eaf7f0] py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#13964b]">Por que ter um site?</p><h2 className="mt-4 max-w-md text-4xl font-extrabold leading-tight tracking-[-.05em] sm:text-5xl">Seu negócio não precisa depender só das redes sociais.</h2><p className="mt-5 max-w-md leading-7 text-[#5f7580]">Instagram e WhatsApp são importantes, mas um site próprio reúne suas informações em um lugar que é seu e facilita a decisão de quem quer contratar.</p></div><div className="grid gap-4 sm:grid-cols-2"><article className="rounded-[1.5rem] border border-[#d6ebe0] bg-white p-6"><Globe2 className="text-[#18bb60]" size={25} /><h3 className="mt-6 text-xl font-extrabold">Mais confiança</h3><p className="mt-2 text-sm leading-6 text-[#70828c]">Passe uma primeira impressão profissional e mostre que seu negócio está pronto para atender.</p></article><article className="rounded-[1.5rem] border border-[#d6ebe0] bg-white p-6"><ShieldCheck className="text-[#18bb60]" size={25} /><h3 className="mt-6 text-xl font-extrabold">Informação organizada</h3><p className="mt-2 text-sm leading-6 text-[#70828c]">Serviços, horários e contatos ficam fáceis de encontrar, sem depender de uma postagem antiga.</p></article><article className="rounded-[1.5rem] border border-[#d6ebe0] bg-white p-6"><Smartphone className="text-[#18bb60]" size={25} /><h3 className="mt-6 text-xl font-extrabold">Acesso em qualquer tela</h3><p className="mt-2 text-sm leading-6 text-[#70828c]">Seu cliente pode conhecer seu trabalho pelo celular, tablet ou computador.</p></article><article className="rounded-[1.5rem] border border-[#d6ebe0] bg-white p-6"><MessageCircle className="text-[#18bb60]" size={25} /><h3 className="mt-6 text-xl font-extrabold">Contato mais direto</h3><p className="mt-2 text-sm leading-6 text-[#70828c]">Deixe claro o próximo passo e facilite o contato pelo WhatsApp.</p></article></div></div></div></section>

        <section id="servicos" className="bg-[#10243e] py-20 text-white lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#5ee58f]">O que podemos criar</p><h2 className="mt-4 max-w-md text-4xl font-extrabold leading-tight tracking-[-.05em] sm:text-5xl">Uma solução no tamanho do seu negócio.</h2><p className="mt-5 max-w-sm leading-7 text-white/65">Escolha o ponto de partida e conte para a gente o que você precisa. A proposta é feita de forma clara e sem pacote engessado.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 font-bold text-[#5ee58f] hover:text-white">Conversar sobre meu projeto <ArrowRight size={17} /></a></div><div className="grid gap-4 sm:grid-cols-2">{services.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-[1.5rem] border border-white/10 bg-white/[.06] p-6 transition hover:-translate-y-1 hover:border-[#18bb60] hover:bg-white/[.1]"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#18bb60] text-white"><Icon size={22} /></span><h3 className="mt-7 text-xl font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/60">{text}</p></article>)}</div></div></div></section>

        <section id="processo" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#13964b]">Como funciona</p><h2 className="mt-4 max-w-md text-4xl font-extrabold leading-tight tracking-[-.05em] sm:text-5xl">Um processo simples, do começo ao lançamento.</h2><p className="mt-5 max-w-md leading-7 text-[#647985]">Você acompanha as decisões importantes e recebe orientação em cada etapa, sem precisar falar a língua da tecnologia.</p></div><div className="grid gap-4 sm:grid-cols-3">{steps.map(([number, title, text]) => <article key={number} className="rounded-[1.5rem] border border-[#dce9e5] bg-white p-6 shadow-sm"><span className="text-sm font-extrabold text-[#18bb60]">{number}</span><h3 className="mt-12 text-lg font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#70828c]">{text}</p></article>)}</div></div></section>

        <section id="portfolio" className="bg-[#eef5f2] py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#13964b]">Portfólio</p><h2 className="mt-4 text-4xl font-extrabold tracking-[-.05em] sm:text-5xl">Projetos pensados para cada história.</h2></div><p className="max-w-sm text-sm leading-6 text-[#657b85]">Estamos reunindo nossos primeiros projetos. Em breve, este espaço mostrará mais trabalhos da Presença Digital.</p></div><div className="mt-10 flex min-h-56 flex-col items-center justify-center rounded-[1.75rem] border border-dashed border-[#a8cfc0] bg-white px-6 text-center"><div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#e4f7eb] text-[#18bb60]"><Palette size={26} /></div><h3 className="mt-5 text-xl font-extrabold">Seu projeto pode ser o próximo</h3><p className="mt-2 max-w-md text-sm leading-6 text-[#70828c]">Vamos criar uma página que apresente seu trabalho com clareza e ajude mais pessoas a encontrarem você.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-bold text-[#16824c] hover:underline">Solicitar orçamento <ArrowRight size={16} /></a></div></div></section>

        <section id="contato" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-12 rounded-[2rem] bg-[#18bb60] p-7 text-white sm:p-12 lg:grid-cols-[1fr_.8fr] lg:p-16"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-white/75">Vamos conversar</p><h2 className="mt-4 max-w-lg text-4xl font-extrabold leading-[1.05] tracking-[-.06em] sm:text-6xl">Dê o próximo passo para sua presença digital.</h2><p className="mt-6 max-w-md leading-7 text-white/80">Conte um pouco sobre o que você precisa. A conversa é simples, sem compromisso e já ajuda a transformar sua ideia em um plano.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 text-sm font-bold underline underline-offset-4"><MessageCircle size={20} /> Falar pelo WhatsApp</a></div><form onSubmit={handleSubmit} className="rounded-[1.5rem] bg-white p-5 text-[#10243e] shadow-xl sm:p-7"><label className="block text-xs font-extrabold uppercase tracking-wider text-[#657985]">Seu nome<input name="name" required className="mt-2 w-full rounded-xl border border-[#dce8e5] bg-[#f8fbfa] px-4 py-3.5 text-sm outline-none transition focus:border-[#18bb60]" placeholder="Como podemos te chamar?" /></label><label className="mt-4 block text-xs font-extrabold uppercase tracking-wider text-[#657985]">Sobre o projeto<textarea name="project" required className="mt-2 min-h-28 w-full resize-none rounded-xl border border-[#dce8e5] bg-[#f8fbfa] px-4 py-3.5 text-sm outline-none transition focus:border-[#18bb60]" placeholder="Que tipo de site você imagina?" /></label><button className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#10243e] px-5 py-4 font-bold text-white transition hover:bg-[#1c3e62]">{sent ? 'Mensagem preparada ✓' : 'Solicitar orçamento'} {!sent && <ArrowRight size={17} />}</button>{sent && <p className="mt-3 text-center text-xs font-semibold text-[#16824c]">O WhatsApp foi aberto com sua mensagem.</p>}</form></div></section>
      </main>

      <footer className="border-t border-[#e0ebe7] bg-[#f8fbfa]"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 lg:px-8"><div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><img src="/presenca-digital-logo-completo.png" alt="Logo Presença Digital" className="h-10 w-auto object-contain object-left" /><p className="text-xs text-[#7b8c94]">Sites profissionais para boas ideias. © {new Date().getFullYear()}</p><div className="flex items-center gap-5"><a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#16824c] hover:underline"><Instagram size={17} /> Instagram</a><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#16824c] hover:underline"><MessageCircle size={17} /> WhatsApp</a></div></div><p className="text-xs text-[#7b8c94]">Pequenos negócios, comércios, MEIs e profissionais autônomos.</p></div></footer>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com a Presença Digital pelo WhatsApp" className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#18bb60] px-4 py-3 font-extrabold text-white shadow-[0_10px_25px_-8px_#078442] transition hover:-translate-y-1 hover:bg-[#109c4c] sm:bottom-7 sm:right-7"><MessageCircle size={21} /><span className="hidden sm:inline">Falar pelo WhatsApp</span></a>
    </div>
  );
};

export default Index;
