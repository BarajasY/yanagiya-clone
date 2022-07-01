import React from 'react';
import './PersonalBanner.css';

const PersonalBanner = () => {
    return (
        <div className="banner_container">
            <div className="banner_content">
                <h1>This is a clone site of the <a href="https://yanagiya.mx/" target="_blank" rel="noreferrer">Yanagiya.mx</a> site made by <a href="https://github.com/Kanomb" target="_blank" rel="noreferrer">Yahir MB</a>.</h1>
                <p>Tip. To make the navbar responsive reload the page with the new width.</p>
            </div>
        </div>
    )
}

export default PersonalBanner