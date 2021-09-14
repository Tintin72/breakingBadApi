import React from "react";
import "../App.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      {pageNumbers.map((number, idx) => (
        <a key={idx} onClick={() => paginate(number)} href="!#">
          {number}
        </a>
      ))}
    </div>
  );
};

export default Pagination;
