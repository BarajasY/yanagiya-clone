import React from 'react';
import './RecipesIndex.css';
import { Link } from 'react-router-dom';
import recipe_1 from '../../assets/recipe_1.png';


const RecipesIndex = () => {
    return (
        <div className="recipes_container">
            <div className="recipes_content">
                <div className="shrimps">
                    <Link to="/recipes/01" >
                        <img src={recipe_1} alt="" />
                        <h1>Camarones con Wagyu A5</h1>
                        <p>1hr 10min</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RecipesIndex