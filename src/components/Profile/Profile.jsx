import React from "react";
import PropTypes from "prop-types";
import classes from "./Profile.module.css";

const Profile = ({ username, tag, location, stats, avatar }) => {
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

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  avatar: PropTypes.string,
};

export default Profile;
