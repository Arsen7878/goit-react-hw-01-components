import React from "react";
import classes from "./FriendListItem.module.css";

const FriendListItem = (props) => {
  const { name, avatar, isOnline, id } = props;

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

export default FriendListItem;
