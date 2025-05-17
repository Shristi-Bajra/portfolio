import React from "react";
import SocialLinks from "./SocialLinks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-10 px-4">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-40 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors">
          Welcome to my Portfolio
        </Badge>

        {/* <ProfileImage /> */}

        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Hi, I&apos;m Shristi Bajracharya
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
          A passionate{" "}
          <span className="font-medium text-blue-600">
            Full-Stack Developer
          </span>{" "}
          crafting beautiful web experiences
        </p>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg border border-gray-100">
          <p className="text-gray-600">
            <Typewriter
              words={[
                "I specialize in building modern web applications with React, Next.js, and Node.js.",
                "Let's build something amazing together.",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1500}
            />
          </p>
        </div>

        <SocialLinks />

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-blue-500/20"
            >
              View Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>

          <a href="#contact">
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all shadow-md"
            >
              Contact Me
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
