import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/UI/Header";
import CharacterGrid from "./components/character/CharacterGrid";
import Search from "./components/UI/Search";
import Pagination from "./components/Pagination";
import axios from "axios";
function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const postsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      // console.log(result);

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  //paginate
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={items.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
