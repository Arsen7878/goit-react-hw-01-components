import React from "react";
import PropTypes from "prop-types";

import classes from "./StatListItem.module.css";

const StatListItem = ({ id, label, percentage, background }) => {
  return (
    <li className={classes.item} key={id} style={{ background: background }}>
      <span className={classes.label}>{label}</span>
      <span className={classes.percentage}>{percentage}</span>
    </li>
  );
};

StatListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  percentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  background: PropTypes.string,
};

export default StatListItem;
