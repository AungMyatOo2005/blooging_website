import React, { useContext } from "react";
import { ConditionContext } from "../../context/ConditionContext";

const Pagination = ({
  totalPosts,
  currentPage,
  setCurrentPage,
  postPerPage,
}) => {
  const { isDarkMode } = useContext(ConditionContext);
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex items-center mb-5 gap-1">
      {pages.map((page) => (
        <button
          className={` border  ${
            isDarkMode ? "border-white" : "border-black"
          } px-2 ${
            isDarkMode
              ? `text-white ${
                  currentPage === page && "bg-slate-500 text-white"
                }`
              : `text-black ${
                  currentPage === page && "bg-slate-700 text-white"
                }`
          }`}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
