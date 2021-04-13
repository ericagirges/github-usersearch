import React from "react";
import "./App.css";
import styled from "styled-components";
import SearchBar from "./components/SearchBar";

const Header = styled.header`
  height: 100px;
  background-color: #242a2e;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled.h1`
  font-family: "Roboto";
  font-weight: 700;
  color: white;
  font-size: 2em;
  @media (min-width: 600px) {
    font-size: 3em;
  }
`;

function App() {
  return (
    <div className="App">
      <Header>
        <StyledTitle>GitHub User Search</StyledTitle>
      </Header>
      <SearchBar />
    </div>
  );
}

export default App;
