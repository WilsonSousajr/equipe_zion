import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionTitle({ 
  title, 
  subtitle, 
  center = false,
  light = false
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={`text-lg ${light ? 'text-gray-300' : 'text-gray-600'} max-w-3xl ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}