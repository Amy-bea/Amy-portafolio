"use client";

import {
  ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, BriefcaseBusiness,
  Code2, Database, Github, GraduationCap, Heart, Laptop, Linkedin,
  Mail, Menu, Monitor, Rocket, Send, Sparkles, UserRound, X, Zap
} from "lucide-react";
import { FormEvent, useState } from "react";


const projects = [
  {
    name: "Regresión lineal",
    category: "Análisis de datos",
    description: "Actividad para explorar la relación entre datos y comprender cómo funciona la regresión lineal para realizar predicciones.",
    tags: ["Python", "Regresión lineal"],
    image: "/images/regresion lineal.png",
    
  },
  {
    name: "Laberinto y árboles de decisión",
    category: "Algoritmos · Toma de decisiones",
    description: "Actividad enfocada en la resolución de un laberinto y el aprendizaje de los árboles de decisión.",
    tags: ["Algoritmos", "Árboles de decisión"],
    icon: "🧩",
    image: "/images/laberinto.png",
  },
  {
    name: "Hotspots Comerciales",
    category: "Análisis · Datos",
    description: "Proyecto académico orientado al análisis de ubicaciones comerciales para identificar zonas y oportunidades de interés.",
    tags: ["Análisis de datos", "Visualización"],
    icon: "📍",
    image: "/images/hotspots.png.jpeg",
   
  },
  {
    name: "Para estudiantes",
    category: "Proyecto académico",
    description: "Proyecto académico desarrollado como parte de mi aprendizaje.",
    tags: ["Proyecto académico"],
    icon: "🎓",
    image: "/images/estudiantes.png",
   
  },
];


const skills = [
  { name: "Python", level: "En aprendizaje", icon: "🐍" },
  { name: "HTML & CSS", level: "Conocimientos académicos", icon: "🌐" },
  { name: "JavaScript", level: "En aprendizaje", icon: "✨" },
  { name: "Excel", level: "Conocimientos académicos", icon: "📊" },
  { name: "Power BI", level: "Conocimientos académicos", icon: "📈" },
  { name: "Machine Learning", level: "Fundamentos", icon: "🤖" },
  { name: "Git & GitHub", level: "En aprendizaje", icon: "⌘" },
  { name: "Inglés", level: "Intermedio", icon: "💬" },
];

