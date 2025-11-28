const HowItWorksSection = () => {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-gradient-to-br from-green-50 to-yellow-50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" style={{opacity: 1, transform: 'none'}}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            From Search to Connection —{" "}
            <span className="text-green-600">Made Simple</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            style={{opacity: 1, transform: 'none'}}
          >
            <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-green-600"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Discover</h3>
            <p className="text-gray-600 leading-relaxed">
              Search verified clinical trials by condition or location.
            </p>
          </div>
          <div
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            style={{opacity: 1, transform: 'none'}}
          >
            <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-yellow-500"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                <path d="M5 3v4"></path>
                <path d="M19 17v4"></path>
                <path d="M3 5h4"></path>
                <path d="M17 19h4"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Match</h3>
            <p className="text-gray-600 leading-relaxed">
              AI helps identify studies that may suit your health profile.
            </p>
          </div>
          <div
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            style={{opacity: 1, transform: 'none'}}
          >
            <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-green-600"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect</h3>
            <p className="text-gray-600 leading-relaxed">
              Get in touch with research teams securely and confidently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
