import React from 'react';
import './ShowRecipe.css'
import { Link } from 'react-router-dom';
import CardItem from './Carditem.js'

const ShowRecipe = props => (
    
    <div className="container">
        <div className="row">

        { props.recipes.map((recipe) => {

            return(
                <div key={recipe.title} className="col-md-4" style={{marginBottom:"2rem"}}>
                    <div>
                    <CardItem
                        src={recipe.image}
                        text={ recipe.title.length < 20 ? `${recipe.title}` : 
                        `${recipe.title.substring(0,25)}...`}
                        path={`/SingleRecipe/${recipe.id}`}
                    />
                        <button className="recipe__buttons">
                            <Link to={{
                                pathname: `/SingleRecipe/${recipe.id}`,
                                state: { recipe: recipe.title}

                        
                            }}><span className="button__text">View Recipe</span></Link>  
                        </button>
                        
                    </div>
                </div>
                

                ) 
            } )}
        </div>


    </div>
)

export default ShowRecipe;

/* <img className="recipe__box-img" src={recipe.image} alt={recipe.title}/>
<div className="recipe__text">
<h5 className="recipes__title">
    { recipe.title.length < 20 ? `${recipe.title}` : 
    `${recipe.title.substring(0,25)}...`}
</h5>
<p className="recipes__subtitle">Publisher: <span>
    {recipe.title}
    
    
    </span></p>
</div>
*/
