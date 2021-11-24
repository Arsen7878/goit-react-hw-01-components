import React from "react";
import classes from "./Profile.module.css";

const Profile = (props) => {
  const { username, tag, location, stats, avatar } = props;

  return (
    <div className={classes.profile}>
      <div className={classes.description}>
        <img src={avatar} alt="User avatar" className={classes.avatar} />
        <p className={classes.name}>{username}</p>
        <p className={classes.tag}>{tag}</p>
        <p className={classes.location}>{location}</p>
      </div>

      <ul className={classes.stats}>
        <li className={classes.stat}>
          <span className={classes.label}>Followers</span>
          <span className={classes.quantity}>{stats.followers}</span>
        </li>
        <li className={classes.stat}>
          <span className={classes.label}>Views</span>
          <span className={classes.quantity}>{stats.views}</span>
        </li>
        <li className={classes.stat}>
          <span className={classes.label}>Likes</span>
          <span className={classes.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;