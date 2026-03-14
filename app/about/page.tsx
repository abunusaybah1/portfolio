import { experiences, personalInfo } from "../../lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - John Doe Portfolio",
  description:
    "Learn more about my background, experience, and journey as a frontend developer.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 relative overflow-hidden">
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
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-2xl p-8 lg:p-12 mb-12 animate-fade-in border border-gray-100 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
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

        {/* Experience Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-2xl p-8 lg:p-12 animate-slide-in-right border border-gray-100 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Professional Experience
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className="relative animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>

                  <div className="ml-16 bg-gradient-to-r from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-600">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {experience.role}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                          {experience.company}
                        </p>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full mt-2 lg:mt-0">
                        {experience.period}
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 animate-bounce-in"
                          style={{
                            animationDelay: `${index * 0.2 + techIndex * 0.1}s`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-6 text-center animate-fade-in border border-blue-200 dark:border-blue-800">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              5+
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Years Experience
            </div>
          </div>
          <div
            className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl p-6 text-center animate-fade-in border border-purple-200 dark:border-purple-800"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              50+
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Projects Completed
            </div>
          </div>
          <div
            className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-6 text-center animate-fade-in border border-green-200 dark:border-green-800"
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
