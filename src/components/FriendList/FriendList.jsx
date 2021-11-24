import React from "react";
import PropTypes from "prop-types";

import FriendListItem from "./FriendListItem/FriendListItem";

import classes from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={classes.friendList}>
      {friends.map((el) => (
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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;
