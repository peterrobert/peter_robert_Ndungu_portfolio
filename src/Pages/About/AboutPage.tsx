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
                      3+ years, 30+ projects
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
    </>
  );
};

export default AboutPage;
