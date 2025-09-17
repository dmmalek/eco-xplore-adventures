import { useLoaderData } from "react-router-dom";
import AdventureCard from "./AdventureCard";

const AdvExperiences = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 bg-green-50 py-4">
        {data.map((adventures) => (
          <AdventureCard
            key={adventures.id}
            adventures={adventures}
          ></AdventureCard>
        ))}
      </div>
    </div>
  );
};

export default AdvExperiences;
