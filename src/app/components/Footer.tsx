import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-t border-indigo-100 text-gray-700 py-8">
      <div className="container mx-auto px-4 text-center space-y-4">
        <p className="text-lg font-semibold">
          © {new Date().getFullYear()} Shristi Bajracharya. All rights reserved.
        </p>
        <SocialLinks />
        <p className="text-sm text-gray-500">
          Designed & built with 💙 using React & Next.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;
