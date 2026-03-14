import { skills } from "../lib/data";

export default function Skills() {
  const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use
            to build exceptional digital experiences
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap lg:justify-between gap-8">
          {categories.map((category, categoryIndex) => (
            <div
              key={category}
              className="group bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in md:flex-1 md:max-w-sm lg:max-w-none"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {category}
                </h3>
                <div className="w-16 h-1 bg-linear-to-r from-blue-500 to-purple-600 rounded-full mx-auto group-hover:w-24 transition-all duration-300"></div>
              </div>

              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="group/skill animate-slide-in-left"
                      style={{
                        animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.1}s`,
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
                          {skill.level}/5
                        </span>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full bg-linear-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out group-hover/skill:shadow-lg group-hover/skill:shadow-blue-500/50"
                            style={{
                              width: `${(skill.level / 5) * 100}%`,
                              animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.1 + 0.5}s`,
                            }}
                          ></div>
                        </div>
                        {/* Animated dots */}
                        <div className="flex justify-between mt-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-1 h-1 rounded-full transition-all duration-300 ${
                                i < skill.level
                                  ? "bg-blue-500 animate-pulse"
                                  : "bg-gray-300 dark:bg-gray-600"
                              }`}
                              style={{ animationDelay: `${i * 0.1}s` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills showcase */}
        <div className="mt-16 text-center animate-slide-in-right">
          <div className="inline-flex flex-wrap justify-center gap-3 p-6 bg-linear-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
            {skills.slice(0, 8).map((skill, index) => (
              <span
                key={skill.name}
                className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
