import React from "react";
import PropTypes from "prop-types";

import TransactionHistoryItem from "./components/TransactionHistoryItem";
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
          <TransactionHistoryItem
            type={el.type}
            amount={el.amount}
            currency={el.currency}
            key={el.id}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionHistory;
