import React, { useEffect, useState } from "react";

const WhyChooseSection = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch("/features.json")
      .then((res) => res.json())
      .then((data) => {
        setFeatures(data);
      });
  }, []);

  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Why Choose Eco Xplore Adventures
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto leading-relaxed">
            We're not just another tour operator. Eco Xplore Adventures exists
            to connect you with Earth's last true wild places through authentic
            journeys that create lasting impact. Discover why travelers choose
            us for their most meaningful adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col"
            >
              {/* Image */}
              {feature.image && (
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover"
                />
              )}

              <div className="p-4 sm:p-6 text-left flex-grow">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  {feature.points.map((point, index) => (
                    <li key={index} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
