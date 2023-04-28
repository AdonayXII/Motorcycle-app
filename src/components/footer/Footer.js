import "./Footer.css";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="footer">
            <div className='Contact'>
                <div>
                    <h5>Métodos de contacto</h5>
                </div>
                <div>
                    <a href="">¿Dónde estamos?</a>
                </div>
                <div>
                    <p>928 547 951 654</p>
                </div>
                <div>
                    <p>joseadonayperezgaldos@hotmail.com</p>
                </div>
            </div>
            <div className='social'>
                <h5>Redes Sociales</h5>
                <div className='socialImages'>
                    <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://twitter.com/?lang=es"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://github.com/AdonayXII"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </div>
            <div className="copyright">
                <h6>© Todos los derecho de autor están reservador por IES EL RINCÓN</h6>
            </div>
        </div>
    );
}

export default Footer;