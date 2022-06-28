import React from 'react';
import './BarnLogo.css'
import yanagiya_styled_logo from '../../assets/yanagiya_styled_logo.png'

const BarnLogo = () => {
    return (
        <div className="barn_container">
            <div className="barn_content">
                <div className="logo">
                    <img src={yanagiya_styled_logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default BarnLogo