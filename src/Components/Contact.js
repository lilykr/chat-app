import React from "react";
import "./contact.css";
import PropTypes from "prop-types";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online,
    }
  }
  render() {
      const statusIndicator = this.state.online ? "status-online" : "status-offline";
      const status = this.state.online ? "Online" : "Offline";
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name} />
        <div>
          <h3 className="name">{this.props.name}</h3>
          <div className="status">
            <div className={statusIndicator} 
              onClick={(event) => {
                const newStatus = !this.state.online;
                this.setState({online: newStatus})
              }}
            />
            <p className="status-text">{status}</p>
          </div>
        </div>
      </div>
    );
  }
}


Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};

export default Contact;
