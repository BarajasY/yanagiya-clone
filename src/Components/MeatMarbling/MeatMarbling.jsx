import React from 'react';
import './MeatMarbling.css';
import one from '../../assets/01.jpg';
import two from '../../assets/02.jpg';
import three from '../../assets/03.jpg';
import four from '../../assets/04.jpg';

const MeatMarbling = () => {
    return (
        <div className="marbling_container">
            <div className="marbling_content">
                <div className="marbling_text">
                    <p>La alimentación de nuestras vacas es primordial para la calidad de nuestra carne <strong>OBTENIENDO UN EXCELENTE MARMOLEADO</strong></p>
                </div>
                <div className="marbling_images">
                    <img src={one} alt="" />
                    <img src={two} alt="" />
                    <img src={three} alt="" />
                    <img src={four} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MeatMarbling