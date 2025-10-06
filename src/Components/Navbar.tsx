const Navbar = () => {
  return (
    <header
      id="header"
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">Peter Robert</div>
          <div className="hidden md:flex space-x-8">
            <span className="text-gray-700 hover:text-purple-primary transition-colors duration-300 font-medium cursor-pointer">
              Home
            </span>
            <span className="text-gray-700 hover:text-purple-primary transition-colors duration-300 font-medium cursor-pointer">
              About
            </span>
            <span className="text-gray-700 hover:text-purple-primary transition-colors duration-300 font-medium cursor-pointer">
              Projects
            </span>
            <span className="text-gray-700 hover:text-purple-primary transition-colors duration-300 font-medium cursor-pointer">
              Skills
            </span>
            <span className="text-gray-700 hover:text-purple-primary transition-colors duration-300 font-medium cursor-pointer">
              Experience
            </span>
            <span className="text-gray-700 hover:text-purple-primary transition-colors duration-300 font-medium cursor-pointer">
              Testimonials
            </span>
            <span className="text-gray-700 hover:text-purple-primary transition-colors duration-300 font-medium cursor-pointer">
              Blog
            </span>
            <span className="text-gray-700 hover:text-purple-primary transition-colors duration-300 font-medium cursor-pointer">
              Contact
            </span>
          </div>
          <button className="md:hidden text-gray-700">
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