const navItems = [
  ["Inicio", "#inicio"],
  ["Sobre mí", "#sobre-mi"],
  ["Experiencia", "#experiencia"],
  ["Proyectos", "#proyectos"],
  ["Habilidades", "#habilidades"],
  ["Educación", "#educacion"],
  ["Contacto", "#contacto"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus("Enviando...");
    const form = event.currentTarget;
    const data = new FormData(form);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "No se pudo enviar el mensaje.");
      setFormStatus("¡Gracias! Tu mensaje fue validado correctamente.");
      form.reset();
    } catch (error) {
      setFormStatus(error instanceof Error ? error.message : "Ocurrió un error.");
    }
  }

  return (
    <main className="overflow-hidden">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#090914]/85 backdrop-blur-xl">
        <div className="container flex h-[72px] items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 font-bold">
            <span className="gradient-text text-3xl font-black tracking-tighter">AM.</span>
            <span className="hidden sm:inline">Amy Beatriz Mendoza</span>
          </a>
          <nav className="hidden items-center gap-5 lg:flex">
            {navItems.map(([label, href]) => (
              <a className="nav-link text-sm" href={href} key={href}>{label}</a>
            ))}
          </nav>
          <button className="rounded-xl border border-white/15 p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="container grid gap-1 pb-4 lg:hidden">
            {navItems.map(([label, href]) => (
              <a className="rounded-lg px-3 py-2 text-sm text-violet-100 hover:bg-white/5" href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </nav>
        )}
      </header>

      <section id="inicio" className="relative flex min-h-[720px] items-center pt-24">
        <div className="orb left-[-120px] top-40 h-80 w-80 bg-violet-700" />
        <div className="orb right-[-80px] top-32 h-96 w-96 bg-fuchsia-600" />
        <div className="container relative grid items-center gap-12 py-20 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/5 px-4 py-2 text-sm text-violet-200">
              <Sparkles size={15} /> Bienvenido/a a mi espacio creativo
            </div>
            <p className="mb-2 text-2xl italic text-violet-300">Hola, soy</p>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.04] tracking-tight sm:text-7xl">
              Amy <span className="gradient-text">Beatriz</span><br />Mendoza.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-violet-100/80">
              Estudiante y apasionada por aprender, crear y descubrir nuevas formas de resolver problemas con tecnología.
            </p>
            <p className="mt-3 text-sm text-violet-300">Aprendo · Creo · Construyo <Heart className="ml-1 inline" size={14} fill="currentColor" /></p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="primary-button" href="#proyectos"><Rocket size={17} /> Ver mis proyectos <ArrowRight size={16} /></a>
              <a className="secondary-button" href="#sobre-mi">Conóceme <ArrowDown size={16} /></a>
            </div>
                       <div className="mt-8 flex gap-4 text-violet-200">
              <a aria-label="GitHub" href="https://github.com/Amy-bea" target="_blank" rel="noreferrer">
                <Github />
              </a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/amy-beatriz-mendoza-salazar-36073544b/" target="_blank" rel="noreferrer">
                <Linkedin />
              </a>
              <a aria-label="Correo" href="mailto:mendozasalazaramybeatriz@gmail.com">
                <Mail />
              </a>
            </div>
          </div>
          
          <div className="relative mx-auto w-full max-w-[390px]">
            <div className="absolute inset-5 rounded-[45%] bg-gradient-to-br from-violet-600/40 to-fuchsia-500/20 blur-3xl" />
            <div className="panel glow relative flex aspect-[4/5] items-center justify-center overflow-hidden border-violet-300/25">
              <div className="absolute inset-5 rounded-[45%] border border-violet-300/20" />
              <div className="absolute inset-10 rounded-[45%] border border-fuchsia-300/20" />
              <div className="relative px-8 text-center">
 <div className="mx-auto mb-5 h-40 w-40 overflow-hidden rounded-full border-2 border-violet-300/50 shadow-lg shadow-violet-500/20">
  <img
    src="/images/Retrato profesional con diadema perlada.png"
    alt="Fotografía de Amy"
    className="h-full w-full object-cover"
  />
</div>
 <p className="text-sm uppercase tracking-[.25em] text-violet-300">Mi mundo</p>
                <p className="mt-3 text-2xl font-bold">Ideas que se<br /><span className="gradient-text">convierten en proyectos.</span></p>
                <p className="mt-4 text-sm text-violet-100/60">Aquí comienza mi historia.</p>
              </div>
              <Sparkles className="absolute right-9 top-10 text-fuchsia-300" />
              <Zap className="absolute bottom-10 left-9 text-violet-300" />
            </div>
            <div className="panel absolute -bottom-5 -left-8 flex items-center gap-3 px-4 py-3">
              <span className="rounded-xl bg-violet-400/15 p-2 text-violet-200"><BrainCircuit /></span>
              <span><b className="block text-sm">Siempre aprendiendo</b><small className="text-violet-200/60">Un proyecto a la vez</small></span>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="section border-t border-white/5">
        <div className="container grid gap-10 md:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="section-kicker">01 · Un poco sobre mí</p>
            <h2 className="section-title mt-3 font-bold">Detrás de cada idea, <span className="gradient-text">hay una historia.</span></h2>
          </div>
          <div className="panel p-7 sm:p-9">
            <p className="text-lg leading-8 text-violet-50/85">
              Soy Amy, una estudiante curiosa, creativa y con muchas ganas de superarme. Me interesa la tecnología, aprender idiomas y descubrir nuevas oportunidades que me ayuden a crecer.
            </p>
            <p className="mt-5 leading-7 text-violet-100/60">
              Disfruto trabajar en proyectos que me permiten aprender algo nuevo, desarrollar mis habilidades y convertir ideas en soluciones. Mi meta es seguir preparándome y construir un futuro del que me sienta orgullosa.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                ["Curiosidad", "Siempre quiero aprender"],
                ["Creatividad", "Me gusta proponer ideas"],
                ["Constancia", "Sigo trabajando por mis metas"],
              ].map(([title, desc]) => <div key={title} className="rounded-xl bg-white/[.04] p-4"><b className="text-violet-200">{title}</b><p className="mt-2 text-sm text-violet-100/55">{desc}</p></div>)}
            </div>
          </div>
        </div>
      </section>


