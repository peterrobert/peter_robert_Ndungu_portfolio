import photoImage from "../../../public/peter_image.jpg";
const AboutPage = () => {
  return (
    <>
      <section id="breadcrumb" className="py-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
              Home
            </span>
            <i className="fa-solid fa-chevron-right text-slate-600 text-xs"></i>
            <span className="text-white font-medium">about</span>
          </div>
        </div>
      </section>
      <section
        id="bio-hero"
        className="relative py-20 md:py-28 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 blob animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 blob animate-float"
            style={{
              animationDelay: "-2s",
              background:
                "radial-gradient(circle, rgba(249, 115, 22, 0.3) 0%, transparent 70%)",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-dot"></div>
              <span className="text-sm text-slate-300">
                Available for new opportunities
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
              <span className="gradient-text">Peter Robert</span>
              <br />
              <span className="text-slate-200">
                Frontend & Full‑Stack Developer
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Passionate about building modern web applications with exceptional
              user experiences. Based in Kenya, crafting digital solutions for
              clients worldwide.
            </p>
          </div>
        </div>
      </section>
      {/* <!-- Personal Introduction --> */}
      <section id="personal-intro" className="py-20 md:py-28 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  My <span className="gradient-text">Journey</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-orange-500 rounded-full mb-8"></div>
              </div>

              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  I discovered my passion for web development during university
                  while studying Civil Engineering. What started as curiosity
                  about how websites work evolved into a deep fascination with
                  creating digital experiences that people love to use.
                </p>

                <p>
                  Over the past six years, I've specialized in frontend
                  development with &nbsp;
                  <span className="text-violet-400 font-medium">
                    React and Next.js
                  </span>
                  &nbsp; , building everything from simple landing pages to
                  complex web applications. My backend experience with &nbsp;
                  <span className="text-red-400 font-medium">
                    Ruby on Rails
                  </span>{" "}
                  allows me to create complete solutions, while I'm currently
                  expanding my skills with{" "}
                  <span className="text-cyan-400 font-medium">Go</span>
                  &nbsp; for scalable microservices.
                </p>

                <p>
                  I believe great software comes from understanding both the
                  technical requirements and human needs. This drives me to
                  write clean, maintainable code while never losing sight of the
                  end user's experience.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <div className="glass rounded-lg px-4 py-2 flex items-center space-x-2">
                  <i className="fa-solid fa-graduation-cap text-violet-400"></i>
                  <span className="text-sm">Civil Engineering Graduate</span>
                </div>
                <div className="glass rounded-lg px-4 py-2 flex items-center space-x-2">
                  <i className="fa-solid fa-map-marker-alt text-orange-400"></i>
                  <span className="text-sm">Based in Kenya</span>
                </div>
                <div className="glass rounded-lg px-4 py-2 flex items-center space-x-2">
                  <i className="fa-solid fa-clock text-teal-400"></i>
                  <span className="text-sm">GMT+3 Timezone</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="gradient-border animate-tilt">
                <div className="gradient-border-inner p-1">
                  <div className="glass rounded-xl overflow-hidden shadow-2xl">
                    <img
                      className="w-full h-[600px] object-cover"
                      src={photoImage}
                      alt="professional portrait of a young Black male software developer from Kenya, working at a modern desk with multiple monitors, coding environment, natural lighting, confident and focused expression"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 glass rounded-lg p-4 animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">6+</div>
                  <div className="text-xs text-slate-400">Years Coding</div>
                </div>
              </div>
              <div
                className="absolute -bottom-6 -left-6 glass rounded-lg p-4 animate-float"
                style={{
                  animationDelay: "-1s",
                }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">20+</div>
                  <div className="text-xs text-slate-400">Projects Built</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Core Skills Deep Dive --> */}
      <section id="skills-deep-dive" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A comprehensive breakdown of my technical skills, experience
              levels, and the projects where I've applied them.
            </p>
          </div>

          {/* <!-- Frontend Mastery --> */}
          <div className="mb-20">
            <div className="glass rounded-2xl p-8 mb-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <i className="fa-solid fa-palette text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold">
                    Frontend Development
                  </h3>
                  <p className="text-slate-400">
                    My primary expertise and passion
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-200">
                        React & Next.js
                      </span>
                      <span className="text-sm text-violet-400">Expert</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="progress-bar h-2 rounded-full"
                        style={{ width: " 95%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      5+ years, 20+ projects
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-200">
                        TypeScript
                      </span>
                      <span className="text-sm text-violet-400">Advanced</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="progress-bar h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      2+ years, type-safe apps
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-200">
                        Tailwind CSS
                      </span>
                      <span className="text-sm text-violet-400">Expert</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="progress-bar h-2 rounded-full"
                        style={{ width: "98%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Daily use, custom configs
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-200">
                        State Management
                      </span>
                      <span className="text-sm text-violet-400">Advanced</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="progress-bar h-2 rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Redux, Zustand, Context
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-200">
                        Animation
                      </span>
                      <span className="text-sm text-violet-400">
                        Intermediate
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="progress-bar h-2 rounded-full"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Framer Motion, CSS
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-200">
                        Testing
                      </span>
                      <span className="text-sm text-violet-400">
                        Intermediate
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="progress-bar h-2 rounded-full"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      RTL, Jest, Vitest
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-display font-semibold text-lg mb-4">
                    Recent Projects
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <span className="text-sm text-slate-300">
                        Feedback Box - React/TS
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <span className="text-sm text-slate-300">
                        E-commerce Platform - Next.js
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <span className="text-sm text-slate-300">
                        Task Manager - React/Redux
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <span className="text-sm text-slate-300">
                        Code Review Tool - TypeScript
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Backend Proficiency --> */}
          <div className="mb-20">
            <div className="glass rounded-2xl p-8 mb-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <i className="fa-solid fa-server text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold">
                    Backend Development
                  </h3>
                  <p className="text-slate-400">
                    Building robust APIs and services
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-200">
                        Ruby on Rails
                      </span>
                      <span className="text-sm text-orange-400">Advanced</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="progress-bar h-2 rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      2+ years, API development
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-200">
                        PostgreSQL
                      </span>
                      <span className="text-sm text-orange-400">Advanced</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="progress-bar h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Complex queries, optimization
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-200">
                        WebSockets
                      </span>
                      <span className="text-sm text-orange-400">
                        Intermediate
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="progress-bar h-2 rounded-full"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Real-time features
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-200">
                        Go (Learning)
                      </span>
                      <span className="text-sm text-orange-400">Beginner+</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="progress-bar h-2 rounded-full"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Microservices, concurrency
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-200">Redis</span>
                      <span className="text-sm text-orange-400">
                        Intermediate
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="progress-bar h-2 rounded-full"
                        style={{ width: " 60%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Caching, sessions
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-200">
                        REST APIs
                      </span>
                      <span className="text-sm text-orange-400">Advanced</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="progress-bar h-2 rounded-full"
                        style={{
                          width: "90%",
                        }}
                      ></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Design, documentation
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-display font-semibold text-lg mb-4">
                    API Projects
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-slate-300">
                        Feedback API - Rails/WebSockets
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-slate-300">
                        Survey Platform - Rails/Postgres
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span className="text-sm text-slate-300">
                        Notification Service - Go (WIP)
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-slate-300">
                        User Management - Rails API
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- DevOps & Tools --> */}
          <div>
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <i className="fa-solid fa-tools text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold">
                    DevOps & Tooling
                  </h3>
                  <p className="text-slate-400">
                    Deployment, monitoring, and productivity tools
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-4">
                  <h4 className="font-display font-semibold text-lg text-teal-400">
                    Version Control
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">
                        Git & GitHub
                      </span>
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">
                        Branching Strategies
                      </span>
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-display font-semibold text-lg text-teal-400">
                    Deployment
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Vercel</span>
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Render</span>
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Docker</span>
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-display font-semibold text-lg text-teal-400">
                    Development
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">VS Code</span>
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Postman</span>
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Figma</span>
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-display font-semibold text-lg text-teal-400">
                    Monitoring
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Lighthouse</span>
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Web Vitals</span>
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">
                        Error Tracking
                      </span>
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Professional Highlights --> */}
      <section
        id="professional-highlights"
        className="py-20 md:py-28 bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Professional <span className="gradient-text">Highlights</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Key achievements, milestones, and recognitions throughout my
              development journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* <!-- Achievement Cards --> */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-trophy text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-violet-400 transition-colors">
                      95+ Lighthouse Scores
                    </h3>
                    <p className="text-slate-400 mb-3">
                      Consistently achieving excellent performance,
                      accessibility, and SEO scores across all projects.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">
                        Performance
                      </span>
                      <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                        Accessibility
                      </span>
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                        SEO
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-graduation-cap text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-violet-400 transition-colors">
                      Continuous Learning
                    </h3>
                    <p className="text-slate-400 mb-3">
                      Currently expanding skills with Go programming and
                      exploring modern backend architectures.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">
                        Go Lang
                      </span>
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                        Microservices
                      </span>
                      <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded">
                        Architecture
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Stats Dashboard --> */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold mb-8 text-center">
                Career Statistics
              </h3>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    20+
                  </div>
                  <div className="text-sm text-slate-400">
                    Projects Completed
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-1 mt-2">
                    <div
                      className="bg-gradient-to-r from-violet-500 to-orange-500 h-1 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    6+
                  </div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                  <div className="w-full bg-slate-700 rounded-full h-1 mt-2">
                    <div
                      className="bg-gradient-to-r from-violet-500 to-orange-500 h-1 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    8+
                  </div>
                  <div className="text-sm text-slate-400">
                    Technologies Mastered
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-1 mt-2">
                    <div
                      className="bg-gradient-to-r from-violet-500 to-orange-500 h-1 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    100%
                  </div>
                  <div className="text-sm text-slate-400">
                    Client Satisfaction
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-1 mt-2">
                    <div
                      className="bg-gradient-to-r from-violet-500 to-orange-500 h-1 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* <!-- Recent Milestones --> */}
              <div className="space-y-4">
                <h4 className="font-display font-semibold text-lg mb-4">
                  Recent Milestones
                </h4>

                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-slate-300">
                    Launched Feedback Box with 10+ active users
                  </span>
                  <span className="text-slate-500 ml-auto">July 2025</span>
                </div>

                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-300">
                    Started learning Go programming language
                  </span>
                  <span className="text-slate-500 ml-auto">August 2025</span>
                </div>

                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-slate-300">
                    Completed TypeScript certification
                  </span>
                  <span className="text-slate-500 ml-auto">January 2024</span>
                </div>

                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-slate-300">
                    Built first Rails API with WebSockets
                  </span>
                  <span className="text-slate-500 ml-auto">January 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Work Philosophy --> */}
      <section id="work-philosophy" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              My Development <span className="gradient-text">Philosophy</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              The principles and values that guide my approach to building
              software and working with teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Philosophy Card 1 --> */}
            <div className="glass rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-heart text-white text-2xl"></i>
              </div>

              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-violet-400 transition-colors">
                User-Centric Design
              </h3>

              <p className="text-slate-400 leading-relaxed mb-4">
                Every line of code I write is with the end user in mind. Great
                software isn't just about clean code—it's about solving real
                problems and creating delightful experiences.
              </p>

              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center space-x-2">
                  <i className="fa-solid fa-check text-violet-400 text-xs"></i>
                  <span>Accessibility-first development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fa-solid fa-check text-violet-400 text-xs"></i>
                  <span>Performance optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fa-solid fa-check text-violet-400 text-xs"></i>
                  <span>Intuitive user interfaces</span>
                </li>
              </ul>
            </div>

            {/* <!-- Philosophy Card 2 --> */}
            <div className="glass rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-code text-white text-2xl"></i>
              </div>

              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-violet-400 transition-colors">
                Clean & Maintainable Code
              </h3>

              <p className="text-slate-400 leading-relaxed mb-4">
                Writing code is a craft. I believe in creating code that's not
                just functional, but readable, maintainable, and scalable for
                future development.
              </p>

              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center space-x-2">
                  <i className="fa-solid fa-check text-orange-400 text-xs"></i>
                  <span>Consistent coding standards</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fa-solid fa-check text-orange-400 text-xs"></i>
                  <span>Comprehensive documentation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fa-solid fa-check text-orange-400 text-xs"></i>
                  <span>Test-driven development</span>
                </li>
              </ul>
            </div>

            {/* <!-- Philosophy Card 3 --> */}
            <div className="glass rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-users text-white text-2xl"></i>
              </div>

              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-violet-400 transition-colors">
                Collaborative Approach
              </h3>

              <p className="text-slate-400 leading-relaxed mb-4">
                The best software is built by teams, not individuals. I value
                open communication, knowledge sharing, and learning from others.
              </p>

              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center space-x-2">
                  <i className="fa-solid fa-check text-teal-400 text-xs"></i>
                  <span>Clear communication</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fa-solid fa-check text-teal-400 text-xs"></i>
                  <span>Code reviews and feedback</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fa-solid fa-check text-teal-400 text-xs"></i>
                  <span>Mentoring and learning</span>
                </li>
              </ul>
            </div>

            {/* <!-- Philosophy Card 4 --> */}
            <div className="glass rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-rocket text-white text-2xl"></i>
              </div>

              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-violet-400 transition-colors">
                Continuous Improvement
              </h3>

              <p className="text-slate-400 leading-relaxed mb-4">
                Technology evolves rapidly, and so should we. I'm committed to
                continuous learning and staying current with industry best
                practices.
              </p>

              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center space-x-2">
                  <i className="fa-solid fa-check text-green-400 text-xs"></i>
                  <span>Learning new technologies</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fa-solid fa-check text-green-400 text-xs"></i>
                  <span>Refactoring and optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fa-solid fa-check text-green-400 text-xs"></i>
                  <span>Industry trend awareness</span>
                </li>
              </ul>
            </div>

            {/* <!-- Philosophy Card 5 --> */}
            <div className="glass rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-lightbulb text-white text-2xl"></i>
              </div>

              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-violet-400 transition-colors">
                Problem-First Thinking
              </h3>

              <p className="text-slate-400 leading-relaxed mb-4">
                Before jumping into code, I take time to understand the problem
                deeply. The right solution often becomes clear once the problem
                is well-defined.
              </p>

              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center space-x-2">
                  <i className="fa-solid fa-check text-purple-400 text-xs"></i>
                  <span>Requirements analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fa-solid fa-check text-purple-400 text-xs"></i>
                  <span>User research and feedback</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fa-solid fa-check text-purple-400 text-xs"></i>
                  <span>Iterative development</span>
                </li>
              </ul>
            </div>

            {/* <!-- Philosophy Card 6 --> */}
            <div className="glass rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-globe text-white text-2xl"></i>
              </div>

              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-violet-400 transition-colors">
                Global Perspective
              </h3>

              <p className="text-slate-400 leading-relaxed mb-4">
                Building for the web means building for everyone, everywhere. I
                consider cultural differences, connectivity constraints, and
                diverse user needs.
              </p>

              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center space-x-2">
                  <i className="fa-solid fa-check text-yellow-400 text-xs"></i>
                  <span>Internationalization support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fa-solid fa-check text-yellow-400 text-xs"></i>
                  <span>Progressive enhancement</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fa-solid fa-check text-yellow-400 text-xs"></i>
                  <span>Cross-platform compatibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Learning Journey --> */}
      <section id="learning-journey" className="py-20 md:py-28 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              My Learning <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From curiosity to expertise—the path that led me to become a
              full-stack developer.
            </p>
          </div>

          {/* <!-- Timeline --> */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-violet-500 to-orange-500 h-full rounded-full"></div>

            <div className="space-y-12">
              {/* <!-- Timeline Item 1 --> */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all">
                    <div className="text-sm text-violet-400 font-medium mb-2">
                      2019 - 2020
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3">
                      Discovery Phase
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      Started learning HTML, CSS, and JavaScript during
                      university. Built my first static websites and fell in
                      love with bringing designs to life in the browser.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4 justify-end">
                      <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded">
                        HTML/CSS
                      </span>
                      <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded">
                        JavaScript
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-violet-500 to-orange-500 rounded-full border-4 border-ink"></div>

                <div className="w-1/2 pl-8"></div>
              </div>

              {/* <!-- Timeline Item 2 --> */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-violet-500 to-orange-500 rounded-full border-4 border-ink"></div>

                <div className="w-1/2 pl-8">
                  <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all">
                    <div className="text-sm text-violet-400 font-medium mb-2">
                      2021 - 2022
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3">
                      React Deep Dive
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      Discovered React and component-based architecture. Spent
                      countless hours building projects, learning hooks, state
                      management, and modern development practices.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="text-xs bg-violet-500/20 text-violet-300 px-2 py-1 rounded">
                        React
                      </span>
                      <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                        Redux
                      </span>
                      <span className="text-xs bg-gray-500/20 text-gray-300 px-2 py-1 rounded">
                        Node.js
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Timeline Item 3 --> */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all">
                    <div className="text-sm text-violet-400 font-medium mb-2">
                      2022 - 2023
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3">
                      Full-Stack Expansion
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      Added backend skills with Ruby on Rails. Learned database
                      design, API development, and how to build complete web
                      applications from front to back.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4 justify-end">
                      <span className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded">
                        Rails
                      </span>
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                        PostgreSQL
                      </span>
                      <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">
                        APIs
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-violet-500 to-orange-500 rounded-full border-4 border-ink"></div>

                <div className="w-1/2 pl-8"></div>
              </div>

              {/* <!-- Timeline Item 4 --> */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-violet-500 to-orange-500 rounded-full border-4 border-ink"></div>

                <div className="w-1/2 pl-8">
                  <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all">
                    <div className="text-sm text-violet-400 font-medium mb-2">
                      2024
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3">
                      TypeScript & Modern Tools
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      Embraced TypeScript for better development experience and
                      code reliability. Adopted modern tools like Next.js,
                      Tailwind CSS, and improved testing practices.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                        TypeScript
                      </span>
                      <span className="text-xs bg-gray-500/20 text-gray-300 px-2 py-1 rounded">
                        Next.js
                      </span>
                      <span className="text-xs bg-teal-500/20 text-teal-300 px-2 py-1 rounded">
                        Tailwind
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Timeline Item 5 --> */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all">
                    <div className="text-sm text-violet-400 font-medium mb-2">
                      2025 - Present
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3">
                      Go & Microservices
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      Currently learning Go programming language to build
                      scalable backend services. Exploring microservice
                      architectures and cloud-native development patterns.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4 justify-end">
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">
                        Go
                      </span>
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                        Microservices
                      </span>
                      <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                        Docker
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-violet-500 to-orange-500 rounded-full border-4 border-ink animate-pulse"></div>

                <div className="w-1/2 pl-8"></div>
              </div>
            </div>
          </div>

          {/* <!-- Current Learning Goals --> */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-display font-bold mb-8">
              Current Learning <span className="gradient-text">Goals</span>
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-code text-white"></i>
                </div>
                <h4 className="font-display font-semibold mb-2">Master Go</h4>
                <p className="text-slate-400 text-sm">
                  Build production-ready microservices with Go
                </p>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-3">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                    style={{ width: "35%" }}
                  ></div>
                </div>
              </div>

              <div className="glass rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-cloud text-white"></i>
                </div>
                <h4 className="font-display font-semibold mb-2">
                  Cloud Architecture
                </h4>
                <p className="text-slate-400 text-sm">
                  Learn AWS/GCP for scalable deployments
                </p>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-3">
                  <div
                    className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full"
                    style={{ width: "20%" }}
                  ></div>
                </div>
              </div>

              <div className="glass rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-mobile-alt text-white"></i>
                </div>
                <h4 className="font-display font-semibold mb-2">
                  Mobile Development
                </h4>
                <p className="text-slate-400 text-sm">
                  Explore React Native for mobile apps
                </p>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-3">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                    style={{ width: "10%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Personal Interests --> */}
      <section id="personal-interests" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Beyond the <span className="gradient-text">Code</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              When I'm not coding, these are the things that inspire me and keep
              me balanced.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* <!-- Interest 1 --> */}
            <div className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-seedling text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-violet-400 transition-colors">
                Tech Community
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Active in the Kenyan tech community, attending meetups, sharing
                knowledge, and mentoring aspiring developers.
              </p>
            </div>

            {/* <!-- Interest 2 --> */}
            <div className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-book text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-violet-400 transition-colors">
                Reading
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Love reading about software architecture, entrepreneurship, and
                personal development. Currently reading "Clean Architecture" by
                Robert Martin.
              </p>
            </div>

            {/* <!-- Interest 3 --> */}
            <div className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-camera text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-violet-400 transition-colors">
                Photography
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Exploring Kenya's beautiful landscapes through photography. It
                helps me see the world from different perspectives and
                appreciate design in nature.
              </p>
            </div>

            {/* <!-- Interest 4 --> */}
            <div className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-music text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-violet-400 transition-colors">
                Music
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Music is my coding companion. From Afrobeat to Lo-fi hip hop,
                the right playlist keeps me in the zone during long development
                sessions.
              </p>
            </div>
          </div>

          {/* <!-- Fun Facts --> */}
          <div className="mt-16">
            <h3 className="text-3xl font-display font-bold text-center mb-8">
              Fun <span className="gradient-text">Facts</span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass rounded-xl p-4 flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-coffee text-white"></i>
                </div>
                <div>
                  <div className="font-semibold">Coffee Enthusiast</div>
                  <div className="text-sm text-slate-400">
                    3+ cups per coding day
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-4 flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-clock text-white"></i>
                </div>
                <div>
                  <div className="font-semibold">Early Bird</div>
                  <div className="text-sm text-slate-400">
                    Best coding at 3 AM
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-4 flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-keyboard text-white"></i>
                </div>
                <div>
                  <div className="font-semibold">Mechanical Keyboards</div>
                  <div className="text-sm text-slate-400">
                    Cherry MX Blue fan
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-4 flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-gamepad text-white"></i>
                </div>
                <div>
                  <div className="font-semibold">Gamer</div>
                  <div className="text-sm text-slate-400">
                    Strategy games lover
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-4 flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-language text-white"></i>
                </div>
                <div>
                  <div className="font-semibold">Multilingual</div>
                  <div className="text-sm text-slate-400">
                    English, Swahili, Python
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-4 flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-star text-white"></i>
                </div>
                <div>
                  <div className="font-semibold">Dark Mode</div>
                  <div className="text-sm text-slate-400">
                    Always and forever
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Call to Action --> */}
      <section id="cta-section" className="py-20 md:py-28 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              Ready to Build Something
              <span className="gradient-text">Amazing Together?</span>
            </h2>

            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              Whether you're looking for a frontend specialist, full-stack
              developer, or technical consultant, I'd love to hear about your
              project and discuss how we can bring your ideas to life.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <span className="magnetic bg-gradient-to-r from-violet-500 to-orange-500 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all cursor-pointer text-lg">
                <i className="fa-solid fa-paper-plane mr-2"></i>
                Start a Project
              </span>
              <span className="magnetic glass px-8 py-4 rounded-lg font-medium text-slate-200 hover:bg-white/10 transition-all cursor-pointer text-lg">
                <i className="fa-solid fa-download mr-2"></i>
                Download CV
              </span>
              <span className="magnetic glass px-8 py-4 rounded-lg font-medium text-slate-200 hover:bg-white/10 transition-all cursor-pointer text-lg">
                <i className="fa-solid fa-calendar mr-2"></i>
                Schedule Call
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-clock text-white"></i>
                </div>
                <h3 className="font-display font-semibold mb-2">
                  Quick Response
                </h3>
                <p className="text-slate-400 text-sm">
                  I respond to all inquiries within 24 hours
                </p>
              </div>

              <div className="glass rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-handshake text-white"></i>
                </div>
                <h3 className="font-display font-semibold mb-2">
                  Collaborative
                </h3>
                <p className="text-slate-400 text-sm">
                  Work closely with your team and stakeholders
                </p>
              </div>

              <div className="glass rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-trophy text-white"></i>
                </div>
                <h3 className="font-display font-semibold mb-2">
                  Quality Focused
                </h3>
                <p className="text-slate-400 text-sm">
                  Committed to delivering exceptional results
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer id="footer" className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <div className="text-3xl font-display font-bold gradient-text mb-2">
                PR
              </div>
              <p className="text-slate-400 text-sm">
                Designed with ❤️ in Kenya
              </p>
            </div>

            <div className="flex justify-center">
              <div className="flex flex-wrap gap-6 text-sm">
                <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Home
                </span>
                <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Projects
                </span>
                <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  About
                </span>
                <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Blog
                </span>
                <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Contact
                </span>
              </div>
            </div>

            <div className="text-right">
              <div className="flex justify-end space-x-4 mb-3">
                <span className="text-slate-400 hover:text-violet-400 transition-colors cursor-pointer">
                  <i className="fa-brands fa-github"></i>
                </span>
                <span className="text-slate-400 hover:text-violet-400 transition-colors cursor-pointer">
                  <i className="fa-brands fa-linkedin"></i>
                </span>
                <span className="text-slate-400 hover:text-violet-400 transition-colors cursor-pointer">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <span className="text-slate-400 hover:text-violet-400 transition-colors cursor-pointer">
                  <i className="fa-brands fa-upwork"></i>
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                © 2025 Peter Robert. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AboutPage;
