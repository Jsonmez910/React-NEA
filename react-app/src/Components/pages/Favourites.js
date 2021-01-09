import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import app, { fdb, db } from '../../firebase.js'
import { useAuth } from '../../contexts/AuthContext.js'
import CardItem from '../Carditem.js'
import { Link } from 'react-router-dom';
import '../ShowRecipe.css'



export default function Favourites() {


    const [favRecipes, setFavRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const email = useAuth().currentUser.email
    const userId = useAuth().currentUser.uid



    const ref = db.collection("Users")



    function getFav() {
        setLoading(true);
        ref
            .where("id", "==", userId)
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {

                    showFav(doc)
                });
                setLoading(false);
            });
    }



    function showFav(doc) {
        const favArray = doc.data().favourites;
        const items = []
        favArray.forEach((each) => {
            const image = each.image
            const title = each.title
            const recipeId = each.recipeId
            items.push({ recipeId, title, image })
        })

        setFavRecipes(items)



    }



    useEffect(() => {
        getFav()
    }, [])





    return (
        <div>
            <Navbar></Navbar>
            {loading ? <h1>Loading...</h1> : null}
            
            <div className="container">
                <div className="title">
                    Your Favourites
                </div>
                <div className="row">

                    {favRecipes.map((recipe) => {

                        return (
                            <div key={recipe.title} className="col-md-4" style={{ marginBottom: "2rem" }}>
                                <div>
                                    <CardItem
                                        src={recipe.image}
                                        text={recipe.title.length < 20 ? `${recipe.title}` :
                                            `${recipe.title.substring(0, 25)}...`}
                                        path={`/SingleRecipe/${recipe.recipeId}`}
                                    />
                                    <button className="recipe__buttons">
                                        <Link to={{
                                            pathname: `/SingleRecipe/${recipe.recipeId}`,
                                            state: { recipe: recipe.title }


                                        }}><span className="button__text">View Recipe</span></Link>
                                    </button>

                                </div>
                            </div>


                        )
                    })}
                </div>


            </div>
        </div>
    )
}