import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const PageNavigator = styled.button`
  background: none;
  font-family: "Roboto", sans-serif;
  border: none;
  color: #242b2e;
  margin: 30px auto;
  padding: 0 40px;
  font-size: 1em;
`;

const PrevNextButtons = ({ handleGoBack, handleGoNext, page, totalPages }) => {
  return (
    <>
      {page > 1 && (
        <PageNavigator onClick={handleGoBack}>
          <span>◀︎</span> previous
        </PageNavigator>
      )}
      {page < totalPages && (
        <PageNavigator onClick={handleGoNext}>
          next <span>▶︎</span>
        </PageNavigator>
      )}
    </>
  );
};

PrevNextButtons.propTypes = {
  handleGoBack: PropTypes.func.isRequired,
  handleGoNext: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default PrevNextButtons;
