const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-blue-50 px-4">
      <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-green-500 border-dashed rounded-full animate-spin mb-4"></div>
      <p className="text-green-600 font-medium text-sm sm:text-base animate-pulse">
        Loading your eco adventure...
      </p>
    </div>
  );
};

export default Loading;
