const HomePage = () => {
  return (
    <section
      id="hero"
      className="h-[800px] bg-gradient-to-br from-purple-50 to-white flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-purple-300 rounded-full opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-10"></div>
      </div>

      <div className="text-center z-10 px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-primary to-pink-500 p-1 mx-auto mb-6">
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
              alt="Peter Robert"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-primary to-pink-500 bg-clip-text text-transparent">
            Peter Robert
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
          Frontend Developer & Builder of Beautiful Interfaces
        </p>

        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          I craft digital experiences that blend aesthetic beauty with
          functional excellence, transforming ideas into interactive realities
          that users love.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <span className="bg-gradient-to-r from-purple-primary to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center cursor-pointer">
            View My Work
            <i className="fa-solid fa-arrow-right ml-2"></i>
          </span>
          <span className="border-2 border-purple-primary text-purple-primary px-8 py-4 rounded-full font-semibold hover:bg-purple-primary hover:text-white transition-all duration-300 inline-flex items-center cursor-pointer">
            Get In Touch
            <i className="fa-solid fa-envelope ml-2"></i>
          </span>
        </div>

        <div className="mt-16 flex justify-center space-x-8">
          <span className="text-gray-400 hover:text-purple-primary transition-colors duration-300 cursor-pointer">
            <i className="fa-brands fa-github text-2xl"></i>
          </span>
          <span className="text-gray-400 hover:text-purple-primary transition-colors duration-300 cursor-pointer">
            <i className="fa-brands fa-linkedin text-2xl"></i>
          </span>
          <span className="text-gray-400 hover:text-purple-primary transition-colors duration-300 cursor-pointer">
            <i className="fa-brands fa-twitter text-2xl"></i>
          </span>
          <span className="text-gray-400 hover:text-purple-primary transition-colors duration-300 cursor-pointer">
            <i className="fa-brands fa-dribbble text-2xl"></i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
