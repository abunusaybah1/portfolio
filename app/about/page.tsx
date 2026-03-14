import { experiences, personalInfo } from "../../lib/data";
import type { Metadata } from "next";
// import Timeline from "./Timeline";

export const metadata: Metadata = {
  title: "About - Ismail Abdulmatiin's Portfolio",
  description:
    "Learn more about my background, experience, and journey as a frontend developer.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-5xl sm:text-6xl font-bold gradient-text mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey, passion, and the experiences that shaped me as a
            developer
          </p>
        </div>

        {/* Personal Info Section */}
        <div className="bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-2xl p-8 lg:p-12 mb-12 animate-fade-in border border-gray-100 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            <div className="shrink-0">
              <div className="w-32 h-32 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                {personalInfo.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {personalInfo.name}
              </h2>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
                {personalInfo.role}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {personalInfo.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        {/* Found in *<Timeline />}*/}

        {/* Additional Info Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-6 text-center animate-fade-in border border-blue-200 dark:border-blue-800">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              ~1
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Years Experience
            </div>
          </div>
          <div
            className="bg-linear-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl p-6 text-center animate-fade-in border border-purple-200 dark:border-purple-800"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              3+
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Projects Completed
            </div>
          </div>
          <div
            className="bg-linear-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-6 text-center animate-fade-in border border-green-200 dark:border-green-800"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              24/7
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Learning Mindset
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
