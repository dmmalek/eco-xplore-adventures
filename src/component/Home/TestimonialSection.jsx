import React, { useEffect, useState } from "react";

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
    // .catch((err) => console.error("Failed to load testimonials:", err));
  }, []);

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 text-gray-800">
          What Our Travelers Say
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto">
          Hear from adventurers who have experienced the magic of eco-friendly
          travel
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="flex flex-col items-center flex-grow">
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mb-3 sm:mb-4 object-cover border-4 border-green-100"
                  />
                )}
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
                  {testimonial.location}
                </p>
                <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed flex-grow">
                  "{testimonial.feedback}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
