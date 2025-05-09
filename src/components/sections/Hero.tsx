import React, { useEffect } from 'react';
import { Button } from '../ui/Button';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  useEffect(() => {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.classList.add('active');
    }
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-black">
        <img 
          src="https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Equipe Zion hero background" 
          className="object-cover w-full h-full opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto container-padding relative z-10">
        <div className="hero-section max-w-3xl transition-all duration-1000 transform translate-y-10 opacity-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Associe-se e <br />
            <span className="text-orange-400">Proteja</span> seu veículo
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
            A Equipe Zion oferece soluções completas para proteção veicular, com os melhores benefícios e o melhor custo-benefício do mercado.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg">
              Solicitar Cotação <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50">
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#sobre" className="text-white opacity-80 hover:opacity-100 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
}