const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-yellow-50 to-white">
      <div className="absolute inset-0 opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "rgb(16, 185, 129)", stopOpacity: 0.3 }}
              ></stop>
              <stop
                offset="100%"
                style={{ stopColor: "rgb(251, 191, 36)", stopOpacity: 0.3 }}
              ></stop>
            </linearGradient>
          </defs>
          <circle cx="200" cy="200" r="150" fill="url(#grad1)"></circle>
          <circle cx="800" cy="300" r="200" fill="url(#grad1)"></circle>
          <circle cx="600" cy="700" r="180" fill="url(#grad1)"></circle>
        </svg>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div
          className="text-center max-w-4xl mx-auto"
          style={{opacity: 1, transform: 'none'}}
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
            style={{opacity: 1, transform: 'none'}}
          >
            Everyone Deserves Access to{" "}
            <span className="text-green-600">Life-Saving</span>{" "}
            <span className="text-yellow-500">Clinical Trials</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-600 mb-10"
            style={{opacity: 1, transform: 'none'}}
          >
            Trialsource helps you discover clinical trials that could change
            your life — safely, simply, and in plain language.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{opacity: 1, transform: 'none'}}
          >
            <button className="inline-flex items-center justify-center font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Find a Trial
            </button>
            <button className="inline-flex items-center justify-center font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-6 text-lg rounded-full shadow-md hover:shadow-lg transition-all duration-300">
              Learn How It Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
