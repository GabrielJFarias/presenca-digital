import { useState, type FormEvent } from 'react';
import {
  ArrowUpRight,
  Check,
  Code2,
  Eye,
  Instagram,
  LayoutTemplate,
  Linkedin,
  Menu,
  MessageCircle,
  PenTool,
  Sparkles,
  X,
} from 'lucide-react';

const services = [
  {
    icon: LayoutTemplate,
    number: '01',
    title: 'Sites institucionais',
    text: 'Uma presença digital clara, bonita e feita para transformar visitantes em clientes.',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Landing pages',
    text: 'Páginas objetivas para divulgar um serviço, campanha ou lançamento com foco em resultado.',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Identidade digital',
    text: 'Organizo cores, tipografia e conteúdo para sua marca parecer profissional desde o primeiro clique.',
  },
];

const projects = [
  {
    title: 'Gabriel J. Farias',
    type: 'Site publicado · portfólio',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85',
    href: 'https://gabrieljfarias.github.io/Sites/',
    className: 'md:col-span-7',
  },
  {
    title: 'Modula Biz',
    type: 'Site publicado · negócios',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85',
    href: 'https://modula-biz.vercel.app/',
    className: 'md:col-span-5 md:mt-20',
  },
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
    <div className="min-h-screen overflow-hidden bg-[#f6f5f0] text-[#18231f]">
      <header className="absolute inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-2 text-lg font-extrabold tracking-[-.04em]" onClick={closeMenu}>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#d7ef65] text-[#1a281e]"><Sparkles size={17} /></span>
            NORTE<span className="text-[#91a92d]">.</span>
          </a>
          <nav className={`${menuOpen ? 'absolute left-5 right-5 top-[76px] flex flex-col rounded-2xl border border-[#dfe5d5] bg-[#f6f5f0] p-5 shadow-xl' : 'hidden'} gap-5 md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
            <a href="#servicos" onClick={closeMenu} className="text-sm font-bold text-[#627069] transition hover:text-[#18231f]">O que faço</a>
            <a href="#processo" onClick={closeMenu} className="text-sm font-bold text-[#627069] transition hover:text-[#18231f]">Como funciona</a>
            <a href="#projetos" onClick={closeMenu} className="text-sm font-bold text-[#627069] transition hover:text-[#18231f]">Projetos</a>
            <a href="#contato" onClick={closeMenu} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#18231f] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#34443b] md:mt-0">Vamos conversar <ArrowUpRight size={16} /></a>
          </nav>
          <button className="rounded-full border border-[#d9e0d4] p-2.5 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
          <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative z-10">
              <p className="mb-6 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.22em] text-[#79911f]"><span className="h-2 w-2 rounded-full bg-[#b4d737]" /> Freelancer independente · design & web</p>
              <h1 className="max-w-3xl text-[3.55rem] font-extrabold leading-[.98] tracking-[-.075em] sm:text-7xl lg:text-[6.25rem]">Seu negócio merece um <span className="relative inline-block text-[#78901f]">site à altura.<span className="absolute -bottom-1 left-1 h-2 w-[92%] -rotate-2 rounded-full bg-[#d7ef65] opacity-80" /></span></h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[#64726b]">Eu crio sites estratégicos para pequenas empresas que querem ser encontradas, passar confiança e vender mais pela internet.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#contato" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#18231f] px-7 py-4 font-bold text-white shadow-[0_15px_35px_-18px_#18231f] transition hover:-translate-y-1 hover:bg-[#34443b]">Quero tirar a ideia do papel <ArrowUpRight size={18} /></a><a href="#projetos" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d4ddd0] px-7 py-4 font-bold text-[#34443b] transition hover:bg-white">Ver projetos <Eye size={18} /></a></div>
              <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm font-bold text-[#7b8880]"><span className="flex items-center gap-2"><Check size={17} className="text-[#89a51f]" /> Atendimento próximo</span><span className="flex items-center gap-2"><Check size={17} className="text-[#89a51f]" /> Feito sob medida</span></div>
            </div>
            <div className="relative mx-auto w-full max-w-lg lg:mb-0">
              <div className="absolute -right-8 -top-12 h-48 w-48 rounded-full bg-[#d7ef65] blur-3xl opacity-50" />
              <div className="relative overflow-hidden rounded-[2rem] bg-[#dce8d1] p-3 shadow-[0_30px_70px_-35px_#5e725b]"><img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85" alt="Mesa com notebook e materiais de design" className="h-[420px] w-full rounded-[1.5rem] object-cover grayscale-[20%]" /><div className="absolute bottom-7 left-7 max-w-[220px] rounded-2xl bg-[#18231f] p-4 text-white shadow-xl"><span className="mb-2 block text-2xl text-[#d7ef65]">✳</span><strong className="block text-sm leading-5">Design que faz sentido para o seu momento.</strong></div></div>
              <div className="absolute -bottom-7 -right-5 grid h-24 w-24 rotate-6 place-items-center rounded-full bg-[#d7ef65] text-center text-[11px] font-extrabold uppercase leading-4 tracking-wider text-[#30401c] shadow-lg">feito<br />com<br />intenção</div>
            </div>
          </div>
        </section>

        <section id="servicos" className="bg-[#18231f] py-20 text-white lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#b4d737]">O que eu faço</p><h2 className="mt-4 max-w-md text-4xl font-extrabold leading-tight tracking-[-.05em] sm:text-5xl">Uma presença digital com a sua cara.</h2><p className="mt-5 max-w-sm leading-7 text-white/60">Sem pacotes engessados ou palavras difíceis. A ideia é entender seu negócio e construir algo que realmente ajude.</p></div><div className="divide-y divide-white/10">{services.map(({ icon: Icon, number, title, text }) => <article key={number} className="group flex gap-5 py-6 first:pt-0 last:pb-0 sm:gap-8"><span className="pt-1 text-sm font-bold text-[#91a92d]">{number}</span><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-[#d7ef65] transition group-hover:bg-[#d7ef65] group-hover:text-[#18231f]"><Icon size={22} /></span><div className="flex-1"><h3 className="text-xl font-extrabold">{title}</h3><p className="mt-2 max-w-md text-sm leading-6 text-white/55">{text}</p></div><ArrowUpRight className="mt-1 text-white/30 transition group-hover:text-[#d7ef65]" /></article>)}</div></div></div></section>

        <section id="processo" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#79911f]">Como funciona</p><h2 className="mt-4 max-w-md text-4xl font-extrabold leading-tight tracking-[-.05em] sm:text-5xl">Leve, claro e sem enrolação.</h2><p className="mt-5 max-w-md leading-7 text-[#68766f]">Você não precisa saber exatamente por onde começar. Eu conduzo o processo e deixo tudo simples.</p></div><div className="grid gap-4 sm:grid-cols-3">{[['01', 'A conversa', 'Entendo sua ideia, seu público e o que você precisa alcançar.'], ['02', 'A criação', 'Transformo tudo em uma estrutura bonita, clara e estratégica.'], ['03', 'O lançamento', 'Ajustamos juntos e colocamos seu site no ar para o mundo ver.']].map(([num, title, text]) => <article key={num} className="rounded-[1.5rem] border border-[#e0e5dc] bg-white/60 p-6"><span className="text-sm font-extrabold text-[#9db52e]">{num}</span><h3 className="mt-12 text-lg font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#728078]">{text}</p></article>)}</div></div></section>

        <section id="projetos" className="bg-[#e9eee5] py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#79911f]">Trabalhos selecionados</p><h2 className="mt-4 text-4xl font-extrabold tracking-[-.05em] sm:text-5xl">Sites que já saíram do papel.</h2></div><p className="max-w-xs text-sm leading-6 text-[#6c7b72]">Dois projetos que já criei para transformar ideias em experiências digitais reais.</p></div><div className="mt-12 grid gap-6 md:grid-cols-12">{projects.map((project) => <a href={project.href} target="_blank" rel="noreferrer" key={project.title} className={`${project.className} group block`}><div className="relative overflow-hidden rounded-[1.5rem] bg-[#cdd9c3]"><img src={project.image} alt={project.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-96" /><div className="absolute inset-0 bg-[#18231f]/30" /><div className="absolute bottom-5 left-5 text-white"><p className="text-xs font-bold uppercase tracking-wider text-[#d7ef65]">{project.type}</p><h3 className="mt-1 text-2xl font-extrabold">{project.title}</h3></div><span className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-[#18231f] opacity-0 transition group-hover:opacity-100"><ArrowUpRight size={19} /></span></div></a>)}</div></div></section>

        <section id="contato" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-12 rounded-[2rem] bg-[#d7ef65] p-7 sm:p-12 lg:grid-cols-[1fr_.8fr] lg:p-16"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#61741d]">Vamos criar juntos</p><h2 className="mt-4 max-w-lg text-4xl font-extrabold leading-[1.05] tracking-[-.06em] sm:text-6xl">Tem uma ideia? Me conta.</h2><p className="mt-6 max-w-md leading-7 text-[#4f601c]">Se você quer começar a aparecer na internet com mais profissionalismo, esse é um ótimo primeiro passo.</p><div className="mt-8 flex flex-wrap gap-4 text-sm font-bold text-[#405015]"><a href="mailto:oi@norte.studio" className="underline decoration-[#91a92d] underline-offset-4">oi@norte.studio</a><span className="text-[#91a92d]">•</span><span>Atendo de qualquer lugar</span></div></div><form onSubmit={handleSubmit} className="rounded-[1.5rem] bg-[#f6f5f0] p-5 shadow-sm sm:p-7"><label className="block text-xs font-extrabold uppercase tracking-wider text-[#65736b]">Seu nome<input required className="mt-2 w-full rounded-xl border border-[#dce3d6] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#91a92d]" placeholder="Como posso te chamar?" /></label><label className="mt-4 block text-xs font-extrabold uppercase tracking-wider text-[#65736b]">Me conte sobre o projeto<textarea required className="mt-2 min-h-28 w-full resize-none rounded-xl border border-[#dce3d6] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#91a92d]" placeholder="O que você gostaria de criar?" /></label><button className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#18231f] px-5 py-4 font-bold text-white transition hover:bg-[#34443b]">{sent ? 'Mensagem recebida ✓' : 'Enviar mensagem'} {!sent && <ArrowUpRight size={17} />}</button>{sent && <p className="mt-3 text-center text-xs font-semibold text-[#60731d]">Obrigado! Em breve entro em contato para saber mais.</p>}</form></div></section>
      </main>

      <footer className="border-t border-[#dfe5da] bg-[#f6f5f0]"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8"><a href="#inicio" className="text-lg font-extrabold tracking-[-.04em]">NORTE<span className="text-[#91a92d]">.</span></a><p className="text-xs text-[#7a867f]">Sites pensados para pequenos negócios. © {new Date().getFullYear()}</p><div className="flex gap-4 text-[#67756d]"><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a><a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="mailto:oi@norte.studio" aria-label="Enviar e-mail"><MessageCircle size={18} /></a></div></div></footer>
    </div>
  );
};

export default Index;
