import React from "react";
import PropTypes from "prop-types";
import StatListItem from "../StatlistItem/StatListItem";
import classes from "./Statlist.module.css";

const Statlist = ({ stats }) => {
  function getRandomArbitrary(max) {
    return Math.floor(Math.random() * max);
  }

  function getBgColor() {
    const r = getRandomArbitrary(255);
    const g = getRandomArbitrary(255);
    const b = getRandomArbitrary(255);

    return `rgb(${r},${g},${b})`;
  }
  return (
    <ul className={classes.statList}>
      {stats.map((el) => (
        <StatListItem
          key={el.id}
          label={el.label}
          percentage={el.percentage}
          background={getBgColor()}
        />
      ))}
    </ul>
  );
};

Statlist.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object),
};

export default Statlist;
