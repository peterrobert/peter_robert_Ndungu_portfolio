const ProjectPage = () => {
  return (
    <>
      <section id="breadcrumb" className="py-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
              Home
            </span>
            <i className="fa-solid fa-chevron-right text-slate-600 text-xs"></i>
            <span className="text-white font-medium">Featured Projects</span>
          </div>
        </div>
      </section>

      <section
        id="projects-hero"
        className="relative py-20 md:py-28 overflow-hidden"
      >
        {/* <!-- Background Elements --> */}
        <div className="absolute inset-0 opacity-20 parallax-bg">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 blob animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 blob animate-float"
            style={{
              animationDelay: "-2s",
              background:
                "radial-gradient(circle, rgba(249, 115, 22, 0.3) 0%, transparent 70%)",
            }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 blob animate-float"
            style={{
              animationDelay: "-4s",
              background:
                "radial-gradient(circle, rgba(45, 212, 191, 0.2) 0%, transparent 70%)",
            }}
          ></div>
        </div>

        {/* <!-- Grid Overlay --> */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-dot"></div>
              <span className="text-sm text-slate-300">
                4 Featured Projects
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8">
              Featured <span className="gradient-text">Projects</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto mb-12">
              Explore my latest work showcasing modern web applications built
              with <span className="text-violet-400 font-medium">React</span>,{" "}
              <span className="text-orange-400 font-medium">Rails</span>, and{" "}
              <span className="text-teal-400 font-medium">Go</span>. Each
              project demonstrates real-world problem solving with
              production-ready code.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <span className="magnetic bg-gradient-to-r from-violet-500 to-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all cursor-pointer">
                <i className="fa-solid fa-play mr-2"></i>
                View Live Demos
              </span>
              <span className="magnetic glass px-8 py-3 rounded-lg font-medium text-slate-200 hover:bg-white/10 transition-all cursor-pointer">
                <i className="fa-brands fa-github mr-2"></i>
                Browse Source Code
              </span>
            </div>

            {/* <!-- Project Stats --> */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="glass rounded-xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">4</div>
                <div className="text-sm text-slate-400">Featured Projects</div>
              </div>
              <div className="glass rounded-xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                <div className="text-sm text-slate-400">Technologies Used</div>
              </div>
              <div className="glass rounded-xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">95+</div>
                <div className="text-sm text-slate-400">
                  Avg Lighthouse Score
                </div>
              </div>
              <div className="glass rounded-xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">
                  100%
                </div>
                <div className="text-sm text-slate-400">Responsive Design</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Filter Section --> */}
      <section id="project-filters" className="py-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="px-6 py-3 rounded-full glass text-sm font-medium text-white hover:bg-white/10 transition-all bg-gradient-to-r from-violet-500 to-orange-500"
              data-filter="all"
            >
              <i className="fa-solid fa-grid-2 mr-2"></i>
              All Projects
            </button>
            <button
              className="px-6 py-3 rounded-full glass text-sm font-medium text-slate-300 hover:bg-white/10 transition-all"
              data-filter="frontend"
            >
              <i className="fa-solid fa-palette mr-2"></i>
              Frontend
            </button>
            <button
              className="px-6 py-3 rounded-full glass text-sm font-medium text-slate-300 hover:bg-white/10 transition-all"
              data-filter="fullstack"
            >
              <i className="fa-solid fa-layer-group mr-2"></i>
              Full-stack
            </button>
            <button
              className="px-6 py-3 rounded-full glass text-sm font-medium text-slate-300 hover:bg-white/10 transition-all"
              data-filter="realtime"
            >
              <i className="fa-solid fa-bolt mr-2"></i>
              Real-time
            </button>
            <button
              className="px-6 py-3 rounded-full glass text-sm font-medium text-slate-300 hover:bg-white/10 transition-all"
              data-filter="api"
            >
              <i className="fa-solid fa-server mr-2"></i>
              API/Backend
            </button>
          </div>
        </div>
      </section>
      {/* <!-- Featured Projects Grid --> */}
      <section id="featured-projects" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* <!-- Project 1: Feedback Box - Large Featured --> */}
            <div
              id="feedback-box-project"
              className="lg:col-span-2 project-card glass rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 group"
              data-category="fullstack realtime"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* <!-- Project Image --> */}
                <div className="relative overflow-hidden lg:h-[500px]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/67f1a1d5a3-c237d69876bd7ea11886.png"
                    alt="modern feedback platform interface with real-time voting, suggestion cards, dark theme with purple and orange accents, clean dashboard design"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className="flex items-center space-x-2 glass rounded-full px-3 py-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-dot"></div>
                      <span className="text-xs text-white font-medium">
                        Live Project
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-3">
                        <span className="magnetic glass p-3 rounded-lg text-white hover:bg-white/20 transition-all cursor-pointer">
                          <i className="fa-solid fa-external-link"></i>
                        </span>
                        <span className="magnetic glass p-3 rounded-lg text-white hover:bg-white/20 transition-all cursor-pointer">
                          <i className="fa-brands fa-github"></i>
                        </span>
                      </div>
                      <span className="glass px-4 py-2 rounded-lg text-sm text-white font-medium">
                        <i className="fa-solid fa-users mr-2"></i>
                        500+ Users
                      </span>
                    </div>
                  </div>
                </div>

                {/* <!-- Project Details --> */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <i className="fa-solid fa-comments text-white text-xl"></i>
                      </div>
                      <div>
                        <h2 className="text-3xl font-display font-bold group-hover:text-violet-400 transition-colors">
                          Feedback Box
                        </h2>
                        <p className="text-slate-400">
                          Real-time Collaboration Platform
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-slate-300 leading-relaxed mb-8">
                    A comprehensive suggestion and voting platform featuring
                    real-time updates, role-based permissions, and activity
                    feeds. Built to handle high-traffic scenarios with
                    optimistic UI updates and WebSocket connections.
                  </p>

                  {/* <!-- Key Features --> */}
                  <div className="space-y-3 mb-8">
                    <h3 className="font-display font-semibold text-slate-200 mb-4">
                      Key Features
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-3">
                        <i className="fa-solid fa-check text-green-400"></i>
                        <span className="text-sm text-slate-300">
                          Real-time voting & updates
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="fa-solid fa-check text-green-400"></i>
                        <span className="text-sm text-slate-300">
                          Role-based access control
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="fa-solid fa-check text-green-400"></i>
                        <span className="text-sm text-slate-300">
                          Activity feed system
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="fa-solid fa-check text-green-400"></i>
                        <span className="text-sm text-slate-300">
                          Push notifications
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="fa-solid fa-check text-green-400"></i>
                        <span className="text-sm text-slate-300">
                          Advanced filtering
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="fa-solid fa-check text-green-400"></i>
                        <span className="text-sm text-slate-300">
                          Analytics dashboard
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Tech Stack --> */}
                  <div className="mb-8">
                    <h3 className="font-display font-semibold text-slate-200 mb-4">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="tech-badge px-3 py-1 bg-violet-500/20 text-violet-300 text-sm rounded-lg border border-violet-500/30">
                        React
                      </span>
                      <span className="tech-badge px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-lg border border-blue-500/30">
                        TypeScript
                      </span>
                      <span className="tech-badge px-3 py-1 bg-red-500/20 text-red-300 text-sm rounded-lg border border-red-500/30">
                        Rails API
                      </span>
                      <span className="tech-badge px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-lg border border-green-500/30">
                        WebSockets
                      </span>
                      <span className="tech-badge px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-lg border border-purple-500/30">
                        PostgreSQL
                      </span>
                      <span className="tech-badge px-3 py-1 bg-teal-500/20 text-teal-300 text-sm rounded-lg border border-teal-500/30">
                        Tailwind CSS
                      </span>
                      <span className="tech-badge px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-lg border border-orange-500/30">
                        Redis
                      </span>
                    </div>
                  </div>

                  {/* <!-- Performance Metrics --> */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">95</div>
                      <div className="text-xs text-slate-400">Lighthouse</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">2s</div>
                      <div className="text-xs text-slate-400">Load Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">
                        99.9%
                      </div>
                      <div className="text-xs text-slate-400">Uptime</div>
                    </div>
                  </div>

                  {/* <!-- Action Buttons --> */}
                  <div className="flex flex-wrap gap-4">
                    <span className="magnetic bg-gradient-to-r from-violet-500 to-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all cursor-pointer flex items-center">
                      <i className="fa-solid fa-external-link mr-2"></i>
                      View Live Demo
                    </span>
                    <span className="magnetic glass px-6 py-3 rounded-lg font-medium text-slate-200 hover:bg-white/10 transition-all cursor-pointer flex items-center">
                      <i className="fa-solid fa-book-open mr-2"></i>
                      Read Case Study
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Project 2: Code Review Tool --> */}
            <div
              id="code-review-project"
              className="project-card glass rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 group"
              data-category="frontend"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/415cadd290-8a286cc9481ae1efad25.png"
                  alt="code review application interface with diff viewer, syntax highlighting, inline comments, dark developer theme"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="glass rounded-lg px-3 py-1">
                    <span className="text-xs text-white font-medium">
                      Frontend Focus
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <span className="magnetic glass p-2 rounded-lg text-white hover:bg-white/20 transition-all cursor-pointer text-sm">
                        <i className="fa-solid fa-external-link"></i>
                      </span>
                      <span className="magnetic glass p-2 rounded-lg text-white hover:bg-white/20 transition-all cursor-pointer text-sm">
                        <i className="fa-brands fa-github"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-code-branch text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-semibold group-hover:text-violet-400 transition-colors">
                      Code Review Tool
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Developer Experience Platform
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  Intuitive code review interface with syntax-highlighted diff
                  viewer, inline comment threading, and comprehensive keyboard
                  navigation system.
                </p>

                {/* <!-- Key Features --> */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-3">
                    <i className="fa-solid fa-check text-green-400 text-sm"></i>
                    <span className="text-sm text-slate-300">
                      Syntax-highlighted diffs
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fa-solid fa-check text-green-400 text-sm"></i>
                    <span className="text-sm text-slate-300">
                      Inline comment system
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fa-solid fa-check text-green-400 text-sm"></i>
                    <span className="text-sm text-slate-300">
                      Keyboard shortcuts
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fa-solid fa-check text-green-400 text-sm"></i>
                    <span className="text-sm text-slate-300">
                      Review status tracking
                    </span>
                  </div>
                </div>

                {/* <!-- Tech Stack --> */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-violet-500/20 text-violet-300 text-xs rounded-md">
                    React
                  </span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-md">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-md">
                    API
                  </span>
                  <span className="px-2 py-1 bg-teal-500/20 text-teal-300 text-xs rounded-md">
                    Tailwind
                  </span>
                </div>

                {/* <!-- Performance --> */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center glass rounded-lg p-3">
                    <div className="text-lg font-bold gradient-text">15+</div>
                    <div className="text-xs text-slate-400">Shortcuts</div>
                  </div>
                  <div className="text-center glass rounded-lg p-3">
                    <div className="text-lg font-bold gradient-text">10k+</div>
                    <div className="text-xs text-slate-400">Lines Reviewed</div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-violet-400 hover:text-violet-300 font-medium transition-colors cursor-pointer text-sm">
                    View Case Study →
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Project 3: Polls & Survey App --> */}
            <div
              id="polls-project"
              className="project-card glass rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 group"
              data-category="fullstack"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/44ebba5439-3fc2ffda6e0bf17e40b7.png"
                  alt="modern polling application interface with charts, voting results, survey forms, clean dashboard design, data visualization"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="glass rounded-lg px-3 py-1">
                    <span className="text-xs text-white font-medium">
                      Full-stack
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <span className="magnetic glass p-2 rounded-lg text-white hover:bg-white/20 transition-all cursor-pointer text-sm">
                        <i className="fa-solid fa-external-link"></i>
                      </span>
                      <span className="magnetic glass p-2 rounded-lg text-white hover:bg-white/20 transition-all cursor-pointer text-sm">
                        <i className="fa-brands fa-github"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-chart-pie text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-semibold group-hover:text-violet-400 transition-colors">
                      Polls & Survey App
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Data Collection Platform
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  Discussion-driven polling platform with instant results
                  visualization, form validation, and comprehensive
                  accessibility features.
                </p>

                {/* <!-- Key Features --> */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-3">
                    <i className="fa-solid fa-check text-green-400 text-sm"></i>
                    <span className="text-sm text-slate-300">
                      Real-time result updates
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fa-solid fa-check text-green-400 text-sm"></i>
                    <span className="text-sm text-slate-300">
                      Advanced form validation
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fa-solid fa-check text-green-400 text-sm"></i>
                    <span className="text-sm text-slate-300">
                      Data visualization
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fa-solid fa-check text-green-400 text-sm"></i>
                    <span className="text-sm text-slate-300">
                      Export capabilities
                    </span>
                  </div>
                </div>

                {/* <!-- Tech Stack --> */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-violet-500/20 text-violet-300 text-xs rounded-md">
                    React
                  </span>
                  <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded-md">
                    Rails
                  </span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md">
                    PostgreSQL
                  </span>
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-md">
                    Chart.js
                  </span>
                </div>

                {/* <!-- Performance --> */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center glass rounded-lg p-3">
                    <div className="text-lg font-bold gradient-text">1k+</div>
                    <div className="text-xs text-slate-400">Responses</div>
                  </div>
                  <div className="text-center glass rounded-lg p-3">
                    <div className="text-lg font-bold gradient-text">98%</div>
                    <div className="text-xs text-slate-400">Accuracy</div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-violet-400 hover:text-violet-300 font-medium transition-colors cursor-pointer text-sm">
                    View Case Study →
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Project 4: Go Microservice --> */}
            <div
              id="go-microservice-project"
              className="lg:col-span-2 project-card glass rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 group"
              data-category="api backend"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* <!-- Project Details --> */}
                <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                  <div className="mb-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <i className="fa-solid fa-server text-white text-xl"></i>
                      </div>
                      <div>
                        <div className="flex items-center space-x-3">
                          <h2 className="text-3xl font-display font-bold group-hover:text-violet-400 transition-colors">
                            Go Microservice
                          </h2>
                          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-lg border border-yellow-500/30">
                            WIP
                          </span>
                        </div>
                        <p className="text-slate-400">
                          High-Performance Backend Service
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-slate-300 leading-relaxed mb-8">
                    Scalable microservice built with Go, focusing on concurrency
                    patterns and clean architecture. Handles activity feeds and
                    notifications with high-performance requirements and
                    comprehensive testing.
                  </p>

                  {/* <!-- Key Features --> */}
                  <div className="space-y-3 mb-8">
                    <h3 className="font-display font-semibold text-slate-200 mb-4">
                      Architecture Highlights
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-3">
                        <i className="fa-solid fa-check text-green-400"></i>
                        <span className="text-sm text-slate-300">
                          Goroutine concurrency
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="fa-solid fa-check text-green-400"></i>
                        <span className="text-sm text-slate-300">
                          Clean architecture
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="fa-solid fa-check text-green-400"></i>
                        <span className="text-sm text-slate-300">
                          Redis caching layer
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="fa-solid fa-check text-green-400"></i>
                        <span className="text-sm text-slate-300">
                          Comprehensive testing
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="fa-solid fa-check text-green-400"></i>
                        <span className="text-sm text-slate-300">
                          Docker containerization
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="fa-solid fa-check text-green-400"></i>
                        <span className="text-sm text-slate-300">
                          Prometheus metrics
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Tech Stack --> */}
                  <div className="mb-8">
                    <h3 className="font-display font-semibold text-slate-200 mb-4">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="tech-badge px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-lg border border-cyan-500/30">
                        Go
                      </span>
                      <span className="tech-badge px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-lg border border-purple-500/30">
                        PostgreSQL
                      </span>
                      <span className="tech-badge px-3 py-1 bg-red-500/20 text-red-300 text-sm rounded-lg border border-red-500/30">
                        Redis
                      </span>
                      <span className="tech-badge px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-lg border border-blue-500/30">
                        Docker
                      </span>
                      <span className="tech-badge px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-lg border border-green-500/30">
                        JSON API
                      </span>
                      <span className="tech-badge px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-lg border border-orange-500/30">
                        Prometheus
                      </span>
                    </div>
                  </div>

                  {/* <!-- Performance Metrics --> */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">
                        10ms
                      </div>
                      <div className="text-xs text-slate-400">
                        Response Time
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">
                        10k+
                      </div>
                      <div className="text-xs text-slate-400">RPS Capacity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">
                        95%
                      </div>
                      <div className="text-xs text-slate-400">
                        Test Coverage
                      </div>
                    </div>
                  </div>

                  {/* <!-- Action Buttons --> */}
                  <div className="flex flex-wrap gap-4">
                    <span className="magnetic glass px-6 py-3 rounded-lg font-medium text-slate-400 cursor-not-allowed flex items-center">
                      <i className="fa-solid fa-external-link mr-2"></i>
                      Coming Soon
                    </span>
                    <span className="magnetic glass px-6 py-3 rounded-lg font-medium text-slate-200 hover:bg-white/10 transition-all cursor-pointer flex items-center">
                      <i className="fa-brands fa-github mr-2"></i>
                      View Source
                    </span>
                  </div>
                </div>

                {/* <!-- Project Image --> */}
                <div className="relative overflow-hidden lg:h-[500px] order-1 lg:order-2">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/0fd21eb5a4-08e80362c348d651e03c.png"
                    alt="Go programming language code editor, microservice architecture diagram, API endpoints, system design, technical visualization, modern development"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-6 right-6">
                    <div className="flex items-center space-x-2 glass rounded-full px-3 py-1">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse-dot"></div>
                      <span className="text-xs text-white font-medium">
                        In Development
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass rounded-lg p-4">
                      <h4 className="font-medium text-white mb-2">
                        Learning Journey
                      </h4>
                      <p className="text-sm text-slate-300">
                        Exploring Go's concurrency model and building
                        production-ready microservices
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Additional Projects Preview --> */}
      <section id="more-projects" className="py-20 md:py-28 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              More <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Additional projects and experiments showcasing various
              technologies and problem-solving approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Mini Project 1: Task Management --> */}
            <div className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all group">
              <div className="relative overflow-hidden h-48">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d93b2ba396-b27c6fb260a495f39583.png"
                  alt="task management kanban board interface, project management tool, drag and drop cards, modern UI"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-violet-400 transition-colors">
                  Task Management
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  Kanban-style project management with drag-and-drop
                  functionality and team collaboration features.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-violet-500/20 text-violet-300 text-xs rounded-md">
                    Next.js
                  </span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-md">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-md">
                    WebSockets
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <span className="text-slate-400 hover:text-violet-400 transition-colors cursor-pointer">
                      <i className="fa-solid fa-external-link"></i>
                    </span>
                    <span className="text-slate-400 hover:text-violet-400 transition-colors cursor-pointer">
                      <i className="fa-brands fa-github"></i>
                    </span>
                  </div>
                  <span className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors cursor-pointer">
                    View Details →
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Mini Project 2: E-commerce Platform --> */}
            <div className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all group">
              <div className="relative overflow-hidden h-48">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/53e8423598-720dad15cf72bd92f4f3.png"
                  alt="e-commerce website interface, online store, product catalog, shopping cart, modern design"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-violet-400 transition-colors">
                  E-commerce Platform
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  Full-featured online store with payment processing, inventory
                  management, and analytics.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-violet-500/20 text-violet-300 text-xs rounded-md">
                    Next.js
                  </span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-md">
                    Stripe
                  </span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md">
                    Prisma
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <span className="text-slate-400 hover:text-violet-400 transition-colors cursor-pointer">
                      <i className="fa-solid fa-external-link"></i>
                    </span>
                    <span className="text-slate-400 hover:text-violet-400 transition-colors cursor-pointer">
                      <i className="fa-brands fa-github"></i>
                    </span>
                  </div>
                  <span className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors cursor-pointer">
                    View Details →
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Mini Project 3: API Documentation --> */}
            <div className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all group">
              <div className="relative overflow-hidden h-48">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/6458275b93-1eb8f6e972517060fb35.png"
                  alt="API documentation interface, developer tools, code examples, technical documentation, clean design"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-violet-400 transition-colors">
                  API Documentation
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  Interactive API documentation with live examples and
                  comprehensive endpoint coverage.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-violet-500/20 text-violet-300 text-xs rounded-md">
                    React
                  </span>
                  <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-md">
                    MDX
                  </span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-md">
                    OpenAPI
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <span className="text-slate-400 hover:text-violet-400 transition-colors cursor-pointer">
                      <i className="fa-solid fa-external-link"></i>
                    </span>
                    <span className="text-slate-400 hover:text-violet-400 transition-colors cursor-pointer">
                      <i className="fa-brands fa-github"></i>
                    </span>
                  </div>
                  <span className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors cursor-pointer">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Technologies Used --> */}
      <section id="technologies" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Technologies <span className="gradient-text">Used</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A comprehensive overview of the tools and technologies powering
              these projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* <!-- Frontend --> */}
            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-palette text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-display font-semibold mb-4">
                Frontend
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">React & Next.js</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">TypeScript</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Tailwind CSS</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Backend --> */}
            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-server text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-display font-semibold mb-4">
                Backend
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Ruby on Rails</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Go (Learning)</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">WebSockets</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Database --> */}
            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-database text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-display font-semibold mb-4">
                Database
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">PostgreSQL</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Redis</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Prisma ORM</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- DevOps --> */}
            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-wrench text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-display font-semibold mb-4">
                DevOps
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Docker</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Vercel</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">GitHub Actions</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- All Technologies Pills --> */}
          <div className="text-center">
            <h3 className="text-2xl font-display font-semibold mb-8">
              Complete Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="tech-badge inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300 hover:bg-violet-500/20 transition-colors">
                <i className="fa-brands fa-react"></i>
                React
              </span>
              <span className="tech-badge inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 hover:bg-blue-500/20 transition-colors">
                <i className="fa-brands fa-js-square"></i>
                TypeScript
              </span>
              <span className="tech-badge inline-flex items-center gap-2 rounded-full border border-gray-500/30 bg-gray-500/10 px-4 py-2 text-sm text-gray-300 hover:bg-gray-500/20 transition-colors">
                <i className="fa-solid fa-code"></i>
                Next.js
              </span>
              <span className="tech-badge inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-300 hover:bg-red-500/20 transition-colors">
                <i className="fa-solid fa-gem"></i>
                Rails
              </span>
              <span className="tech-badge inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 hover:bg-cyan-500/20 transition-colors">
                <i className="fa-solid fa-code"></i>
                Go
              </span>
              <span className="tech-badge inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 hover:bg-purple-500/20 transition-colors">
                <i className="fa-solid fa-database"></i>
                PostgreSQL
              </span>
              <span className="tech-badge inline-flex items-center gap-2 rounded-full border border-red-600/30 bg-red-600/10 px-4 py-2 text-sm text-red-300 hover:bg-red-600/20 transition-colors">
                <i className="fa-solid fa-memory"></i>
                Redis
              </span>
              <span className="tech-badge inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-sm text-teal-300 hover:bg-teal-500/20 transition-colors">
                <i className="fa-solid fa-paint-brush"></i>
                Tailwind
              </span>
              <span className="tech-badge inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-300 hover:bg-orange-500/20 transition-colors">
                <i className="fa-brands fa-docker"></i>
                Docker
              </span>
              <span className="tech-badge inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-300 hover:bg-green-500/20 transition-colors">
                <i className="fa-solid fa-bolt"></i>
                WebSockets
              </span>
              <span className="tech-badge inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300 hover:bg-yellow-500/20 transition-colors">
                <i className="fa-solid fa-vial"></i>
                Testing
              </span>
              <span className="tech-badge inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300 hover:bg-indigo-500/20 transition-colors">
                <i className="fa-solid fa-chart-line"></i>
                Analytics
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Performance Metrics --> */}
      <section
        id="performance-metrics"
        className="py-20 md:py-28 bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Performance <span className="gradient-text">Metrics</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Real-world performance data from production applications,
              showcasing optimization and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* <!-- Lighthouse Score --> */}
            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-gauge-high text-white text-3xl"></i>
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">95+</div>
              <div className="text-slate-400 mb-4">
                Average Lighthouse Score
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">Performance</span>
                  <span className="text-green-400">95</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Accessibility</span>
                  <span className="text-green-400">98</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Best Practices</span>
                  <span className="text-green-400">92</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">SEO</span>
                  <span className="text-green-400">100</span>
                </div>
              </div>
            </div>

            {/* <!-- Load Time --> */}
            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-clock text-white text-3xl"></i>
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">2s</div>
              <div className="text-slate-400 mb-4">Average Load Time</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">First Paint</span>
                  <span className="text-blue-400">0.8s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">LCP</span>
                  <span className="text-blue-400">1.2s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">FID</span>
                  <span className="text-blue-400"> 100ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">CLS</span>
                  <span className="text-blue-400">0.05</span>
                </div>
              </div>
            </div>

            {/* <!-- Uptime --> */}
            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-server text-white text-3xl"></i>
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-slate-400 mb-4">System Uptime</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">Last 30 days</span>
                  <span className="text-purple-400">99.95%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Last 90 days</span>
                  <span className="text-purple-400">99.92%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Response Time</span>
                  <span className="text-purple-400">200ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Error Rate</span>
                  <span className="text-purple-400"> 0.1%</span>
                </div>
              </div>
            </div>

            {/* <!-- User Satisfaction --> */}
            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-heart text-white text-3xl"></i>
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">4.8/5</div>
              <div className="text-slate-400 mb-4">User Satisfaction</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">5 stars</span>
                  <span className="text-orange-400">78%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">4 stars</span>
                  <span className="text-orange-400">18%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">3 stars</span>
                  <span className="text-orange-400">3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Total Reviews</span>
                  <span className="text-orange-400">247</span>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Performance Philosophy --> */}
          <div className="glass rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-display font-bold mb-6">
              Performance Philosophy
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto mb-8">
              Every project is built with performance as a core principle. From
              optimized bundle sizes and efficient database queries to
              responsive design and accessibility compliance, I ensure that
              users have the best possible experience across all devices and
              network conditions.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-rocket text-white"></i>
                </div>
                <h4 className="font-display font-semibold mb-2">Speed First</h4>
                <p className="text-slate-400 text-sm">
                  Optimized code splitting, lazy loading, and efficient caching
                  strategies
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-universal-access text-white"></i>
                </div>
                <h4 className="font-display font-semibold mb-2">Accessible</h4>
                <p className="text-slate-400 text-sm">
                  WCAG compliance, semantic HTML, and comprehensive keyboard
                  navigation
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-mobile-alt text-white"></i>
                </div>
                <h4 className="font-display font-semibold mb-2">Responsive</h4>
                <p className="text-slate-400 text-sm">
                  Mobile-first design with progressive enhancement for larger
                  screens
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Call to Action --> */}
      <section id="cta" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            {/* <!-- Background Elements --> */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 blob animate-float"></div>
              <div
                className="absolute bottom-1/4 right-1/4 w-48 h-48 blob animate-float"
                style={{
                  animationDelay: "-2s",
                  background:
                    "radial-gradient(circle, rgba(249, 115, 22, 0.3) 0%, transparent 70%)",
                }}
              ></div>
            </div>

            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                Ready to Build Your{" "}
                <span className="gradient-text">Next Project?</span>
              </h2>

              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto mb-12">
                Let's collaborate to create exceptional web applications that
                solve real problems and deliver outstanding user experiences.
                I'm available for freelance projects and full-time
                opportunities.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <span className="magnetic bg-gradient-to-r from-violet-500 to-orange-500 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all cursor-pointer text-lg">
                  <i className="fa-solid fa-rocket mr-3"></i>
                  Start a Project
                </span>
                <span className="magnetic glass px-8 py-4 rounded-xl font-medium text-slate-200 hover:bg-white/10 transition-all cursor-pointer text-lg">
                  <i className="fa-solid fa-calendar mr-3"></i>
                  Schedule a Call
                </span>
                <span className="magnetic glass px-8 py-4 rounded-xl font-medium text-slate-200 hover:bg-white/10 transition-all cursor-pointer text-lg">
                  <i className="fa-solid fa-download mr-3"></i>
                  Download CV
                </span>
              </div>

              {/* <!-- Contact Options --> */}
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="fa-solid fa-envelope text-white text-2xl"></i>
                  </div>
                  <h3 className="font-display font-semibold mb-2">Email</h3>
                  <p className="text-slate-400 text-sm mb-3">
                    peter.robert.dev@gmail.com
                  </p>
                  <span className="text-violet-400 hover:text-violet-300 text-sm transition-colors cursor-pointer">
                    Send Message →
                  </span>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="fa-brands fa-linkedin text-white text-2xl"></i>
                  </div>
                  <h3 className="font-display font-semibold mb-2">LinkedIn</h3>
                  <p className="text-slate-400 text-sm mb-3">
                    Professional networking
                  </p>
                  <span className="text-violet-400 hover:text-violet-300 text-sm transition-colors cursor-pointer">
                    Connect →
                  </span>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="fa-brands fa-upwork text-white text-2xl"></i>
                  </div>
                  <h3 className="font-display font-semibold mb-2">Upwork</h3>
                  <p className="text-slate-400 text-sm mb-3">
                    Freelance projects
                  </p>
                  <span className="text-violet-400 hover:text-violet-300 text-sm transition-colors cursor-pointer">
                    View Profile →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer id="footer" className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* <!-- Left - Logo & Tagline --> */}
            <div>
              <div className="text-3xl font-display font-bold gradient-text mb-2">
                PR
              </div>
              <p className="text-slate-400 text-sm">
                Designed with ❤️ in Kenya
              </p>
            </div>

            {/* <!-- Center - Quick Links --> */}
            <div className="flex justify-center">
              <div className="flex flex-wrap gap-6 text-sm">
                <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Home
                </span>
                <span className="text-white cursor-pointer">Projects</span>
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

            {/* <!-- Right - Social & Copyright --> */}
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

export default ProjectPage;
