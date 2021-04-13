import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import SearchResults from "./SearchResults";

// sets number of results per page
const RESULTS_PER_PAGE = 20;

// styling
const SearchFlexContainer = styled.div`
  width: 90%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  @media (min-width: 400px) {
    width: 400px;
  }
`;

const SearchForm = styled.form`
  background-color: #242a2e;
  padding-bottom: 40px;
  margin-bottom: 50px;
`;

const SearchInput = styled.input`
  width: 200px;
  height: 30px;
  background-color: whitesmoke;
  font-family: "Roboto", sans-serif;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  @media (min-width: 500px) {
    width: 300px;
  }
`;

const SearchButton = styled.button`
  border-radius: 2em;
  border: 0.16em solid rgba(255, 255, 255, 0);
  background-color: #0366d6;
  padding: 0.3em 1.2em;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  color: whitesmoke;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  text-align: center;
  transition: all 0.2s;
  &:hover {
    border-color: rgba(255, 255, 255, 1);
  }
`;

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [results, setResults] = useState(null);
  const [page, setPage] = useState(1);

  const changeHandler = (e) => {
    setKeyword(e.target.value);
    setTotalResults(0);
    setResults(null);
  };

  const handleSearch = (e, page = 1) => {
    e.preventDefault();

    setPage(page);

    axios
      .get(
        `https://api.github.com/search/users?per_page=${RESULTS_PER_PAGE}&page=${page}&q=${keyword} in:login`
      )
      .then((response) => {
        console.log(response);
        setTotalResults(response.data.total_count);
        setResults(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <SearchForm onSubmit={handleSearch}>
        <SearchFlexContainer>
          <SearchInput
            value={keyword}
            type="text"
            onChange={changeHandler}
            placeholder="Enter username here..."
          />
          <SearchButton onClick={handleSearch}>Search</SearchButton>
        </SearchFlexContainer>
      </SearchForm>

      <SearchResults
        page={page}
        resultsPerPage={RESULTS_PER_PAGE}
        totalResults={totalResults}
        results={results}
        keyword={keyword}
        handleGoBack={(e) => handleSearch(e, Math.max(0, page - 1))}
        handleGoNext={(e) => handleSearch(e, page + 1)}
      />
    </div>
  );
};

export default SearchBar;
