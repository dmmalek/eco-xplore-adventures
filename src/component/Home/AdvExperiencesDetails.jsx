import { useLoaderData, useParams } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import { FaCommentDots } from "react-icons/fa";

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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-4 sm:py-6 md:py-8">
      <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg">
        {/* Image */}
        <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg sm:rounded-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Title & Category */}
        <div className="mt-4 sm:mt-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-green-600 font-semibold mt-2">
            {category}
          </p>
        </div>

        {/* Description */}
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
          {shortDescription}
        </p>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
          <div className="bg-green-50 p-4 sm:p-6 rounded-lg space-y-3">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
              Adventure Details
            </h2>
            <div className="space-y-2 text-sm sm:text-base">
              <p className="flex flex-col sm:flex-row">
                <span className="font-semibold text-gray-700 min-w-24">
                  Location:
                </span>
                <span className="text-gray-600">{location}</span>
              </p>
              <p className="flex flex-col sm:flex-row">
                <span className="font-semibold text-gray-700 min-w-24">
                  Duration:
                </span>
                <span className="text-gray-600">{duration}</span>
              </p>
              <p className="flex flex-col sm:flex-row">
                <span className="font-semibold text-gray-700 min-w-24">
                  Level:
                </span>
                <span className="text-gray-600">{adventureLevel}</span>
              </p>
              <p className="flex flex-col sm:flex-row">
                <span className="font-semibold text-gray-700 min-w-24">
                  Cost:
                </span>
                <span className="text-green-600 font-bold text-lg">
                  ${cost}
                </span>
              </p>
              <p className="flex flex-col sm:flex-row">
                <span className="font-semibold text-gray-700 min-w-24">
                  Availability:
                </span>
                {bookingAvailability ? (
                  <span className="text-green-600 font-medium bg-green-100 px-2 py-1 rounded-full text-sm">
                    Open
                  </span>
                ) : (
                  <span className="text-red-600 font-medium bg-red-100 px-2 py-1 rounded-full text-sm">
                    Closed
                  </span>
                )}
              </p>
              <p className="flex flex-col sm:flex-row">
                <span className="font-semibold text-gray-700 min-w-24">
                  Max Group:
                </span>
                <span className="text-gray-600">{maxGroupSize} people</span>
              </p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
              <h2 className="text-base sm:text-lg font-semibold mb-3 text-gray-800">
                Included Items
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
                {includedItems.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-emerald-50 p-4 sm:p-6 rounded-lg">
              <h2 className="text-base sm:text-lg font-semibold mb-3 text-gray-800">
                Eco-Friendly Features
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
                {ecoFriendlyFeatures.map((feature, i) => (
                  <li key={i} className="leading-relaxed">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Special Instructions */}
        <div className="mt-4 sm:mt-6 bg-yellow-50 p-4 sm:p-6 rounded-lg">
          <h2 className="text-base sm:text-lg font-semibold mb-3 text-gray-800">
            Special Instructions
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
            {specialInstructions.map((inst, i) => (
              <li key={i} className="leading-relaxed">
                {inst}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <div className="mt-6 sm:mt-8 text-center">
          <button
            className="btn bg-gradient-to-r from-green-600 to-teal-500 hover:from-green-700 hover:to-teal-600 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold shadow-lg transition-all duration-200 w-full sm:w-auto"
            onClick={handleTalkWithExpart}
          >
            <FaCommentDots className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Talk with Expert
          </button>
        </div>

        {/* Modal section */}
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box max-w-sm sm:max-w-md">
            <h3 className="font-bold text-lg sm:text-xl text-gray-800">
              Consultation Unavailable
            </h3>
            <p className="py-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              Our experts are available only between{" "}
              <span className="font-semibold text-green-600">
                10:00 AM – 8:00 PM
              </span>
              . Please come back during these hours for a live consultation.
            </p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-2 text-sm sm:text-base">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default AdvExperiencesDetails;
