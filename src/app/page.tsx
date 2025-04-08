"use client";

import { useState } from "react";
import { Inconsolata, Raleway } from "next/font/google";
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
              <img src="/logo.svg" alt="" className="w-8 h-auto" />
              <span className={`${inconsolata.className} font-bold text-base`}>
                GITVERSE
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
          <h1
            className={`${raleway.className} text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-[#B341FF] via-[#8B2CDB] to-[#B341FF] bg-clip-text text-transparent animate-gradient`}
            style={{
              backgroundSize: "200% 200%",
              animation: "gradientMove 5s ease infinite",
            }}
          >
            Welcome to Gitverse, Cadet!
          </h1>

          <p
            className={`${inconsolata.className} text-base sm:text-lg text-center leading-relaxed mb-10`}
          >
            <strong>The galaxy where Git becomes your superpower</strong>.
          </p>

          <section id="intro" className={`${inconsolata.className} mb-16`}>
            <p>
              If you're just starting your coding journey and you've heard
              people talk about "commits," "branches," and "pull requests" like
              they're magic spells—don’t worry. You're in the right place.
            </p>

            <p className="mt-4">
              Here in Gitverse, we’ll guide you through the world of Git and
              GitHub in a way that's fun, simple, and easy to understand. No
              boring lectures. Just real skills, cool visuals, and a bunch of
              "aha!" moments.
            </p>
            <p className="mt-4">
              Whether you're building your first project or teaming up with
              others, version control is your best friend. Let's make you a Git
              pro without frying your brain.
            </p>
          </section>
          <section
            id="welcome_table"
            className={`${inconsolata.className} text-base sm:text-lg text-center leading-relaxed mb-10`}
          >
            <h1 className="text-2xl font-bold mb-6 text-[#e6edf3]">
              🌌 Gitverse Modules — That's what you're going to learn:
            </h1>
            <table className="min-w-full table-auto border border-gray-700 text-[#e6edf3]">
              <thead className="bg-[#161b22]">
                <tr>
                  <th className="border border-gray-700 px-4 py-2 text-left">
                    Module
                  </th>
                  <th className="border border-gray-700 px-4 py-2 text-left">
                    Title
                  </th>
                  <th className="border border-gray-700 px-4 py-2 text-left">
                    What You'll Learn
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="bg-[#0d1117]">
                  <td className="border border-gray-700 px-4 py-2">0</td>
                  <td className="border border-gray-700 px-4 py-2">
                    Welcome to Gitverse
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    What is Git? What is GitHub? Why it matters.
                  </td>
                </tr>
                <tr className="bg-[#161b22]">
                  <td className="border border-gray-700 px-4 py-2">1</td>
                  <td className="border border-gray-700 px-4 py-2">
                    First Contact: Installing Git
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    Set up Git and configure your mission settings.
                  </td>
                </tr>
                <tr className="bg-[#0d1117]">
                  <td className="border border-gray-700 px-4 py-2">2</td>
                  <td className="border border-gray-700 px-4 py-2">
                    Mission Init: Your First Repository
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    Start a local project and make your first commits.
                  </td>
                </tr>
                <tr className="bg-[#161b22]">
                  <td className="border border-gray-700 px-4 py-2">3</td>
                  <td className="border border-gray-700 px-4 py-2">
                    Warp Drive: Going Remote
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    Connect your project to GitHub and push like a pro.
                  </td>
                </tr>
                <tr className="bg-[#0d1117]">
                  <td className="border border-gray-700 px-4 py-2">4</td>
                  <td className="border border-gray-700 px-4 py-2">
                    Time Travel: Understanding History
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    View, navigate, and manage your commit history.
                  </td>
                </tr>
                <tr className="bg-[#161b22]">
                  <td className="border border-gray-700 px-4 py-2">5</td>
                  <td className="border border-gray-700 px-4 py-2">
                    Parallel Universes: Branching 101
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    Create new branches and explore safely.
                  </td>
                </tr>
                <tr className="bg-[#0d1117]">
                  <td className="border border-gray-700 px-4 py-2">6</td>
                  <td className="border border-gray-700 px-4 py-2">
                    The Merge Saga: Solving Conflicts
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    Learn how to merge and deal with conflicts.
                  </td>
                </tr>
                <tr className="bg-[#161b22]">
                  <td className="border border-gray-700 px-4 py-2">7</td>
                  <td className="border border-gray-700 px-4 py-2">
                    The GitHub Flow: Collaboration
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    Work with others using forks and pull requests.
                  </td>
                </tr>
                <tr className="bg-[#0d1117]">
                  <td className="border border-gray-700 px-4 py-2">8</td>
                  <td className="border border-gray-700 px-4 py-2">
                    Oops Protocol: Fixing Mistakes
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    Undo changes and recover from mistakes.
                  </td>
                </tr>
                <tr className="bg-[#161b22]">
                  <td className="border border-gray-700 px-4 py-2">9</td>
                  <td className="border border-gray-700 px-4 py-2">
                    Your Git Mission Report
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    Put your skills to the test in a final hands-on mission.
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="welcome" className={`${inconsolata.className}`}>
            <h1 className="text-2xl font-bold mb-6 text-[#e6edf3] text-center leading-relaxed ">
              What is Git? What is Github?
            </h1>
            <p>
              <strong>Git</strong> is your personal space-time navigator 🌌. It
              tracks every cosmic change in your codebase and lets you warp back
              in time (to when your code wasn’t exploding 😂), launch alternate
              branches of reality (aka <em>branches</em>), and collaborate with
              your crew — without breaking the mothership.
              <br />
              <br />
              Think of Git as a mission log for your starship — recording{" "}
              <strong>what</strong> you did, <strong>when</strong> you did it,
              and <strong>why</strong> — all without duplicating folders like{" "}
              <code>
                <strong>project-final-final-v2-REAL-FINAL.zip</strong>
              </code>
              . In the Gitverse, history is always at your fingertips 🚀🪐.
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
