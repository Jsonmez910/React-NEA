import React from 'react';
import IngItem from './IngItem.js'

const IngList = ({ ingredients,setIngredients}) => {
    return (
        <div className="ing-container">
            <ul className="ing-list">
                {ingredients.map((item) => (
                    <IngItem 
                    ingredients={ingredients}
                    setIngredients={setIngredients} 
                    text={item.text} 
                    ingEach={item}
                    key={item.id}/>
                ))}
            </ul>
        </div>
    )
}

export default IngList;