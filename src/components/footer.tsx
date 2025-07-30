// src/components/footer.tsx
"use client";

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useContext } from 'react';
import { LanguageContext } from './languageContext';

type Language = 'ptBR' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Footer() {
  const { lang } = useContext(LanguageContext) as LanguageContextType;

  const translations = {
    ptBR: {
      copyright: '© 2025 Seu Nome',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    en: {
      copyright: '© 2025 Your Name',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
  } as const;

  return (
    <footer className="glass" style={{ textAlign: 'center', padding: '16px', color: 'var(--text-color)' }}>
      <p>{translations[lang].copyright}</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
        <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--link-color)' }}>
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--link-color)' }}>
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
}