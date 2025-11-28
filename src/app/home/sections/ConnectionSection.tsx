const ConnectionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-green-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="500" r="300" fill="#10b981"></circle>
          <circle cx="900" cy="500" r="300" fill="#fbbf24"></circle>
        </svg>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div
          className="text-center max-w-3xl mx-auto"
          style={{opacity: 1, transform: 'none'}}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Every Connection Could{" "}
            <span className="text-green-600">Save a Life</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Behind every clinical trial is a story of hope. Trialsource bridges
            the gap between groundbreaking research and the people who need it
            most. Together, we're creating a future where medical innovation
            reaches everyone.
          </p>
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <p className="text-lg text-gray-700 italic leading-relaxed">
              "Access to clinical trials shouldn't be a privilege. It should be
              a right. Every patient deserves the opportunity to explore new
              treatments and contribute to medical progress."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectionSection;
