import React from 'react';
import './Main_logo.css';
import yanagiya_styled_logo from '../../assets/yanagiya_styled_logo.png';

const Main_logo = () => {
    return (
        <div className="main_container">
            <div className="main_content">
                <div className="logo">
                    <img src={yanagiya_styled_logo} alt="styled_logo" />
                </div>
                <div className="text">
                    <h1>Importamos CARNE JAPONESA de LINAJE PURO</h1>
                </div>
            </div>
        </div>
    )
}

export default Main_logo