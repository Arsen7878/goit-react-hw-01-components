import React from "react";
import PropTypes from "prop-types";

import classes from "./FriendListItem.module.css";

const FriendListItem = ({ name, avatar, isOnline, id }) => {
  return (
    <li className={classes.item} key={id}>
      {isOnline ? (
        <span className={[classes.status, classes.online].join(" ")}></span>
      ) : (
        <span className={[classes.status, classes.offline].join(" ")}></span>
      )}
      <img
        className={classes.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default FriendListItem;
