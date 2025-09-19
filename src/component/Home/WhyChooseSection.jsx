import React, { useEffect, useState } from "react";

const WhyChooseSection = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch("/features.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFeatures(data);
      });
  }, []);

  return (
    <div className="py-16 bg-green-50 ">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Why Choose Eco Xplore Adventures
        </h2>
        <p className="text-base md:text-xl w-4/5 mx-auto">
          We're not just another tour operator. Eco Xplore Adventures exists to
          connect you with Earth's last true wild places through authentic
          journeys that create lasting impact. Discover why travelers choose us
          for their most meaningful adventures.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Image */}
              {feature.image && (
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {feature.points.map((point, index) => (
                    <li key={index}>{point}</li>
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