<section id="experiencia" className="section">
  <div className="container">
    <div className="mb-12 text-center">
      <p className="section-kicker">Mi recorrido</p>
      <h2 className="section-title">Experiencias y participación</h2>
      <p className="muted mt-4">
        Experiencias en las que he desarrollado mi creatividad,
        trabajado en equipo y aplicado mis conocimientos.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">

      <div className="panel overflow-hidden p-5">
        <img src="/images/hackaton.jpg.jpg" alt="Hackathon"
          className="mb-5 h-44 w-full rounded-2xl object-cover object-[center_10%]" />
        <h3 className="mb-2 text-xl font-bold">Hackathon</h3>
        <p className="muted leading-relaxed">
          Participación en una experiencia de innovación,
          trabajo en equipo y desarrollo de ideas para
          proponer soluciones a diferentes desafíos.
        </p>
      </div>

      <div className="panel overflow-hidden p-5">
        <img src="/images/expotech.jpg.jpg" alt="ExpoTech"
          className="mb-5 h-44 w-full rounded-2xl object-cover" />
        <h3 className="mb-2 text-xl font-bold">ExpoTech</h3>
        <p className="muted leading-relaxed">
          Participación en ExpoTech con SAFEN, una propuesta
          tecnológica para conectar comunidades afectadas
          por desastres naturales con personas dispuestas a ayudar.
        </p>
      </div>

      <div className="panel overflow-hidden p-5">
        <img src="/images/safen.jpg.png" alt="Proyecto SAFEN"
          className="mb-5 h-44 w-full rounded-2xl object-cover" />
        <h3 className="mb-2 text-xl font-bold">SAFEN</h3>
        <p className="muted leading-relaxed">
          Desarrollo de una plataforma web enfocada en la
          atención de emergencias, con reportes, mapas de
          zonas afectadas, albergues y apoyo comunitario.
        </p>
        <a
  href="https://TU-LINK-DE-SAFEN"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-flex items-center gap-2 text-pink-500 font-semibold hover:text-pink-600 transition"
>
  Visitar página de SAFEN →
</a>
      </div>

      <div className="panel overflow-hidden p-5">
        <img src="/images/expodelogros.jpg.jpg" alt="Proyecto HYDRA"
      className="mb-5 h-44 w-full rounded-2xl object-cover object-[center_25%]"  />
        <h3 className="mb-2 text-xl font-bold">HYDRA</h3>
        <p className="muted leading-relaxed">
          Desarrollo de una propuesta de aplicación para
          apoyar la recaudación de fondos, utilizando la
          tecnología como herramienta para generar un impacto social.
        </p>
      </div>

    </div>
  </div>
