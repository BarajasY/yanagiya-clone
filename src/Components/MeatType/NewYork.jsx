import React, { useEffect, useState } from 'react';
import './MeatType.css';
import NewYork_meat from '../../assets/NY.png';
import Zoom from 'react-img-zoom';

const NewYork = () => {

    /*     useEffect(() => {
            const NY = document.getElementById('NY');
            NY.addEventListener('mousemove', )
        }, [])
     */

    return (
        <div className="type_container">
            <div className="type_content">
                <div className="type_header">
                    <div className="images_display">
                        <Zoom img={NewYork_meat} zoomScale={3} width={500} height={350} />
                    </div>
                    <div className="type_info">
                        <div className="header_title">
                            <h1>NY Hokkaido Wagyu A5-11</h1>
                            <p>$2,340.00 - $2,437.50</p>
                        </div>
                        <div className="header_description">
                            <p>El New York, también llamado "Strip Loin", es un filete sin hueso proveniente de la parte media del lomo de la res, dentro de la misma sección donde se encuentra el T-Bone y el Filet Mignon.</p>
                        </div>
                        <div className="weight_selection">
                            <label htmlFor="weight">Peso</label>
                            <select name="weight" className="selection">
                                <option value="select">Elige una opción.</option>
                                <option value="360g">360g</option>
                                <option value="365g">365g</option>
                                <option value="370g">370g</option>
                                <option value="375g">375g</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewYork