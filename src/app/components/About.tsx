"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Download } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 z-0 py-6"
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Profile Image */}
            <div className="flex flex-col items-center md:items-start">
              <div className="relative mb-6">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-teal-500 shadow-lg">
                  <div className="bg-gradient-to-br from-teal-500 to-teal-700 w-full h-full flex items-center justify-center">
                    {/* <User className="h-32 w-32 text-white/80" /> */}
                    <img
                      src="/profile.jpg"
                      alt="Shristi Bajracharya"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 right-0 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md">
                  {/* <div className="bg-teal-500 rounded-full p-2">
                    <span className="font-bold text-white text-sm">
                      
                    </span>
                  </div> */}
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 mt-6">
                <a
                  href="/cv/Shristi-Bajracharya-Cv.pdf"
                  download="Shristi-Bajracharya-CV.pdf"
                >
                  <Button className="bg-teal-500 hover:bg-teal-600">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </a>
                <Button
                  variant="outline"
                  className="border-teal-500 text-teal-500 hover:bg-teal-50 dark:hover:bg-gray-800"
                >
                  Contact Me <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* About Content */}
            <div>
              <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
                About Me
              </h2>
              <div className="h-1 w-20 bg-teal-500 mb-6"></div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I&apos;m a passionate web developer with expertise in creating
                beautiful, functional, and responsive websites. With a strong
                foundation in modern frontend technologies, I develop
                exceptional user experiences that help businesses grow.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                My journey in web development started 8 years ago, and since
                then, I&apos;ve worked on numerous projects that have strengthened my
                skills in React, TypeScript, and modern CSS frameworks like
                Tailwind.
              </p>

              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <Card className="border-l-4 border-l-teal-500">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Education
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Bachelor of Science in Computer Science and Information
                      Technology
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-teal-500">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Location
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Kathmandu, Nepal
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-teal-500">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Email
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      shreestybajracharya@gmail.com
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-teal-500">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Freelance
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Available for hire
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
