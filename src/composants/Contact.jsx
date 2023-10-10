import React from 'react';
import './css/contact.css';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div className='contact_body'>
            <h1>Mes Réseaux</h1>
            <div className="ls_contact">
                <div className="follow">
                    <div className="ls_follow">
                        <div className="reseau">
                        
                        <i class="fa-brands fa-linkedin"></i>
                        </div>
                        <div className="reseau">
                        <i class="fa-brands fa-github"></i>
                        </div>
                        <div className="reseau">
                        <i class="fa-brands fa-square-twitter"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;