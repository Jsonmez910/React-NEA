import React from 'react'



const IngItem = ({text,ingEach,setIngredients,ingredients}) => {

    const deleteHandler = () => {
        setIngredients(ingredients.filter((el) => el.id !== ingEach.id))
        console.log(ingredients)
    }

    


    return (
        <div className="ing">

            <li className="ing-item">{text}</li>
            
            <button onClick={deleteHandler} className="trash-btn" >
                <i className="fas fa-trash"></i>
            </button>
        </div>

    );

}

export default IngItem