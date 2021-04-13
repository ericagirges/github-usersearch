import React from "react";
import PropTypes from "prop-types";

const PrevNextButtons = ({ handleGoBack, handleGoNext, page, totalPages }) => {
  return (
    <>
      {page > 1 && <button onClick={handleGoBack}>previous</button>}
      {page < totalPages && <button onClick={handleGoNext}>next</button>}
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
