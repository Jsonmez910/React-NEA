import React, {useState, useEffect} from 'react'
import '../../App.css'
import Form from '../IngForm.js'
import '../Ingredients.css'
import IngList from '../IngList.js'
import CardItem from '../Carditem.js'
import IngRecipes from '../IngRecipes.js'
import Navbar from '../Navbar'




function Ingredients({title}) {
    
    const [inputText, setInputText] = useState("")
    const [ingredients, setIngredients] = useState([]);
    const [commaIngs,setCommaIngs] = useState([])

    

    const combiningIngs = () => {
        console.log(ingredients)
        if(ingredients.length !== 0) {
            const tempIngs = []

            for(let i=0; i < ingredients.length; i++) {
                tempIngs.push(ingredients[i].text,",")
            }
            tempIngs.join(",")
            setCommaIngs(tempIngs)
            console.log(commaIngs)
        }
        
    
    }

    

    useEffect(() => {
        combiningIngs();

    },[ingredients])



    return (
        <div className="App ing-page">
            <Navbar></Navbar>
            <header className="ing-header">
                <span>Recipes including: {commaIngs} </span>
            </header>
                <div className="ingredients ing-container">
                    <div className="ing-item ing-item-1">
                        <Form  inputText={inputText} ingredients={ingredients} setIngredients={setIngredients} setInputText={setInputText}/>
                        <IngList ingredients={ingredients} setIngredients={setIngredients}/>                
                    </div>
                    <div className="ing-item ing-item-2">
                        <IngRecipes commaIngs={commaIngs}/>
                        
                    </div>
                    


            </div>
            
        </div>
    )
}

export default Ingredients;
