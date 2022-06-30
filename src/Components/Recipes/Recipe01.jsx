import React from 'react';
import './Recipe01.css';
import ReactPlayer from 'react-player';

const Recipe01 = () => {
    return (
        <div className="recipe01_container">
            <div className="recipe01_content">
                <div className="recipe01_header">
                    <div className="recipe01_text">
                        <h1>Camarones con Wagyu A5</h1>
                        <p>Nov 12, 2021</p>
                    </div>
                    <div className="recipe01_video">
                        <div className="video_text">
                            <hr />
                            <p>Camarones con Wagyu A5</p>
                            <hr />
                        </div>
                        <div className="recipe_video">
                            <ReactPlayer url="https://youtu.be/fEIUoJaG81s" />
                        </div>
                    </div>
                    <div className="instruction_section">
                        <div className="instruction_text">
                            <div className="first_part">
                                <div className="first_half">
                                    <h1>Instrucciones</h1>
                                    <p>Sazonar con sal en hojuelas y pimienta negra recién molida. Colocar en el asador a fuego indirecto por aproximadamente 10 minutos. Retirar del asador y sellar con fuego. </p>
                                </div>
                                <div className="second_half">
                                    <li>NY</li>
                                    <li>Camarones</li>
                                    <li>Sal</li>
                                    <li>Paprika</li>
                                    <li>Pimienta Negra</li>
                                    <li>Arroz</li>
                                    <li>Mayonesa Kewpie</li>
                                    <li>Ajo</li>
                                    <li>Jugo Yuzu</li>
                                    <li>Condimiento Ichimi Togarashi</li>
                                    <li>20 pimientos shishito</li>
                                    <li>Champiñones shiitake</li>
                                    <li>Ajonjolí negro</li>
                                    <li>Ajonjolí blanco</li>
                                    <li>Salsa Ponzu</li>
                                </div>
                            </div>
                        </div>
                        <div className="instructions_images">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe01