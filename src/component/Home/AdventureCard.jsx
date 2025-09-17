const AdventureCard = ({ adventures }) => {
  const { title, image, ecoFriendlyFeatures } = adventures;
  return (
    <div>
      <div className="card bg-base-100 shadow-2xl">
        <figure className="px-5 pt-5 ">
          <img src={image} alt={title} className="w-11/12 h-56 rounded-2xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <ul>
            {ecoFriendlyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureCard;
