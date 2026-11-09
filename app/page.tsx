"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Code2, Github, Linkedin,
  Mail, Menu, MessageCircle, X, Braces, Database, Globe2, Layers3, Sparkles
} from "lucide-react";

const skills = {
  "Languages": ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "PHP", "Java", "C#"],
  "Frameworks & tools": ["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
  "Databases": ["MongoDB", "MySQL", "Firebase"]
};

const services = [
  { n: "01", title: "Websites & portfolios", text: "Distinctive, responsive websites that give people a clear reason to trust your brand." },
  { n: "02", title: "Web applications", text: "Useful, reliable web apps built around the real needs of your users and business." },
  { n: "03", title: "E-commerce", text: "Smooth online storefronts designed to make browsing and buying feel effortless." },
  { n: "04", title: "Dashboards & custom tools", text: "Purpose-built interfaces that turn complex workflows and information into clarity." }
];

const socials = [
  { label: "GitHub", href: "https://github.com/Hossanah01", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/hossieforge", icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com/hossieforgeofficial", icon: Globe2 },
  { label: "WhatsApp", href: "https://wa.me/2349162041260", icon: MessageCircle }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="HossieForge home">
          <span className="brand-mark">H<span>F</span></span>
          <span>HOSSIE<span className="accent">FORGE</span><small> DIGITAL CRAFTSMANSHIP</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {["About", "Capabilities", "Work", "Contact"].map((item) =>
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          )}
          <a className="nav-cta" href="mailto:akandehossanah1@gmail.com">Start a project <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <motion.div className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
            <span className="status-dot" /> INDEPENDENT DEVELOPER · NIGERIA
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .1 }}>
            I turn bold ideas<br />into <span className="gradient-text">digital reality.</span>
          </motion.h1>
          <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }}>
            I&apos;m <strong>Akande Hossanah Israel</strong> — full-stack developer and founder of HossieForge.
            I design, engineer and launch digital products built to work beautifully.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .45 }}>
            <a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-quiet" href="#contact">Let&apos;s talk <ArrowDownRight size={17} /></a>
          </motion.div>
          <div className="hero-foot"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></div>
        </div>
        <motion.div className="portrait-stage" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .2 }}>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="portrait-frame">
            <Image src="/profile.png" alt="Portrait of Akande Hossanah Israel" fill priority sizes="(max-width: 800px) 80vw, 420px" className="portrait" />
          </div>
          <div className="floating-tag tag-top"><Sparkles size={14} /> IDEAS → EXECUTION</div>
          <div className="floating-tag tag-bottom"><span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS</div>
          <div className="portrait-index">HF / 001</div>
        </motion.div>
        <div className="hero-watermark">HOSSIEFORGE</div>
      </section>

      <section className="ticker" aria-label="Services">
        <div className="ticker-track">{Array.from({ length: 2 }).map((_, i) =>
          <span key={i}>FULL-STACK DEVELOPMENT <b>✳</b> DIGITAL EXPERIENCES <b>✳</b> FRONTEND & BACKEND <b>✳</b> IDEAS FORGED INTO PRODUCTS <b>✳</b></span>
        )}</div>
      </section>

      <section className="content-section section-wrap" id="about">
        <div className="section-kicker">01 / THE BUILDER</div>
        <div className="about-grid">
          <h2>Good ideas deserve<br /><span className="muted">great execution.</span></h2>
          <div className="about-copy">
            <p className="lead">I fell in love with the idea that a blank screen could become something people use every day. That feeling still drives everything I build.</p>
            <p>At HossieForge, I take ideas from rough sketches and conversations to complete digital products — from the interface people see to the systems working behind it. I care about the details that make products last: speed, accessibility, responsiveness, thoughtful structure and dependable code.</p>
            <p>My approach is simple: <strong>listen first, build second.</strong> Understand the real problem, then shape a solution people enjoy using and businesses can grow with.</p>
            <a className="text-link" href="mailto:akandehossanah1@gmail.com">Have an idea? Let&apos;s shape it <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="content-section section-wrap" id="capabilities">
        <div className="section-kicker">02 / WHAT I BRING</div>
        <div className="section-heading">
          <h2>From first sketch<br />to <span className="gradient-text">final launch.</span></h2>
          <p>One connected process. Thoughtful design, solid engineering and a finish that feels right.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => <article className="service-card" key={service.n}>
            <span className="service-number">{service.n}</span><ArrowUpRight className="service-arrow" />
            <h3>{service.title}</h3><p>{service.text}</p>
          </article>)}
        </div>
      </section>

      <section className="content-section section-wrap skills-section">
        <div className="section-kicker">03 / THE TOOLKIT</div>
        <div className="section-heading">
          <h2>Tools for turning<br /><span className="muted">complexity into clarity.</span></h2>
          <p>A broad toolkit across frontend, backend and data. The right tool for the problem — never technology for its own sake.</p>
        </div>
        <div className="skills-grid">
          {Object.entries(skills).map(([group, items], index) => {
            const Icon = [Braces, Layers3, Database][index];
            return <div className="skill-card" key={group}><div className="skill-title"><Icon size={19} /><span>{group}</span></div><div className="skill-pills">{items.map((item) => <span key={item}>{item}</span>)}</div></div>;
          })}
        </div>
      </section>

      <section className="content-section section-wrap work-section" id="work">
        <div className="section-kicker">04 / SELECTED WORK</div>
        <div className="work-placeholder">
          <div className="work-icon"><Code2 size={27} /></div>
          <div><span className="tiny-label">PORTFOLIO IN PROGRESS</span><h2>The next build could<br /><span className="gradient-text">be yours.</span></h2><p>Project showcases will appear here as the portfolio grows. Check back soon for selected builds and case studies.</p></div>
          <a className="round-link" href="https://github.com/Hossanah01" target="_blank" rel="noreferrer" aria-label="Visit GitHub"><ArrowUpRight /></a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <div className="section-kicker">05 / MAKE SOMETHING MATTER</div>
          <h2>Have an idea?<br /><span className="gradient-text">Let&apos;s forge it.</span></h2>
          <p>Tell me what you&apos;re imagining. We can turn the rough idea into a real plan — and a product people love to use.</p>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:akandehossanah1@gmail.com">Start a conversation <Mail size={17} /></a>
            <a className="button button-outline" href="https://wa.me/2349162041260" target="_blank" rel="noreferrer">Chat on WhatsApp <MessageCircle size={17} /></a>
          </div>
          <div className="social-row">{socials.map(({ label, href, icon: Icon }) => <a href={href} key={label} target="_blank" rel="noreferrer"><Icon size={17} /> {label} <ArrowUpRight size={12} /></a>)}</div>
        </div>
      </section>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">H<span>F</span></span><span>HOSSIE<span className="accent">FORGE</span><small> DIGITAL CRAFTSMANSHIP</small></span></a>
        <span>© {new Date().getFullYear()} HossieForge · Built with intention.</span>
        <a href="mailto:akandehossanah1@gmail.com">LET&apos;S BUILD <ArrowUpRight size={13} /></a>
      </footer>
    </main>
  );
}
