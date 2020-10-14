import React from "react";
import "./contact.css";
import PropTypes from "prop-types";

const Contact = ({avatar,name, online}) => {
  const statusIndicator = online ? "status-online" : "status-offline";
  const status = online ? "Online" : "Offline";

  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt={name} />
      <div>
        <h3 className="name">{name}</h3>
        <div className="status">
          <div className={statusIndicator} />
          <p className="status-text">{status}</p>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};

export default Contact;
