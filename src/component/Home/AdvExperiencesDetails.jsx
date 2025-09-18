import { useLoaderData, useParams } from "react-router-dom";
import ErrorPage from "../ErrorPage";

const AdvExperiencesDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const adventure = data.find((item) => item.id.toString() === id);
  const {
    title,
    image,
    category,
    shortDescription,
    cost,
    bookingAvailability,
    location,
    duration,
    adventureLevel,
    includedItems,
    ecoFriendlyFeatures,
    maxGroupSize,
    specialInstructions,
  } = adventure;

  const handleTalkWithExpart = () => {
    const now = new Date();
    const hour = now.getHours();
    if (hour >= 10 && hour <= 20) {
      window.open("https://meet.google.com/bxp-xzyo-tme");
    } else {
      document.getElementById("my_modal_5").showModal();
    }
  };

  if (!adventure) {
    return <ErrorPage />;
  }

  console.log(adventure);
  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 bg-green-50 rounded-2xl shadow-lg">
        {/* Image */}
        <div className="w-full h-64 md:h-96 overflow-hidden rounded-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Title & Category */}
        <div className="mt-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {title}
          </h1>
          <p className="text-lg text-green-600 font-semibold mt-2">
            {category}
          </p>
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-600">{shortDescription}</p>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Location:</span> {location}
            </p>
            <p>
              <span className="font-semibold">Duration:</span> {duration}
            </p>
            <p>
              <span className="font-semibold">Level:</span> {adventureLevel}
            </p>
            <p>
              <span className="font-semibold">Cost:</span> ${cost}
            </p>
            <p>
              <span className="font-semibold">Availability:</span>{" "}
              {bookingAvailability ? (
                <span className="text-green-600 font-medium">Open</span>
              ) : (
                <span className="text-red-600 font-medium">Closed</span>
              )}
            </p>
            <p>
              <span className="font-semibold">Max Group Size:</span>{" "}
              {maxGroupSize}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Included Items:</h2>
            <ul className="list-disc list-inside text-gray-700">
              {includedItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h2 className="text-lg font-semibold mt-4 mb-2">
              Eco-Friendly Features:
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              {ecoFriendlyFeatures.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Special Instructions */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Special Instructions:</h2>
          <ul className="list-disc list-inside text-gray-700">
            {specialInstructions.map((inst, i) => (
              <li key={i}>{inst}</li>
            ))}
          </ul>
        </div>
        <div className="py-4">
          <button
            className="btn bg-green-600 text-white font-semibold"
            onClick={handleTalkWithExpart}
          >
            Talk with Expert
          </button>

          {/* Modal section  */}
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Consultation Unavailable</h3>
              <p className="py-4">
                Our experts are available only between{" "}
                <span className="font-semibold">10:00 AM – 8:00 PM</span>.
                Please come back during these hours for a live consultation.
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default AdvExperiencesDetails;
