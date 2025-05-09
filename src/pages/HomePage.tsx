import React, { useEffect } from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Services } from '../components/sections/Services';
import { Differentials } from '../components/sections/Differentials';
import { Partners } from '../components/sections/Partners';
import { Contact } from '../components/sections/Contact';
import { Faq } from '../components/sections/Faq';

export function HomePage() {
  useEffect(() => {
    // Update page title
    document.title = 'Equipe Zion - Proteção Veicular';
    
    // Scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      document.querySelectorAll('.reveal').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Partners />
      <Faq />
      <Contact />
    </>
  );
}