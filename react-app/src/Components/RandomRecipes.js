import React, { Component } from 'react';
import Cards from './Cards.js';

const apiKey = "91fa3c67b78147fb96c2b8da1463aab2";


class RandomRecipes extends Component {

    state = {

        randomRecipes: [],

    }

    getRandom = async() => {
        const apiCall = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=5&tags=`);
        const data = await apiCall.json();
        this.setState({ randomRecipes: data.recipes});
        console.log(this.state.randomRecipes)
        


    };

    componentDidMount = () => {
        this.getRandom();
    }

    

    render() {
        return (

            <div className="homeRecipes">

                <Cards recipes={this.state.randomRecipes} />



            </div>
        )
    }

}


export default RandomRecipes; 
