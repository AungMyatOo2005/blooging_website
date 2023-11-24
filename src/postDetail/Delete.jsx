import React from "react";

const Delete = ({ setDeleteBox }) => {
  return (
    <div className="min-h-screen absolute flex items-center justify-center z-[5] bg-opacity w-full top-0">
      <div className="flex gap-5 bg-gray-900 py-16 px-10 rounded-md">
        <button
          className="text-white w-[130px] bg-green-500 rounded-sm py-1"
          onClick={() => setDeleteBox((prev) => !prev)}
        >
          Cancel
        </button>
        <button className="text-white w-[130px] bg-red-500 rounded-sm py-1">
          Confirm Delete
        </button>
      </div>
    </div>
  );
};

export default Delete;
