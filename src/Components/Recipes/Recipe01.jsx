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
                            <ReactPlayer url="https://youtu.be/fEIUoJaG81s" width={'400px'} controls={true} className="reactplayer" />
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
                            <div className="second_part">
                                <div className="first_half">
                                    <h1>PARA EL CORTE NY</h1>
                                    <li>Retirar el exceso de grasa del corte NY y apartarlo para utilizarlo posteriormente.</li>
                                    <li>Filetear el corte para obtener dos piezas delgadas.</li>
                                    <li>cortar cada filete en tiras más o menos del mismo ancho de unas tiras de tocino y sazonarlas con muy poca sal. Estas tiras servirán de envoltura para los camarones.</li>
                                    <li>Pelar los camarones y sazonarlos con sal y pimienta negra recién molida, ajo granulado y un poco de paprika para darle color.</li>
                                    <li>Enrollar los camarones con las tiras de carne lo más apretado posible y usar un palillo para sujetar la carne para evitar que se abra durante la cocción.</li>
                                    <br />
                                    <h1>ARROZ JAPONÉS</h1>
                                    <li>Lavar dos o tres veces una taza de arroz para sushi para remover el exceso de almidón.</li>
                                    <li>Dejarlo remojando por 30 minutos con la misma cantidad de agua que el arroz, una taza de agua por una de arroz.</li>
                                    <li>Pasado ese tiempo, poner a hervir 1 taza y media de agua junto con el arroz y agregarle sal.</li>
                                    <li>Una vez que esté hirviendo, tapar, bajar el fuego al mínimo y dejar hirviendo por 15 minutos.</li>
                                    <li>Ya hervido, despegarlo con una pala de madera haciendo movimientos no tan bruscos para no romperlo y dejarlo tapado hasta la hora de servir.</li>
                                    <br />
                                    <h1>ADEREZO</h1>
                                    <li>Colocar una taza de mayonesa japonesa Kewpie en un tazón.</li>
                                    <li>Tomar una cabeza de ajo asada, exprimilar como puré, machacarla muy bien y añadir la mayonesa.</li>
                                    <li>Poner una cucharada grande de jugo yuzu.</li>
                                    <li>Agregar una cucharada de condimento ichimi togarashi para volver la mayonesa un poco picante.</li>
                                    <li>Cerrar con una pizca de sal.</li>
                                    <li>Revolver bien hasta obtener la consistencia deseada.</li>
                                </div>
                                <div className="second_half">
                                    <h1>CAMARONES</h1>
                                    <li>Preparar el ahumador de pellets para preparar los camarones</li>
                                    <li>Calentar a 300° Farenheit, 150° C.</li>
                                    <li>La cocción será muy rápida, de aproximadamente 20 minutos.</li>
                                    <br />
                                    <h1>COMPLEMENTAR EL PLATO</h1>
                                    <li>Limpiar unas cuantas piezas de champiñones shiitake con una toalla húmeda de cocina y cortarlos por la mitad.</li>
                                    <li>Encender una sartén a fuego alto y derretir la grasa del corte New York para cocinar con ella.</li>
                                    <li>Colocar unos 20 pimientos shishito, añadirles sal y saltearlos de 10 a 15 minutos.</li>
                                    <li>Una vez que estén salteados los chiles, poner los champiñones shiitake y añadir pimienta negra recién molida.</li>
                                    <br />
                                    <h1>SERVIR</h1>
                                    <li>Poner una porción de arroz en un platito hondo bien relleno para que el arroz quede bien apretado y tome la forma del plato. Voltear firmemente y dar unos golpecitos al plato sobre la tabla dónde se va a servir para emplatar el arroz y añadir ajonjolí negro.</li>
                                    <li>Servir al lado los champiñones y los pimientos shishito y espolvorear ajonjolí blanco.</li>
                                    <li>Colocar los camarones.</li>
                                    <li>Servir un recipiente pequeño con el aderezo picante de mayonesa Kewpie y otro con salsa ponzu.</li>
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