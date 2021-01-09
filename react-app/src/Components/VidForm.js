import React from 'react';

const VidForm = (props) => (

    <form onSubmit={props.getRecipe} style={{marginBottom:"2rem", marginTop:"1rem"} }>
        <input className="form__input" type="text" name="videoName" placeholder="Video..." required/>
        <input className="form__input" type="text" name="exclude" placeholder="Exclude..."/>
        <input className="form__input" type="text" name="include" placeholder="Include..."/>
        <input className="form__input" type="text" name="cuisine" placeholder="Cuisine..."/>

<br/>
        <label className="form__input" htmlFor="type">Meal Type:</label>
        <select className="mealtype__selects" name="type" id="type" >
            <option value="Select">Select</option>
            <option value="Main">Main</option>
            <option value="Side Dish">Side Dish</option>
            <option value="Dessert">Dessert</option>
            <option value="Appetizer">Appetizer</option>
            <option value="Drink">Drink</option>
            <option value="Breakfast">Breakfast</option>
        </select>
    
        <label className="form__input" htmlFor="diet">Diet:</label>
        <select className="mealtype__selects" name="diet" id="diet" >
            <option value="Select">Select</option>
            <option value="Gluten Free">Gluten Free</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="vegan">vegan</option>
            <option value="Ketogenic">Ketogenic</option>
            <option value="Pescetarian">Pescetarian</option>
        </select>
        

        <button className="form__button">Search</button>
    </form>
    
);

export default VidForm;

