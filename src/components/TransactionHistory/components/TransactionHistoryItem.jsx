import React from "react";
import classes from "./TransactionHistoryItem.module.css";

const TransactionHistoryItem = (props) => {
  const { amount, currency, type } = props;
  return (
    <tr className={classes.tr}>
      <td className={classes.td}>{type}</td>
      <td className={classes.td}>{amount}</td>
      <td className={classes.td}>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;
