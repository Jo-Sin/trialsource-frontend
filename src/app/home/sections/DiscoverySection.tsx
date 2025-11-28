const DiscoverySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div
          className="text-center max-w-3xl mx-auto"
          style={{opacity: 1, transform: "none"}}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Take the First Step Toward{" "}
            <span className="text-yellow-500">Discovery</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-10">
            {`Whether you're exploring options for yourself or a loved one,
            Trialsource is here to guide you. Start your journey today and
            discover the possibilities that await.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="inline-flex items-center justify-center font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Find a Trial Near You
            </button>
            <button className="inline-flex items-center justify-center font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:text-accent-foreground h-10 border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-8 py-6 text-lg rounded-full shadow-md hover:shadow-lg transition-all duration-300">
              Subscribe for Updates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverySection;
