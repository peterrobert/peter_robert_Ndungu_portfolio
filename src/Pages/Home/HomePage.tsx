import photoImage from "../../../public/peter_image.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";

const HomePage = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* <!-- Background Blobs --> */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 blob animate-float"></div>
        <div
          style={{
            animationDelay: "-2s",
            background:
              "radial-gradient(circle, rgba(249, 115, 22, 0.3) 0%, transparent 70%)",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 blob animate-float"
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
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* <!-- Left Column - Content --> */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-dot"></div>
              <span className="text-sm text-slate-300">
                Currently building → Feedback Box
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Hi, I'm <span className="gradient-text">Peter Robert</span> —
                Frontend & Full‑Stack Developer.
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                I craft modern, performant web apps with{" "}
                <span className="text-violet-400 font-medium">
                  React/Next.js/TypeScript
                </span>
                , build APIs with{" "}
                <span className="text-orange-400 font-medium">
                  Ruby on Rails
                </span>
                , and I'm learning{" "}
                <span className="text-teal-400 font-medium">Go</span> for
                scalable backends.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="magnetic bg-gradient-to-r from-violet-500 to-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all cursor-pointer">
                View Projects
              </span>
              <span className="magnetic glass px-8 py-3 rounded-lg font-medium text-slate-200 hover:bg-white/10 transition-all gradient-border cursor-pointer">
                <div className="gradient-border-inner px-8 py-3 rounded-lg">
                  Download CV
                </div>
              </span>
            </div>

            <div className="flex space-x-6 pt-4">
              <span
                className="text-slate-400 hover:text-violet-400 transition-colors text-xl cursor-pointer"
                onClick={() =>
                  window.open("https://github.com/peterrobert", "_blank")
                }
              >
                <GitHubIcon />
              </span>
              <span
                className="text-slate-400 hover:text-violet-400 transition-colors text-xl cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/peterrobertndungu",
                    "_blank"
                  )
                }
              >
                <LinkedInIcon />
              </span>
              <span
                className="text-slate-400 hover:text-violet-400 transition-colors text-xl cursor-pointer"
                onClick={() =>
                  window.open("mailto:pwambui93@gmail.com", "_blank")
                }
              >
                <EmailIcon />
              </span>
              <span
                className="text-slate-400 hover:text-violet-400 transition-colors text-xl cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.upwork.com/freelancers/~01f1e3809fc80b9dd0",
                    "_blank"
                  )
                }
              >
                <WorkIcon />
              </span>
            </div>
          </div>

          {/* <!-- Right Column - Photo --> */}
          <div className="relative">
            <div className="relative">
              {/* <!-- Main Photo Container --> */}
              <div className="gradient-border animate-tilt">
                <div className="gradient-border-inner p-1">
                  <div className="glass rounded-xl overflow-hidden shadow-2xl">
                    <img
                      className="w-full h-[500px] object-cover"
                      src={photoImage}
                      alt="professional portrait of a young Black male software developer from Kenya, confident smile, modern casual attire, clean studio lighting, high quality headshot"
                    />
                  </div>
                </div>
              </div>

              {/* <!-- Floating Badges --> */}
              <div className="absolute -top-4 -right-4 glass rounded-lg px-3 py-2 animate-float">
                <span className="text-sm font-medium text-violet-400">
                  React / TypeScript
                </span>
              </div>
              <div
                className="absolute -bottom-4 -left-4 glass rounded-lg px-3 py-2 animate-float"
                style={{
                  animationDelay: "-1s",
                }}
              >
                <span className="text-sm font-medium text-orange-400">
                  Rails APIs
                </span>
              </div>
              <div
                className="absolute top-1/2 -right-8 glass rounded-lg px-3 py-2 animate-float"
                style={{
                  animationDelay: "-2s",
                }}
              >
                <span className="text-sm font-medium text-teal-400">
                  Learning Go
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
