import React, { useEffect } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '../ui/Button';

export function Contact() {
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

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <SectionTitle 
          title="Entre em Contato" 
          subtitle="Estamos sempre à disposição para atender você. Entre em contato para tirar dúvidas, solicitar uma cotação ou conhecer mais sobre nossos serviços."
          center 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="card p-8 reveal">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Mande-nos uma mensagem</h3>
            
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="(00) 00000-0000"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Digite sua mensagem aqui..."
                ></textarea>
              </div>
              
              <Button variant="primary" fullWidth>
                Enviar Mensagem
              </Button>
            </form>
          </div>
          
          {/* Contact info and map */}
          <div className="flex flex-col h-full reveal">
            <div className="bg-orange-500 text-white p-8 rounded-t-lg">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Endereço:</h4>
                    <p>Rua Exemplo, 123 - Centro</p>
                    <p>CEP: 00000-000</p>
                    <p>São Paulo - SP</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Telefone:</h4>
                    <p>0800 211 2121</p>
                    <p>(11) 99999-9999</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Email:</h4>
                    <p>contato@equipezion.com.br</p>
                    <p>suporte@equipezion.com.br</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Clock className="h-6 w-6 mr-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Horário de Atendimento:</h4>
                    <p>Segunda a Sexta: 08h às 18h</p>
                    <p>Sábado: 09h às 13h</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Map */}
            <div className="flex-grow rounded-b-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976767169655!2d-46.65390492378041!3d-23.56413486182576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1693492884312!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '300px' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Equipe Zion"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}