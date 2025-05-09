import React, { useEffect } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Shield, Target, Users } from 'lucide-react';

export function About() {
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

  const values = [
    {
      title: "Missão",
      description: "Proporcionar segurança e tranquilidade para nossos associados através de soluções de proteção veicular de qualidade e atendimento humanizado.",
      icon: <Shield className="h-10 w-10 text-orange-500" />
    },
    {
      title: "Visão",
      description: "Ser referência nacional em proteção veicular, reconhecida pela excelência nos serviços, inovação constante e compromisso com a satisfação dos associados.",
      icon: <Target className="h-10 w-10 text-orange-500" />
    },
    {
      title: "Valores",
      description: "Ética, transparência, responsabilidade, inovação, excelência no atendimento e valorização das pessoas estão no centro de tudo o que fazemos.",
      icon: <Users className="h-10 w-10 text-orange-500" />
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <SectionTitle 
          title="Sobre a Equipe Zion" 
          subtitle="Conheça nossa história, valores e o que nos motiva a oferecer o melhor em proteção veicular."
          center 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="reveal">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Equipe Zion team" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          {/* Content */}
          <div className="reveal">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa História</h3>
            <p className="text-gray-700 mb-6">
              Fundada em 2018, a Equipe Zion nasceu com a missão de transformar o mercado de proteção veicular, 
              oferecendo soluções acessíveis, transparentes e focadas nas reais necessidades das pessoas.
            </p>
            <p className="text-gray-700 mb-6">
              Ao longo dos anos, conquistamos a confiança de milhares de associados em todo o Brasil, 
              graças ao nosso compromisso com a qualidade, atendimento humanizado e cobertura completa.
            </p>
            <p className="text-gray-700">
              Hoje, contamos com uma ampla rede de assistência 24h, equipe de profissionais especializados
              e tecnologia de ponta para garantir a segurança e tranquilidade dos nossos associados.
            </p>
          </div>
        </div>
        
        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {values.map((value, index) => (
            <div key={index} className="card p-8 reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}