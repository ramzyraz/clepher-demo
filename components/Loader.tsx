import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-32">
      <div className="w-8 h-8 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin dark:border-gray-700"></div>
    </div>
  );
};

export default Loader;
