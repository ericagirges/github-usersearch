import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import UserCard from "./UserCard";
import PrevNextButtons from "./PrevNextButtons";

const TotalResults = styled.p`
  margin-bottom: 20px;
  font-family: "Roboto";
  font-style: italic;
  font-weight: 300;
`;

const SearchResults = (props) => {
  // if results are explicitly null, then no search has been performed
  if (props.results === null) {
    return null;
  }

  const currentResultRange = props.resultsPerPage * (props.page - 1);
  const totalPages = props.totalResults / props.resultsPerPage;

  return (
    <div>
      <TotalResults>
        Showing {currentResultRange + 1}-
        {currentResultRange + props.results.length} of {props.totalResults}{" "}
        result{props.totalResults === 1 ? "" : "s"}
      </TotalResults>

      <PrevNextButtons
        handleGoBack={props.handleGoBack}
        handleGoNext={props.handleGoNext}
        page={props.page}
        totalPages={totalPages}
      />

      {props.results.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}

      <PrevNextButtons
        handleGoBack={props.handleGoBack}
        handleGoNext={props.handleGoNext}
        page={props.page}
        totalPages={totalPages}
      />
    </div>
  );
};

SearchResults.propTypes = {
  results: PropTypes.array,
  handleGoBack: PropTypes.func.isRequired,
  handleGoNext: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number,
  totalResults: PropTypes.number.isRequired,
  resultsPerPage: PropTypes.number.isRequired,
};

export default SearchResults;
