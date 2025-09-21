import { useLoaderData } from "react-router-dom";
import AdventureCard from "./AdventureCard";

const AdvExperiences = () => {
  const data = useLoaderData();
  return (
    <div className="bg-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Adventure Experiences
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing eco-friendly adventures that connect you with
            nature while preserving our planet
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {data.map((adventures) => (
            <AdventureCard key={adventures.id} adventures={adventures} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvExperiences;
