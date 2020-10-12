import React from 'react';
import './contact.css';

function Contact() {
    return (
        <div className='Contact'>
            <img className='avatar' src='https://randomuser.me/api/portraits/women/44.jpg'
                alt="Avery" />
            <div>
                <h3 className='name'>Avery King</h3>
                <div className='status'>
                <div className='status-online'/>
                <p className='status-text'>Online</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;