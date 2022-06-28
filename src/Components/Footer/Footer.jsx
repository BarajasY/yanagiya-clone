import React from 'react';
import './Footer.css';
import { BsYoutube, BsInstagram } from 'react-icons/bs';

const Footer = () => {

    const handleYoutube = () => {
        const url = "https://www.youtube.com/channel/UC4wSD-2pD4tgaqC_9WEeZ5A";
        window.open(url)
    }

    const handleInstagram = () => {
        const url = "https://www.instagram.com/yanagiya.mx/";
        window.open(url)
    }


    return (
        <div className="footer_container">
            <div className="footer_content">
                <div className="footer_social">
                    <BsYoutube className="footer_icons" onClick={handleYoutube} />
                    <BsInstagram className="footer_icons" onClick={handleInstagram} />
                </div>
            </div>
        </div>
    )
}

export default Footer