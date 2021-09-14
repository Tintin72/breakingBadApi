import React from "react";

const PageDrop = ({ currentPage, totalPosts, postsPerPage, setPage }) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="dropdown">
      <select value={currentPage} onChange={(e) => setPage(e.target.value)}>
        {pages.map((page, idx) => (
          <option key={idx} value={page}>
            {page}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PageDrop;
