import React from 'react';

const Form = ({inputText,setInputText,ingredients,setIngredients}) => {


    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    };

    const submitIngHandler = (e) => {
        e.preventDefault();
        if(inputText.length !== 0 && inputText.length > 2) {
            setIngredients( [
            ...ingredients, {text: inputText, id: Math.random() * 1000}
            ])
            setInputText("");
        }
        else {
            setInputText("")
        }
        
        


    }

    
    
    return (
        <form className="ingForm">
            <input value={inputText} onChange={inputTextHandler} type="text" className="ing-input" required placeholder="Enter Ingredient..." />
            <button onClick={submitIngHandler} className="ing-button" type="submit">
                Add
            </button>
            
        </form>
    )
    

    
}

export default Form