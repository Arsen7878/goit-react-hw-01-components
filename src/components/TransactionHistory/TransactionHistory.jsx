import React from "react";
import TransactionHistoryItem from "./components/TransactionHistoryItem";
import classes from "./TransactionHistory.module.css";

const TransactionHistory = (props) => {
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
        {props.items.map((el) => (
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

export default TransactionHistory;
