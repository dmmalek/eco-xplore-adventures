import { useLoaderData } from "react-router-dom";
import AdventureCard from "./AdventureCard";

const AdvExperiences = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>Adventure Experiences Section</h1>
      <div className="grid grid-cols-3 gap-4">
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
