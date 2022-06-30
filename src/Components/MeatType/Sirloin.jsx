import React, { useState } from 'react';
import './MeatType.css';
import NewYork_meat from '../../assets/NewYork.png';
import Zoom from 'react-img-zoom';
import { Link } from 'react-router-dom';
import RibEye_meat from '../../assets/RibEye.png';
import Sirloin_meat from '../../assets/Sirloin.png'

const Sirloin = () => {
    const [Switch, setSwitch] = useState(false)

    const handleTrue = () => {
        setSwitch(true)
    }

    const handleFalse = () => {
        setSwitch(false)
    }

    console.log(Switch)
    return (
        < div className="type_container" >
            <div className="type_content">
                <div className="type_header">
                    <div className="images_display">
                        <Zoom img={Sirloin_meat} zoomScale={2} width={350} height={300} />
                    </div>
                    <div className="type_info">
                        <div className="header_title">
                            <h1>Top Sirloin Hokkaido Wagyu A5-10</h1>
                            <p>$1,732.50 – $1,897.50</p>
                        </div>
                        <div className="header_description">
                            <p>El Top Sirloin es un filete sin hueso proveniente del área media baja de la res (entre el lomo y la pierna).</p>
                        </div>
                        <div className="weight_selection">
                            <label htmlFor="weight">Peso</label>
                            <select name="weight" className="selection">
                                <option value="select">Elige una opción.</option>
                                <option value="315g">315g</option>
                                <option value="320g">320g</option>
                                <option value="325g">325g</option>
                                <option value="330g">330g</option>
                                <option value="335g">335g</option>
                                <option value="340g">340g</option>
                                <option value="345g">345g</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="body_description">
                    <div className="buttons">
                        <button onClick={handleTrue} style={{ backgroundColor: Switch ? 'White' : 'rgb(236, 236, 236)' }}>Descripción</button>
                        <button onClick={handleFalse} style={{ backgroundColor: Switch ? 'rgb(236, 236, 236)' : 'White' }}>Información adicional</button>
                    </div>
                    <div className="body_text">
                        {Switch ?
                            <div className="description">
                                <p>El Top Sirloin es un filete sin hueso proveniente del área media baja de la res (entre el lomo y la pierna).</p>
                                <p>Es un corte muy popular en México y varias partes del mundo por su intenso y rico sabor. Al ser un filete de muy buena calidad pero un poco menos suave que el Ribeye y el New York, posee una gran relación calidad/precio.</p>
                                <p>La preferectua de Hokkaido, al norte de Japón, se caracteriza por sus montañas y clima frío que proveen al ganado wagyu de agua y aire fresco.
                                    Gracias a estas condiciones naturales, nuestra carne Wagyu A5 proveniente de Hokkaido, desarrolla un sabor único: el perfecto balance entre delicado, exquisito y cremoso que se deshace en tu paladar.</p>
                                <li>Clasificación A5</li>
                                <li>Nivel de grasa intramuscular: 10-11</li>
                                <li>Raza: Kuroge Washu (Japonesa Negra)</li>
                                <li>Estado: Filete hipercongelado a -40°C para preservar su calidad y sabor. El filete puede llegar a congelado o parcialmente descongelado.</li>
                            </div>
                            : <div className="additional_info">
                                <h1>Información adicional</h1>
                                <table className="Table">
                                    <tr>
                                        <th>Peso</th>
                                        <th>11 kg</th>
                                    </tr>
                                    <tr>
                                        <th>Dimensiones</th>
                                        <th>44.5 x 35 x 33 cm</th>
                                    </tr>
                                    <tr>
                                        <th>Peso</th>
                                        <th>200 gr, 205 gr, 215 gr, 220 gr, 225 gr, 230 gr, 235 gr, 240 gr, 245 gr, 250 gr, 255 gr, 260 gr, 265 gr, 270 gr, 275 gr, 280 gr, 285 gr, 290 gr, 295 gr, 300 gr, 305 gr, 310 gr, 315 gr, 320 gr, 325 gr, 330 gr, 335 gr, 340 gr, 345 gr, 350 gr, 355 gr, 360 gr, 365 gr, 375 gr, 380 gr, 385 gr, 390 gr, 395 gr, 400 gr, 410 gr, 415 gr, 420 gr, 430 gr</th>
                                    </tr>
                                </table>
                            </div>}
                    </div>
                </div>
                <div className="recommendation_container">
                    <h1>También te recomendamos...</h1>
                    <div className="recommended_content">
                        <div className="cut">
                            <Link to="/newyork" id="NewYork">
                                <img src={NewYork_meat} alt="" />
                            </Link>
                            <p>NY Hokkaido Wagyu A5-11</p>
                            <p>$2,340.00 - $2,437.50</p>
                        </div>
                        <div className="cut">
                            <Link to="/ribeye" id="RibEye">
                                <img src={RibEye_meat} alt="" />
                            </Link>
                            <p>RibEye Hokkaido Wagyu A5-11</p>
                            <p>$2,405.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Sirloin