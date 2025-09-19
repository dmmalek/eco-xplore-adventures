import { NavLink } from "react-router-dom";

const AdventureCard = ({ adventures }) => {
  const { id, title, image, ecoFriendlyFeatures } = adventures;
  return (
    <div>
      <div className="card bg-base-100 shadow-2xl">
        <figure className=" pt-5 ">
          <img src={image} alt={title} className="w-11/12 h-56 rounded-2xl" />
        </figure>
        <div className="card-body  items-start text-left">
          <h2 className="card-title ">{title}</h2>
          <div>
            <ul>
              {ecoFriendlyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="card-actions">
            <NavLink
              to={`/adventure/${id}`}
              className="btn bg-green-600 hover:bg-green-700 text-white"
            >
              Explore Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureCard;
