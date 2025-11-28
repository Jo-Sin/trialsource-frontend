const BarrierSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div style={{opacity: 1, transform: 'none'}}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Breaking Barriers to{" "}
              <span className="text-green-600">Medical Innovation</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Trialsource is on a mission to make clinical trials accessible to
              everyone, everywhere. We believe every person deserves the chance
              to benefit from medical breakthroughs.
            </p>
          </div>
          <div className="relative" style={{opacity: 1, transform: 'none'}}>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                alt="Diverse group of people representing inclusivity in healthcare"
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1689699207311-f262e0476dfc"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BarrierSection;
