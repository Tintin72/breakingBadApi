import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "../UI/Spinner";
const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item, idx) => (
        <CharacterItem key={idx} item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
