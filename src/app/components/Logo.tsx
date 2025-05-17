import React from 'react';
import { Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <a href="#" className={cn("flex items-center gap-2 group", className)}>
      <Layers className="h-8 w-8 text-teal-500 transition-all duration-300 group-hover:text-primary" />
      <span className="font-bold text-xl tracking-tight group-hover:text-teal-500 transition-colors duration-300">Portfolio</span>
    </a>
  );
};

export default Logo;