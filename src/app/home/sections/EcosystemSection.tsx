const EcosystemSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-6">
        <div
          className="text-center max-w-3xl mx-auto"
          style={{opacity: 1, transform: 'none'}}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Part of the <span className="text-green-600">Trialio Ecosystem</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Trialsource is powered by{" "}
            <a
              href="https://trialio.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 font-semibold underline"
            >
              Trialio
            </a>
            , an AI-driven research platform that helps sites and sponsors
            accelerate trial recruitment. Together, we're transforming how
            clinical research connects with the people who need it most.
          </p>
          <div className="inline-block bg-white rounded-2xl px-8 py-4 shadow-lg">
            <span className="text-2xl font-bold text-gray-900">Trialio</span>
            <span className="text-gray-400 mx-2">×</span>
            <span className="text-2xl font-bold text-green-600">Trialsource</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
