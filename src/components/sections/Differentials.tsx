import React, { useEffect } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { CheckCircle } from 'lucide-react';

export function Differentials() {
  useEffect(() => {
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

  const benefits = [
    "Mensalidades até 60% mais baratas que seguros tradicionais",
    "Cobertura para veículos de até 25 anos",
    "Aceitamos veículos com restrições e passagens por leilão",
    "Assistência 24h em todo território nacional",
    "Guincho sem limite de quilometragem",
    "Indenização em até 30 dias em caso de roubo ou perda total",
    "Parcelamento do valor de participação em até 6x",
    "Descontos para bons motoristas",
  ];

  return (
    <section id="diferenciais" className="section-padding bg-orange-500 text-white">
      <div className="container mx-auto container-padding">
        <SectionTitle 
          title="Por que escolher a Equipe Zion?" 
          subtitle="Conheça nossos diferenciais e entenda por que somos a melhor opção em proteção veicular para você."
          center
          light
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Stats */}
          <div className="relative reveal">
            <div className="absolute -top-10 -left-10 bg-orange-400 rounded-full p-6 shadow-lg">
              <div className="text-center">
                <span className="block text-4xl font-bold">+30 mil</span>
                <span className="text-sm font-medium">ASSOCIADOS</span>
              </div>
            </div>
            
            <img 
              src="https://images.pexels.com/photos/256219/pexels-photo-256219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Brazil map coverage" 
              className="rounded-lg w-full"
            />
            
            <div className="absolute -bottom-8 -right-8 bg-orange-400 rounded-full p-6 shadow-lg">
              <div className="text-center">
                <span className="block text-4xl font-bold">5 anos</span>
                <span className="text-sm font-medium">DE EXPERIÊNCIA</span>
              </div>
            </div>
          </div>
          
          {/* Benefits */}
          <div className="reveal">
            <h3 className="text-2xl font-bold mb-6">
              Viva com mais tranquilidade
            </h3>
            <p className="mb-8">
              Na Equipe Zion, nosso compromisso é oferecer a melhor proteção para o seu veículo com vantagens exclusivas e benefícios que fazem toda a diferença:
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start reveal" style={{ transitionDelay: `${index * 50}ms` }}>
                  <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Service icons */}
        <div className="grid grid-cols-3 gap-6 mt-20">
          <div className="flex flex-col items-center text-center reveal">
            <div className="bg-white p-4 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="font-bold mb-2">Assistência 24h</h4>
            <p className="text-sm text-orange-100">Suporte completo 24h por dia, 7 dias por semana.</p>
          </div>
          
          <div className="flex flex-col items-center text-center reveal" style={{ transitionDelay: '100ms' }}>
            <div className="bg-white p-4 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="font-bold mb-2">Rastreamento</h4>
            <p className="text-sm text-orange-100">Acompanhe seu veículo em tempo real através do nosso app.</p>
          </div>
          
          <div className="flex flex-col items-center text-center reveal" style={{ transitionDelay: '200ms' }}>
            <div className="bg-white p-4 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h4 className="font-bold mb-2">Melhores Preços</h4>
            <p className="text-sm text-orange-100">Valores justos e competitivos para sua proteção veicular.</p>
          </div>
        </div>
      </div>
    </section>
  );
}