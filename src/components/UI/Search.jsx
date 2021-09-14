import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [searchItem, setSearchItem] = useState("");

  const onChange = (q) => {
    setSearchItem(q);
    getQuery(q);
  };
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Characters"
          value={searchItem}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
