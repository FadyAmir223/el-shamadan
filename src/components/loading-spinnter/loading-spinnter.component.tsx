const LoadingSpinnter = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-t-4 border-blue-500 rounded-full animate-spin h-12 w-12"></div>
      <div className="ml-3 text-gray-700">Please wait...</div>
    </div>
  );
};

export default LoadingSpinnter;
