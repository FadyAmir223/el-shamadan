const LoadingSpinnter = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black/90">
      <div className="border-t-4 border-blue-500 rounded-full animate-spin h-12 w-12"></div>
      <p className="ml-3 text-gray-200">Please wait...</p>
    </div>
  );
};

export default LoadingSpinnter;
