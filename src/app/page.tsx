// src/app/page.tsx
"use client";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { FaMoon, FaSun, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../components/languageContext';

type Language = 'ptBR' | 'en';

// Definindo o tipo para as traduções
interface Translation {
  greeting: string;
  description: string;
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  footer: {
    copyright: string;
    github: string;
    linkedin: string;
  };
}

const translations: Record<Language, Translation> = {
  ptBR: {
    greeting: 'Olá, eu sou Guskov',
    description: 'Desenvolvedor Frontend | Criando experiências web incríveis',
    nav: {
      home: 'Início',
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
    },
    footer: {
      copyright: '© 2025 Seu Nome',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
  },
  en: {
    greeting: 'Hello, I am Guskov',
    description: 'Frontend Developer | Creating amazing web experiences',
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    footer: {
      copyright: '© 2025 Your Name',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
  },
};

export default function Home() {
  const { lang, setLang } = useLanguage();
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const langToggleRef = useRef<HTMLButtonElement>(null);
  const themeToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    gsap.from('.hero h1', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
    });

    // Animação do botão de tema
    const themeButton = themeToggleRef.current;
    if (themeButton) {
      themeButton.addEventListener('click', () => {
        const lever = themeButton.querySelector('.lever');
        const icon = themeButton.querySelector('svg');
        gsap.to([lever, icon], {
          x: isDarkTheme ? '28px' : '0px',
          duration: 0.9,
          ease: 'power2.out',
        });
      });
    }

    // Animação do botão de linguagem
    const langButton = langToggleRef.current;
    if (langButton) {
      const lever = langButton.querySelector('.lever');
      const icon = langButton.querySelector('svg');
      const leverX = lang === 'ptBR' ? '0px' : '28px';
      const iconX = lang === 'ptBR' ? '0px' : '0px';
      gsap.to(lever, { x: leverX, duration: 0.9, ease: 'power2.out' });
      gsap.to(icon, { x: iconX, duration: 0.9, ease: 'power2.out' });
    }
  }, [isDarkTheme, lang]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('light-theme', isDarkTheme);
  };

  const toggleLang = () => {
    setLang(lang === 'ptBR' ? 'en' : 'ptBR');
  };

  const leverColor = !isDarkTheme ? 'rgba(197, 197, 197, 0.7)' : 'rgba(58, 58, 58, 0.7)';

  return (
    <div className="glass" style={{ backgroundColor: 'transparent' }}>
      <div className="toggle-buttons">
        <button className="theme-toggle" ref={themeToggleRef} onClick={toggleTheme} style={{ position: 'relative', overflow: 'hidden', width: '60px', height: '30px', background: 'transparent' }}>
          <span className="lever" style={{ position: 'absolute', top: '2px', left: '2px', width: '26px', height: '26px', backgroundColor: leverColor, borderRadius: '50%', transform: 'translateX(0)', transition: 'transform 0.06s ease' }}>
            {isDarkTheme ? <FaMoon size={20} style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 2, color: 'var(--text-color)' }} /> : <FaSun size={20} style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 2, color: 'var(--text-color)' }} />}
          </span>
        </button>
        <button className="lang-toggle" ref={langToggleRef} onClick={toggleLang} style={{ position: 'relative', overflow: 'hidden', width: '60px', height: '30px', background: 'transparent' }}>
          <span className="lever" style={{ position: 'absolute', top: '2px', left: '2px', width: '26px', height: '26px', backgroundColor: leverColor, borderRadius: '50%', transform: 'translateX(0)', transition: 'transform 0.06s ease' }}>
            <FaGlobe size={20} style={{ position: 'absolute', left: '3px', top: '50%', transform: 'translate(0%, -50%)', zIndex: 2, color: 'var(--text-color)' }} />
          </span>
        </button>
      </div>
      <section className="hero" data-aos="fade-up">
        <h1>{translations[lang].greeting}</h1>
        <p data-aos="fade-up" data-aos-delay="100">
          {translations[lang].description}
        </p>
      </section>
    </div>
  );
}