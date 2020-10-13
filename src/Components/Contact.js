import React from "react";
import "./contact.css";
import PropTypes from "prop-types";

const Contact = (props) => {
  const statusIndicator = props.isOnline ? "status-online" : "status-offline";
  const status = props.isOnline ? "Online" : "Offline";

  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt={props.name} />
      <div>
        <h3 className="name">{props.name}</h3>
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
