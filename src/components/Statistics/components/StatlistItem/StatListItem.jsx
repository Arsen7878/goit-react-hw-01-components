import React from "react";
import classes from "./StatListItem.module.css";

const StatListItem = (props) => {
  const { id, label, percentage, background } = props;
  return (
    <li className={classes.item} key={id} style={{ background: background }}>
      <span className={classes.label}>{label}</span>
      <span className={classes.percentage}>{percentage}</span>
    </li>
  );
};

export default StatListItem;
