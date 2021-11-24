import React from "react";
import PropTypes from "prop-types";

import classes from "./TransactionHistoryItem.module.css";

const TransactionHistoryItem = ({ amount, currency, type }) => {
  return (
    <tr className={classes.tr}>
      <td className={classes.td}>{type}</td>
      <td className={classes.td}>{amount}</td>
      <td className={classes.td}>{currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  currency: PropTypes.string,
  type: PropTypes.string,
};

export default TransactionHistoryItem;
