// src/components/header.tsx
"use client";

import Link from 'next/link';
import { useContext } from 'react';
import { LanguageContext } from './languageContext';

type Language = 'ptBR' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Header() {
  const { lang } = useContext(LanguageContext) as LanguageContextType;

  const translations = {
    ptBR: {
      home: 'Início',
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
    },
    en: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
  } as const;

  return (
    <header className="glass">
      <nav>
        <ul className="nav-links">
          <li><Link href="#home">{translations[lang].home}</Link></li>
          <li><Link href="#about">{translations[lang].about}</Link></li>
          <li><Link href="#projects">{translations[lang].projects}</Link></li>
          <li><Link href="#contact">{translations[lang].contact}</Link></li>
        </ul>
      </nav>
    </header>
  );
}