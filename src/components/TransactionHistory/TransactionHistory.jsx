import React from "react";
import PropTypes from "prop-types";

import classes from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={classes.transactionHistory}>
      <thead className={classes.thead}>
        <tr>
          <th className={classes.th}>Type</th>
          <th className={classes.th}>Amount</th>
          <th className={classes.th}>Currency</th>
        </tr>
      </thead>

      <tbody className={classes.tbody}>
        {items.map((el) => (
          <tr className={classes.tr} key={el.id}>
            <td className={classes.td}>{el.type}</td>
            <td className={classes.td}>{el.amount}</td>
            <td className={classes.td}>{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionHistory;
