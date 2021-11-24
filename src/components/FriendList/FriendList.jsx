import React from "react";
import FriendListItem from "./FriendListItem/FriendListItem";
import classes from "./FriendList.module.css";

const FriendList = (props) => {
  return (
    <ul className={classes.friendList}>
      {props.friends.map((el) => (
        <FriendListItem
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
          key={el.id}
        />
      ))}
    </ul>
  );
};

export default FriendList;
