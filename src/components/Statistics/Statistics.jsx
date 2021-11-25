import React from "react";
import PropTypes from "prop-types";
import { getBgColor } from "../../js/functions";

import StatListItem from "./components/StatlistItem/StatListItem";

import classes from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={classes.statistics}>
      {title && <h2 className={classes.title}>{title}</h2>}
      <ul className={classes.statList}>
        {stats.map((el) => (
          <li
            className={classes.item}
            key={el.id}
            style={{ background: getBgColor() }}
          >
            <StatListItem
              key={el.id}
              label={el.label}
              percentage={el.percentage}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};

export default Statistics;
