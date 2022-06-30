import React from 'react';
import './OurMeat.css';
import { GiCow } from 'react-icons/gi'
import cows from '../../assets/cows.jpg';

const OurMeat = () => {

    const openLink = () => {
        window.open('http://localhost:3000/nuestra-carne')
    }

    return (
        <div className="meat_container">
            <div className="meat_content">
                <div className="meat_text">
                    <h1>Nuestra Carne <GiCow /></h1>
                    <p>La alimentación y cuidado de nuestras reses es primordial para lograr la máxima calidad y marmoleo en nuestra carne. La categoría A5 es el grado más alto en la clasificación Wagyu.</p>
                    <button onClick={openLink}>Leer Más</button>
                </div>
                <div className="meat_image">
                    <img src={cows} alt="" />
                </div>
            </div>
        </div>
    )
}

export default OurMeat