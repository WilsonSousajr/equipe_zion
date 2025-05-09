import React, { useState, useEffect } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function Faq() {
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

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Proteção Veicular é legalizada?",
      answer: "Sim, a proteção veicular é legalizada e regulamentada. Funciona no modelo de associação, onde os associados dividem os custos dos eventos entre si, resultando em valores mais acessíveis que seguros tradicionais."
    },
    {
      question: "Proteção é o mesmo que Seguro?",
      answer: "Não, proteção veicular é diferente de seguro tradicional. Enquanto as seguradoras são reguladas pela SUSEP e visam o lucro, as associações de proteção veicular são entidades sem fins lucrativos, regulamentadas pelo Código Civil, que dividem os custos entre os associados."
    },
    {
      question: "Uma seguradora negou meu perfil, serei negado na proteção?",
      answer: "Não necessariamente. A Equipe Zion possui critérios próprios de aceitação que são geralmente mais flexíveis que as seguradoras tradicionais. Aceitamos veículos de até 25 anos, com passagem por leilão e outras situações que seguradoras normalmente rejeitam."
    },
    {
      question: "Tenho direito à Assistência como necessária?",
      answer: "Sim, todos os associados têm direito à assistência 24h completa, incluindo guincho sem limite de quilometragem, chaveiro, troca de pneus, auxílio pane seca, entre outros serviços essenciais para sua tranquilidade."
    },
    {
      question: "Como posso acionar o plano de assistência?",
      answer: "Para acionar qualquer serviço de assistência, basta ligar para nossa central de atendimento 24h através do número 0800 211 2121. Nossa equipe irá coletar as informações necessárias e enviar o auxílio adequado para sua situação."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <SectionTitle 
          title="Dúvidas Frequentes" 
          subtitle="Encontre respostas para as perguntas mais comuns sobre nossos serviços e benefícios."
          center 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* FAQ Image */}
          <div className="lg:col-span-1 flex justify-center items-start">
            <div className="sticky top-32 reveal">
              <img 
                src="https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="FAQ" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border rounded-lg reveal ${openIndex === index ? 'border-orange-500 shadow-md' : 'border-gray-200'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <button
                    className="flex justify-between items-center w-full p-5 text-left"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-semibold text-lg">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-orange-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  
                  <div 
                    className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-orange-100 rounded-lg reveal">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ainda tem dúvidas?</h3>
              <p className="text-gray-700 mb-4">
                Se você não encontrou a resposta para sua pergunta, entre em contato conosco. Nossa equipe está pronta para ajudar você.
              </p>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-medium">0800 211 2121</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}