import Link from "next/link";
import Image from "next/image";
import { projects } from "../lib/data";
import { CgArrowRightR } from "react-icons/cg";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="py-24 bg-linear-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my best work, featuring modern technologies and
            innovative solutions
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap lg:justify-between gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in md:flex-1 md:max-w-sm lg:max-w-none"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative overflow-hidden rounded-t-2xl">
                <Link
                  href={`/projects/${project.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="relative h-56 cursor-pointer group-hover:scale-110 transition-transform duration-500">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                </Link>

                <div className="absolute top-4 right-4 bg-linear-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  Featured
                </div>
              </div>

              <div className="relative p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <Link href={`/projects/${project.slug}`} className="">
                    {project.title}
                  </Link>
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-linear-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-200 text-sm rounded-full border border-blue-200 dark:border-blue-800 hover:scale-105 transition-transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-glow"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 bg-blue-500/10 rounded-lg py-12 animate-slide-up">
          <div className="text-center animate-slide-up flex flex-col items-center gap-4">
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text">
              Wait...
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              That's not all! Wanna see all my projects?
            </p>

            <Link
              href="/projects"
              className="items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-fit flex gap-2"
            >
              View all projects <CgArrowRightR />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
