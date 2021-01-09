import React, { useState, useEffect } from 'react'
import { fdb, db } from '../firebase.js'
import { useAuth } from '../contexts/AuthContext.js'
import { Link } from 'react-router-dom';



export default function ChangeFavRecipe(props) {

    const [toggle, setToggle] = useState("add")
    const user = useAuth()
    let email = ""
    let userId = ""
    const title = props.recInfo.title
    const id = props.recInfo.id
    const image = props.recInfo.image
    const [loading, setLoading] = useState(false);

    const ref = db.collection("Users")


    if (user.currentUser) {
        email = user.currentUser.email;
        userId = user.currentUser.uid;
    } else {
        email = "nothing"
        userId = "nothing"
    }

    function getFav() {
        if (email !== "nothing") {
            setLoading(true);
            ref
                .where("id", "==", userId)
                .onSnapshot((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        console.log(doc)

                        checkAdded(doc)
                    });
                    setLoading(false);
                });
        }
        if (email === "nothing") {
            console.log("nobody")
            setToggle("nobody")
        }

    }


    function checkAdded(doc) {
        const favArray = doc.data().favourites;
        favArray.forEach((each) => {
            if (id === Number(each.recipeId)) {

                setToggle("delete")
            }
        })

        console.log("we ended checkAdded")

    }


    useEffect(() => {
        getFav();
    }, [])


    function addFav() {
        const userDoc = db.collection('Users').doc(email)
        userDoc.update({
            id: `${userId}`,
            favourites: fdb.FieldValue.arrayUnion({ recipeId: `${id}`, title: `${title}`, image: `${image}` })
        })
        setToggle("delete")
        // console.log("WE SET DELETE")

    }
    function deleteFav() {
        const userDoc = db.collection('Users').doc(email)
        userDoc.update({
            id: `${userId}`,
            favourites: fdb.FieldValue.arrayRemove({ recipeId: `${id}`, title: `${title}`, image: `${image}` })
        })
        setToggle("add")
        // console.log("WE SET ADD")


    }



    function handleButton() {

        if (toggle === "add") {
            return (
                <button className={`active-recipe__button`} onClick={() => addFav()}>Add To Favourites</button>

            )
        }
        if (toggle === "delete") {
            return (
                <button className={`active-recipe__button`} onClick={() => deleteFav()}>Delete From Favourites</button>

            )
        }
        if (toggle === "nobody") {
            return (
                <div>
                    <br></br>
                    <button className="active-recipe__button">
                        <Link to='/Login' >Login To Add To Favourites</Link>
                    </button>
                </div>
            )
        }


    }





    return (
        <div>
            {handleButton()}
        </div>
    )
}
