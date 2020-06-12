import React from 'react';
import './Contact.css';

function Contact(){
    const userStatus = true;
    return (
        <div className="Contact">
            <div> 
                <img className="avatar" src="https://randomuser.me/api/portraits/women/48.jpg"/>
            </div>

            <div>
                <h4 className="name">Anne Random</h4>
                <div className="status" >
                    {userStatus ? <p className="status-text">online</p> : <p className="status-text">offline</p>}
                    {userStatus ? <div className="status-online"></div> : <div className="status-offline"></div>}
                </div>
            </div>
        </div>
    )
}
export default Contact;