</section>


      <section id="proyectos" className="section">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div><p className="section-kicker">03 · Lo que he creado</p><h2 className="section-title mt-3 font-bold">Mis <span className="gradient-text">proyectos.</span></h2></div>
            <p className="max-w-md text-sm leading-6 text-violet-100/55">Una selección de proyectos y actividades académicas. Pronto agregaremos imágenes, evidencias y enlaces a sus repositorios.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.name} className="panel project-card overflow-hidden">
                <div className="flex h-44 items-center justify-center bg-gradient-to-br from-violet-600/25 via-indigo-500/10 to-fuchsia-500/20 text-6xl">
                  <span>{project.icon}</span>
                  <span className="sr-only">Proyecto {index + 1}</span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-violet-300">{project.category}</p>
                  <h3 className="mt-2 text-xl font-bold">{project.name}</h3>
                  <p className="mt-3 min-h-[76px] text-sm leading-6 text-violet-100/60">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full border border-violet-300/15 bg-violet-300/10 px-3 py-1 text-xs text-violet-200">{tag}</span>)}</div>
                  <p className="mt-5 flex items-center gap-2 text-xs text-violet-300/65"><ArrowUpRight size={14} /> Evidencias y repositorio próximamente</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="habilidades" className="section bg-white/[.018]">
        <div className="container">
          <p className="section-kicker">04 · Lo que voy aprendiendo</p>
          <h2 className="section-title mt-3 font-bold">Mis <span className="gradient-text">habilidades.</span></h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map(skill => <div className="panel flex items-center gap-4 p-5" key={skill.name}><span className="text-3xl">{skill.icon}</span><div><h3 className="font-semibold">{skill.name}</h3><p className="mt-1 text-xs text-violet-200/50">{skill.level}</p></div></div>)}
          </div>
          <p className="mt-5 text-xs text-violet-100/40">Los niveles son orientativos y los ajustaremos a tu experiencia real.</p>
        </div>
      </section>

      <section id="educacion" className="section">
        <div className="container">
          <p className="section-kicker">05 · Mi formación</p>
          <h2 className="section-title mt-3 font-bold">Educación y <span className="gradient-text">crecimiento.</span></h2>
          <div className="panel mt-9 grid gap-6 p-7 md:grid-cols-[auto_1fr] md:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-400/15 text-violet-200"><GraduationCap size={28} /></div>
            <div><p className="text-sm text-violet-300">Estudios actuales</p><h3 className="mt-2 text-xl font-bold">Bachillerato General</h3><p className="mt-1 text-violet-100/60">Centro Escolar General Francisco Morazán</p><div className="my-6 h-px bg-white/10" /><p className="text-sm text-violet-300">Formación complementaria</p><h3 className="mt-2 text-xl font-bold">Programa ¡Supérate!</h3><p className="mt-1 text-violet-100/60">Fundación Frech · Inglés, informática y valores</p></div>
          </div>
        </div>
      </section>

      <section id="contacto" className="section border-t border-white/5 bg-[#0d0b1b]">
        <div className="container grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="section-kicker">06 · Hablemos</p>
            <h2 className="section-title mt-3 font-bold">¿Tienes una idea? <span className="gradient-text">Conectemos.</span></h2>
            <p className="mt-5 max-w-sm leading-7 text-violet-100/60">Estoy abierta a aprender, compartir ideas y conocer nuevas oportunidades.</p>
            <a href="mailto:mendozasalazaramybeatriz@gmail.com" className="mt-7 inline-flex items-center gap-3 text-violet-200">
  <Mail size={19} /> mendozasalazaramybeatriz@gmail.com
</a>
          </div>
          <form onSubmit={handleSubmit} className="panel grid gap-4 p-6 sm:p-8">
            <label className="grid gap-2 text-sm text-violet-100/75">Nombre completo<input required name="name" minLength={2} maxLength={80} placeholder="Tu nombre" className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-violet-400" /></label>
            <label className="grid gap-2 text-sm text-violet-100/75">Correo electrónico<input required name="email" type="email" maxLength={254} placeholder="correo@ejemplo.com" className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-violet-400" /></label>
            <label className="grid gap-2 text-sm text-violet-100/75">Mensaje<textarea required name="message" minLength={10} maxLength={2000} rows={5} placeholder="Escribe tu mensaje..." className="resize-y rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-violet-400" /></label>
            <button className="primary-button w-fit" type="submit"><Send size={16} /> Enviar mensaje</button>
            {formStatus && <p role="status" className="text-sm text-violet-200">{formStatus}</p>}
            <p className="text-xs text-violet-100/40">Formulario de demostración: valida y recibe la solicitud en la API, pero todavía no envía correos.</p>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 py-7">
        <div className="container flex flex-col items-center justify-between gap-3 text-center text-sm text-violet-100/45 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Amy Beatriz Mendoza. Hecho con dedicación.</p>
          <p className="flex items-center gap-2">Aprender, crear y crecer <Heart size={14} className="text-fuchsia-300" /></p>
        </div>
      </footer>
    </main>
  );
}
