import { NavLink } from "react-router-dom";
import { FaHeart, FaStar, FaArrowRight } from "react-icons/fa";

const AdventureCard = ({ adventures }) => {
  const { id, title, image, ecoFriendlyFeatures } = adventures;
  return (
    <div className="h-full group">
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col border border-gray-100">
        {/* Image Section with Overlay */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 sm:h-52 md:h-60 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Eco Badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            <span className="flex items-center">
              <FaHeart className="w-3 h-3 mr-1" />
              Eco-Friendly
            </span>
          </div>

          {/* Quick View Button - appears on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <NavLink
              to={`/adventure/${id}`}
              className="bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-white shadow-lg"
            >
              Quick View
            </NavLink>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
          {/* Title */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-700 transition-colors duration-300">
            {title}
          </h2>

          {/* Features Section */}
          <div className="flex-grow mb-4">
            <div className="space-y-2">
              {ecoFriendlyFeatures.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
              {ecoFriendlyFeatures.length > 3 && (
                <div className="flex items-center space-x-2 mt-2">
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-600">
                      +{ecoFriendlyFeatures.length - 3}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 italic">
                    more eco-features
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Action Section */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[1, 2, 3, 5].map((star) => (
                  <FaStar key={star} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-500">4.9</span>
            </div>

            <NavLink
              to={`/adventure/${id}`}
              className="group/btn bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center space-x-2"
            >
              <span>Explore Now</span>
              <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </NavLink>
          </div>
        </div>

        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400/0 via-emerald-400/0 to-blue-400/0 group-hover:from-green-400/10 group-hover:via-emerald-400/10 group-hover:to-blue-400/10 transition-all duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default AdventureCard;
