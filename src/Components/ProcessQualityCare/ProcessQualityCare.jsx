import React from 'react';
import './ProcessQualityCare.css';
import cows from '../../assets/cows.jpg';
import main_image from '../../assets/main_image_yanagiya.jpg';

const ProcessQualityCare = () => {
    return (
        <div className="entire_container">
            <div className="entire_content">
                <div className="process_content">
                    <div className="process_text">
                        <h1>El Proceso</h1>
                        <p>Las reses de las cuales se produce la carne wagyu siguen un proceso de crianza muy especializado en el que cada detalles minuiciosamente cuidado.</p>
                        <p>Todo comienza en las granjas de la crianza, donde una hembra de linaje puro se curza con un semental, también de sangre pura, para obtener un ternero de excelente linaje. El ternero es cuidado durante ocho o nueve meses, hasta que llega a pesar aproximadamente 250kg. En ese momento es llevado al mercado y se lleva a cabo una subasta por cada ternero.</p>
                        <p>Después los terneros son llevados a las granjas de alimentación. Esta es la etapa más importante del proceso, pues aquí se vigila que cada vaca desarrolle un marmoleado abundante y de buena calidad para asegurar una buena calificación y un excelente sabor. Esta fase del proceso es muy delicada y la lleva a cabo artesanos en el perfeccionamiento del cuidado y la dieta de las vacas.</p>
                    </div>
                </div>
                <div className="quality_content">
                    <div className="quality_text">
                        <h1>La Calidad</h1>
                        <p>El cuidado del linaje de las reses que producen la carne wagyu es importante para mantener la pureza y la calidad de la carne.</p>
                        <p>El árbol genealógico de cada ternero se puede trazar hasta principios del siglo XX. Cada vaca tiene en su oreja un número de 10 dígitos que se puede buscar en Internet para verificar su certificado de nacimiento. A su vez, cada certificado está sellado con una impresión de la nariz de la vaca.</p>
                        <p>Los terneros son alimentados y cuidados hasta los 30 meses de edad. Al alcanzar los 30 ó 31 meses, son llevados al rastro, donde comienza su evaluación y clasificación. A cada res se le asigna una letra de la C a la A -donde C es la más baja y A la más alta, dependiendo de la cantidad de carne que se le pueda cosechar, así como un número del 1 al 5 - 1 siendo el más bajo y 5 el más alto -, que se enfoca en la calidad. Los puntos a calificar son los siguientes:
                            <li>La cantidad y calidad del marmoleo</li>
                            <li>El color y el brillo de la carne</li>
                            <li>El color y claridad de la grasa</li>
                            <li>La firmeza y la textura de la carne</li></p>
                        <p> La meta es conseguir una calificación lo más alta posible, cercana a A5. Aunque todas las vacas viven en las mismas condiciones, no todas logran una alta calificación, de ahí lo elevado del precio que llegan a alcanzar. Las que sí, pasan a ser subastadas; cada día se subastan decenas de canales bovinos. Una vez subastadas, se cortan y se preparan para su distribución.</p>
                    </div>
                    <div className="quality_image">
                        <img src={cows} alt="" />
                    </div>
                </div>
                <div className="care_content">
                    <div className="care_text">
                        <h1>Cuidados</h1>
                        <p>La carne wagyu es resultado de la combinación de tacto y cuidado de la alimentación de las reses que la producen.</p>
                        <p>El cuidado comienza desde su alimentación. Con un programa que cambia mes con mes, se les proveé de los nutrientes que requieren según su edad. De esta manera se logra controlar el grado de marmoleado y la calidad de la carne. Su alimentación se basa en una mezcla de heno a base de maíz, trigo y salvado, además de agua muy limpia, la cual ayuda a su dieta y salud.</p>
                        <p>Otro factor es que las reses deben vivir en un ambiente lo más libre de estrés posible. Cada vaca recibe atención personalizada, sus contenedores y el establo en el que viven se mantienen limpios y conviven en espacios bien distribuidos, con aserrín muy suave. Su comportamiento y personalidad son vigilados para identificar posibles malestares y corregirlos.</p>
                    </div>
                </div>
                <div className="advice_content">
                    <h1>En Yanagiya seguimos al pie de la letra los procesos que garantizan que nuestra carne wagyu sea de la más alta calidad.</h1>
                </div>
                <img src={main_image} alt="" className="PQC_image" />
            </div>
        </div>
    )
}

export default ProcessQualityCare