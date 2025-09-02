import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav
      id="header"
      className="sticky top-0 z-50 backdrop-blur-md bg-ink/80 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-display font-bold gradient-text">
              PR
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <span
              className="text-slate-300 hover:text-white transition-colors relative group cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
            </span>
            <span
              className="text-slate-300 hover:text-white transition-colors relative group cursor-pointer"
              onClick={() => navigate("/projects")}
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
            </span>

            <span
              className="text-slate-300 hover:text-white transition-colors relative group cursor-pointer"
              onClick={() => navigate("/about")}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
            </span>
            <span
              className="text-slate-300 hover:text-white transition-colors relative group cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="magnetic bg-gradient-to-r from-violet-500 to-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all cursor-pointer">
              Hire Me
            </span>
            <button className="p-2 text-slate-400 hover:text-white transition-colors">
              <i className="fa-solid fa-moon"></i>
            </button>
          </div>

          <button className="md:hidden p-2 text-slate-400 hover:text-white">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
