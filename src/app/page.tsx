"use client";

import { useState } from "react";
import { Inconsolata, Raleway, Raleway } from "next/font/google";
import { Moon, Sun, Github } from "lucide-react";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="relative flex min-h-screen flex-col bg-[#0d1117] text-[#e6edf3]">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-700 bg-[#0d1117]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center space-x-2">
              <img src="/gitverse.png" alt="GitVerse" className="w-10 h-10" />
              <span className={`${inconsolata.className} font-bold text-base`}>
                GitVerse
              </span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme}>
              {isDark ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Layout */}
      <div className="relative flex justify-center px-4 sm:px-6 lg:px-8 py-20 mr-50">
        {/* Main content */}
        <main className={` max-w-3xl w-full`}>
          <h1 className={`${raleway.className} text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-center`}>
            Welcome to Gitverse, Cadet!
            <br />
          </h1>

          <p className={`${inconsolata.className} text-base sm:text-lg text-center leading-relaxed mb-10`}>
          The galaxy where Git becomes your <strong>superpower</strong>.
          </p>

          <section id="intro" className="mb-16">
            <p className="mt-8">
            If you're just starting your coding journey and you've heard people talk about "commits," "branches," and "pull requests" like they're magic spells—don’t worry. You're in the right place.
            </p>

            <p className="mt-8" >
            Here in Gitverse, we’ll guide you through the world of Git and GitHub in a way that's fun, simple, and easy to understand.
            </p>
            <p className="mb-8">
              No boring lectures. Just real skills, cool visuals, and a bunch of "aha!" moments.
            </p>

            <p className="mb-8">
            Whether you're building your first project or teaming up with others, version control is your best friend. Let's make you a Git pro without frying your brain.
            </p>
          </section>
        </main>

        {/* Sidebar */}
        <aside
          className={`${inconsolata.className} hidden lg:block fixed right-10 top-24 w-64 p-4 bg-[#0d1117]`}
        >
          <h2 className="text-muted font-semibold mb-4">TABLE OF CONTENTS</h2>
          <ul className="space-y-2 text-sm">
            <li className="">
              <a href="#intro" className=" dark:text-gray-400">
                Introduction
              </a>
            </li>
            <li>
              <a href="#setup" className="hover:underline">
                Setting Up Git
              </a>
            </li>
            <li>
              <a href="#workflow" className="hover:underline">
                Basic Workflow
              </a>
            </li>
            <li>
              <a href="#branches" className="hover:underline">
                Branching
              </a>
            </li>
            <li>
              <a href="#collab" className="hover:underline">
                Collaboration
              </a>
            </li>
            <li>
              <a href="#badges" className="hover:underline">
                🏆 Badges & Achievements
              </a>
            </li>

            <li>
              <a href="#badges" className="hover:underline">
              🤝 Show Support
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
