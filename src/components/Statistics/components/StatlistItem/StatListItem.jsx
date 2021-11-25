import React from "react";
import PropTypes from "prop-types";

const StatListItem = ({ id, label, percentage, background }) => {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </>
  );
};

StatListItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
  background: PropTypes.string,
};

export default StatListItem;
