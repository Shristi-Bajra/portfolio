import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-4 mb-8 animate-fade-in">
      <a 
        href="https://github.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-white p-2 rounded-full hover:scale-110 transition-transform shadow-md"
      >
        <GithubIcon className="w-5 h-5 text-gray-800" />
      </a>
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-white p-2 rounded-full hover:scale-110 transition-transform shadow-md"
      >
        <LinkedinIcon className="w-5 h-5 text-blue-700" />
      </a>
      <a 
        href="mailto:shreestybajracharya@gmail.com" 
        className="bg-white p-2 rounded-full hover:scale-110 transition-transform shadow-md"
      >
        <MailIcon className="w-5 h-5 text-red-500" />
      </a>
    </div>
  );
};

export default SocialLinks;