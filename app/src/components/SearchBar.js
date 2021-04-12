import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
// components
import SearchResults from "./SearchResults";

const SearchField = styled.div`
    background-color: #242a2e;
    padding-bottom: 40px;
    margin-bottom: 50px;
`;

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [lastQuery, setLastQuery] = useState("");
  const [results, setResults] = useState([]);

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/search/users?q=${query} in:login`)
      .then((response) => {
        console.log(response);
        setResults(response.data.items);
        setLastQuery(query);
      })
      .catch((error) => {
        console.log(error);
      });
    setQuery("");
  };

  console.log("RESULT", results);

  return (
    <div>
      <SearchField>
        <input
          value={query}
          type="text"
          onChange={changeHandler}
          placeholder="Enter username here..."
        ></input>
        <button onClick={handleSubmit}>Search</button>
      </SearchField>
      <SearchResults results={results} keyword={lastQuery} />
    </div>
  );
};

export default SearchBar;
