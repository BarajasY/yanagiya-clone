import React from 'react';
import './JapanMeat.css';
import japan_video from '../../assets/1_1.mp4';
import japan_flag from '../../assets/Japan.jpeg';

const JapanMeat = () => {
    return (
        <div className="japan_container">
            <div className="japan_content">
                <div className="japan_text">
                    <h1>Nuestra Carne</h1>
                    <p>Conocida por su característico marmoleo abundante, la carne wagyu que importamos es famosa internacionalmente por su sabor intenso, suavidad y elegancia.</p>
                    <p>Rasgos que tienen un origen que data de principios del siglo XX y que la distinguen de la que se produce en otras regiones del planeta. Esto se debe a que las reces de las cuales se produce son muy distintas a las del resto del mundo.</p>
                </div>
                <div className="japan_video">
                    <video width="100%" controls>
                        <source src={japan_video} type="video/mp4" />
                    </video>
                </div>
                <div className="japan_imports">
                    <div className="flag">
                        <img src={japan_flag} alt="" />
                    </div>
                    <div className="imports_text">
                        <h1>¿De dónde se importa la carne?</h1>
                        <p>Importada de Japón, nuestra carne proviene de regiones que se especializan en la producción de Wagyu de alta calidad.</p>
                        <p>Lugares como las prefecturas de Hokkaido, Kagoshima, Shiga y Hyögo, Kagawa y Mie son conocidas por producir esta carne de altísima calidad. El origen del ganado es la raza Kuroge Washu o res japonesa negra.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JapanMeat