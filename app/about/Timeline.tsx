{
  /* Experience Section */
}
<div className="bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-2xl p-8 lg:p-12 animate-slide-in-right border border-gray-100 dark:border-gray-700">
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
          <div className="absolute left-6 w-4 h-4 bg-linear-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>

          <div className="ml-16 bg-linear-to-r from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-600">
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
                  className="px-4 py-2 bg-linear-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 animate-bounce-in"
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
</div>;
