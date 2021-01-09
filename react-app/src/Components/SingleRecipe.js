import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {Link} from 'react-router-dom';
import './SingleRecipe.css'
import ChangeFavRecipe from './ChangeFavRecipes.js';
import Navbar from './Navbar.js';

const apiKey = "91fa3c67b78147fb96c2b8da1463aab2";


class ShowSingleRecipe extends React.Component {

    state = {
        activeRecipe: [],
        instructions: [],
        summary: [],
        ingredients: []
    };

    componentDidMount = async() => {
        const recipeID = this.props.match.params.id
        //const title = this.props.location.state.recipe
        const req = await fetch(`https://api.spoonacular.com/recipes/${recipeID}/information?includeNutrition=false&apiKey=${apiKey}
        `);
        const res = await req.json();

        this.setState({ activeRecipe: res})
        if((res.analyzedInstructions).length !== 0) {
            this.setState({ instructions: res.analyzedInstructions[0].steps})

        }
        this.setState({ summary: res.summary})
        this.setState({ ingredients: res.extendedIngredients})

        console.log(this.state.activeRecipe);
 
        };

    
    render () {
        

        const recipe = this.state.activeRecipe;
        const instructions = this.state.instructions
        const summary = this.state.summary
        const ingredients = this.state.ingredients
        
        return (
            <>
            
            <Navbar></Navbar>
            <div className="grid-container">
                <div className="grid-item item-1">
                <div className="container">
            {
                this.state.activeRecipe.length !== 0 &&  
                <div className="active-recipe">
                    <div className='cards__container'>
                         <div className='cards__wrapper'>

                             <img className="active-recipe__img" src={recipe.image} alt={recipe.title}/>
                            
                         </div>
                     </div>

                <h3 className="active-recipe__title"> {recipe.title}</h3>
                <p className="active-recipe__website"><span>Website: <a href={recipe.spoonacularSourceUrl} target="_blank">View Website</a>  </span></p>
                <div className="extra__details">
                    <h5>ReadyInMinutes: {recipe.readyInMinutes}</h5>
                    <h5>Servings: {recipe.servings}</h5>
                    <h5>PricePerServing: {recipe.pricePerServing}</h5>
                    <h5>Diets: {recipe.diets.map((item) => { return(item + ", ")})}</h5>

                </div>
                <button className="active-recipe__button">
                    
                     <Link to='/Recipes' >Go Back</Link>  
                    
                 </button>
                 <ChangeFavRecipe recInfo={this.state.activeRecipe}></ChangeFavRecipe>
            </div>
            }
         </div>
                </div>
                <div className="grid-item item-2">
                    <h3 className="box__heading">Ingredients</h3>
                    {ingredients.map(function (every) {
                        return(<div key={every.id}>{every.originalString}</div>)
                    })}
                </div>
                <div className="grid-item item-3">
                    <h3 className="box__heading">Instructions</h3>
                    
                    { instructions.length !== 0 ?instructions.map(function (every)  {
                    return (<div key={every.number}>{every.number}{" - "}{every.step} </div>)
                    }) : "No Instructions"}
                    
                </div>
                <div className="grid-item item-4">
                    <h3 className="box__heading">Summary</h3>
                    {ReactHtmlParser(summary)}
                </div>
                
            </div>
            </>

        );
    }
};

export default ShowSingleRecipe;