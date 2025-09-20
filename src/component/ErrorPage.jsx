import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mountain, Compass, Home } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-200 via-teal-100 to-blue-200 p-4 sm:p-6 relative overflow-hidden">
      {/* Animated Icon */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="mb-4 sm:mb-6"
      >
        <Mountain className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-green-700 drop-shadow-lg" />
      </motion.div>

      {/* Error Text */}
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-800 drop-shadow-lg"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-700 text-center max-w-xs sm:max-w-md lg:max-w-lg px-4"
      >
        Oops! Looks like you wandered off the trail. This page doesn't exist in
        your eco-adventure journey.
      </motion.p>

      {/* Animated Button */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 sm:mt-8"
      >
        <Link
          to="/"
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
        >
          <Home className="w-4 h-4 sm:w-5 sm:h-5" />
          Back to Home
        </Link>
      </motion.div>

      {/* Animated Compass */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-10 md:right-10 opacity-70"
      >
        <Compass className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-teal-600" />
      </motion.div>
    </div>
  );
};

export default ErrorPage;
