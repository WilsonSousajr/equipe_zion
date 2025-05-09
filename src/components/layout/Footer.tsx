import React from 'react';
import { Logo } from '../ui/Logo';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Logo light />
            </div>
            <p className="text-gray-400 mb-6">
              A Equipe Zion oferece soluções completas para proteção e segurança, com compromisso de excelência e atendimento de qualidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-orange-500 transition-colors">Sobre nós</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-orange-500 transition-colors">Serviços</a></li>
              <li><a href="#diferenciais" className="text-gray-400 hover:text-orange-500 transition-colors">Diferenciais</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-orange-500 transition-colors">Contato</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Proteção Veicular</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Assistência 24h</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Rastreamento</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Serviços Especiais</a></li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Rua Exemplo, 123 - Centro</li>
              <li>CEP: 00000-000</li>
              <li>São Paulo - SP</li>
              <li className="pt-2"><strong>Tel:</strong> 0800 211 2121</li>
              <li><strong>Email:</strong> contato@equipezion.com.br</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Equipe Zion. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com ❤️</p>
        </div>
      </div>
    </footer>
  );
}