import React from "react";
import PropTypes from "prop-types";

import classes from "./FriendListItem.module.css";

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <>
      <span
        className={[
          classes.status,
          isOnline ? classes.online : classes.offline,
        ].join(" ")}
      ></span>
      <img
        className={classes.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendListItem;
