import React from "react";
import Statlist from "./components/Statlist/Statlist";
import classes from "./Statistics.module.css";

const Statistics = (props) => {
  const { title, stats } = props;

  return (
    <section className={classes.statistics}>
      {title && <h2 className={classes.title}>{title}</h2>}

      <Statlist stats={stats} />
    </section>
  );
};

export default Statistics;
