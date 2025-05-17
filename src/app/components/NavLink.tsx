import React from 'react';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ 
  href, 
  children, 
  active = false,
  className
}) => {
  return (
    <a 
      href={href} 
      className={cn(
        "relative px-4 py-2 rounded-md font-medium transition-all duration-300",
        "hover:bg-accent hover:text-accent-foreground",
        active 
          ? "text-teal-500 after:absolute after:bottom-0 after:left-1/4 after:h-0.5 after:w-1/2 after:bg-teal-500" 
          : "text-foreground",
        className
      )}
    >
      {children}
    </a>
  );
};

export default NavLink;