import React, {Component} from 'react'
import '../../App.css'
import Form from '../RecForm.js'
import ShowRecipe from '../ShowRecipe.js'
import Navbar from '../Navbar'

const apiKey = "91fa3c67b78147fb96c2b8da1463aab2";


class Recipes extends Component {

    state = {
        recipes: [],
        extraDetails:[],
        randomRecipes: []
    };


    getRecipe = async(e) => {
        const recipeName = e.target.elements.recipeName.value;
        const exclude = e.target.elements.exclude.value;
        const include = e.target.elements.include.value;
        const cuisine = e.target.elements.cuisine.value
        const mealType = e.target.elements.type.value;
        const intolerances = e.target.elements.intolerances.value
        const diet = e.target.elements.diet.value

        e.preventDefault();

        if(!recipeName) {
            //see if tags are working in the random search




            let apiCall = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=15&tags=${mealType},${intolerances},${cuisine},${diet}`);
            const data = await apiCall.json();
            this.setState({ recipes: data.recipes});
            
            console.log(this.state)
        } else {
            let apiCall = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=15&query=${recipeName}&type=${mealType}&excludeIngredients=${exclude}&includeIngredients=${include}&intolerances=${intolerances}&cuisine=${cuisine}&diet=${diet}&sort=random`);
            
            const data = await apiCall.json();

            this.setState({ recipes: data.results});
            this.setState({ extraDetails: data})
            console.log(this.state)
        }
        
        

    
        
        };


    componentDidMount = () => {
        const json = localStorage.getItem("recipes");
        const recipes = JSON.parse(json);
        this.setState({recipes:recipes});
    };

    componentDidUpdate =() => {
        const recipes = JSON.stringify(this.state.recipes)
        localStorage.setItem("recipes",recipes);
        //console.log(this.state.recipes[0].id)
    }


    render() {
        return (
        <div className="Recipes">
            <Navbar/>
            <Form getRecipe={this.getRecipe}/>
            <ShowRecipe recipes={this.state.recipes}/>

        </div>

    );
    }
    
};

export default Recipes;