import React from "react";
import PropTypes from "prop-types";
import Statlist from "./components/Statlist/Statlist";
import classes from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={classes.statistics}>
      {title && <h2 className={classes.title}>{title}</h2>}

      <Statlist stats={stats} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};

export default Statistics;
