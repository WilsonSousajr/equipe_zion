import React from 'react';
import { Zap } from 'lucide-react';

interface LogoProps {
  light?: boolean;
}

export function Logo({ light = false }: LogoProps) {
  return (
    <div className="flex items-center">
      <Zap className={`h-8 w-8 ${light ? 'text-orange-400' : 'text-orange-500'}`} />
      <div className="ml-2">
        <h1 className={`font-bold text-xl ${light ? 'text-white' : 'text-gray-800'}`}>EQUIPE</h1>
        <p className={`text-xs font-medium -mt-1 ${light ? 'text-orange-300' : 'text-orange-500'}`}>ZION</p>
      </div>
    </div>
  );
}