import React, { useState} from 'react';
import ShowRecipe from './ShowRecipe';

const apiKey = "91fa3c67b78147fb96c2b8da1463aab2";



const IngRecipes = ({ commaIngs}) => {

    const [recipes, setRecipes] = useState([]);
    const [title, setTitle] = useState("")

    
    // check ings empty, set ingsAPI to comma list, search api with list,
    const getIngRecipes = async() => {
        
        const apiCall = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${commaIngs}&number=12&sort=min-missing-ingredients`)
        const data = await apiCall.json();

        if(commaIngs.length === 0 || data.length === 0) {
            alert("enter valid ingredient")
        }
        setRecipes(data)
        
        console.log(recipes);
    }

    
    

    return (
        <div>
            <div className="searchButton">
                <button onClick={getIngRecipes}> Search Recipe</button>

            </div>
            <div className="recipes">
                <ShowRecipe recipes = {recipes}/>

            </div>
        </div>
    )

}


export default IngRecipes;