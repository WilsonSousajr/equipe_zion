import React, { useEffect } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Shield, Clock, MapPin, LifeBuoy, Car, Wrench } from 'lucide-react';
import { Button } from '../ui/Button';

export function Services() {
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

  const services = [
    {
      title: "Proteção Veicular",
      description: "Cobertura completa contra colisão, roubo, furto, incêndio e eventos da natureza, com as melhores condições do mercado.",
      icon: <Shield className="h-10 w-10 text-orange-500" />
    },
    {
      title: "Assistência 24h",
      description: "Atendimento disponível 24 horas por dia, 7 dias por semana, para socorrer você em qualquer situação de emergência.",
      icon: <Clock className="h-10 w-10 text-orange-500" />
    },
    {
      title: "Rastreamento",
      description: "Sistema de rastreamento de alta tecnologia para localização do seu veículo em tempo real, aumentando as chances de recuperação.",
      icon: <MapPin className="h-10 w-10 text-orange-500" />
    },
    {
      title: "Guincho Ilimitado",
      description: "Serviço de guincho sem limite de quilometragem, disponível para você em qualquer lugar do Brasil.",
      icon: <LifeBuoy className="h-10 w-10 text-orange-500" />
    },
    {
      title: "Carro Reserva",
      description: "Carro reserva disponível por até 30 dias em caso de sinistro, garantindo sua mobilidade enquanto seu veículo é reparado.",
      icon: <Car className="h-10 w-10 text-orange-500" />
    },
    {
      title: "Rede Credenciada",
      description: "Ampla rede de oficinas e prestadores de serviços credenciados em todo o Brasil, garantindo qualidade e agilidade nos reparos.",
      icon: <Wrench className="h-10 w-10 text-orange-500" />
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <SectionTitle 
          title="Nossos Serviços" 
          subtitle="Conheça nossas soluções completas para proteção veicular e assistência 24 horas."
          center 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card p-8 reveal flex flex-col" 
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-700 mb-6 flex-grow">{service.description}</p>
              <Button variant="outline" size="sm" className="mt-auto self-start">
                Saiba mais
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Proteja seu veículo com a melhor proteção do mercado
          </h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Entre em contato agora mesmo e descubra como podemos ajudar você a proteger seu patrimônio com segurança e tranquilidade.
          </p>
          <Button variant="primary" size="lg">
            Solicitar Cotação
          </Button>
        </div>
      </div>
    </section>
  );
}