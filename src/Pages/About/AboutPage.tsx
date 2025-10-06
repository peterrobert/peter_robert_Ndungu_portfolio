const AboutPage = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate frontend developer with over 5 years of experience
            creating digital experiences that matter
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              My Journey
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I started my journey in web development with a simple curiosity
              about how websites work. That curiosity evolved into a passion for
              creating beautiful, functional, and user-centric digital
              experiences. Over the years, I've had the privilege of working
              with startups, agencies, and established companies to bring their
              visions to life.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My approach combines technical expertise with creative
              problem-solving. I believe that great design isn't just about how
              something looks—it's about how it works, how it feels, and how it
              serves the people who use it.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new design trends,
              contributing to open-source projects, or sharing my knowledge
              through blog posts and community talks.
            </p>

            <div className="pt-6">
              <span className="bg-purple-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300 inline-flex items-center cursor-pointer">
                Download Resume
                <i className="fa-solid fa-download ml-2"></i>
              </span>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                Quick Facts
              </h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fa-solid fa-location-dot text-purple-primary mr-3"></i>
                  <span className="text-gray-700">San Francisco, CA</span>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-briefcase text-purple-primary mr-3"></i>
                  <span className="text-gray-700">5+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-graduation-cap text-purple-primary mr-3"></i>
                  <span className="text-gray-700">
                    Computer Science, Stanford
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-heart text-purple-primary mr-3"></i>
                  <span className="text-gray-700">UI/UX Enthusiast</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                Core Values
              </h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-primary rounded-full flex items-center justify-center mr-3 mt-1">
                    <i className="fa-solid fa-star text-white text-xs"></i>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">
                      Quality First
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Every line of code matters
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-primary rounded-full flex items-center justify-center mr-3 mt-1">
                    <i className="fa-solid fa-users text-white text-xs"></i>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">
                      User-Centric
                    </h5>
                    <p className="text-gray-600 text-sm">Design with empathy</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-primary rounded-full flex items-center justify-center mr-3 mt-1">
                    <i className="fa-solid fa-lightbulb text-white text-xs"></i>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Innovation</h5>
                    <p className="text-gray-600 text-sm">
                      Always learning, always growing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
