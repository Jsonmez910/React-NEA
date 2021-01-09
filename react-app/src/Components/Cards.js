import React from 'react';
import './Cards.css';
import CardItem from './Carditem';

const Cards = (props) => {

  return (

    <div className='cards'>
      <h1>Check Out These Recipes</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>

          <ul className='cards__items big__cards'>
            {props.recipes.slice(0, 2).map((ok) =>
              <div className="col-md-6" style={{ marginBottom: "2rem" }} key={ok.id} >
                <CardItem
                  src={ok.image}
                  text={ok.title}
                  path={`/SingleRecipe/${ok.id}`}>

                </CardItem>
              </div>
            )}
          </ul>
          <ul className='cards__items'>
            {props.recipes.slice(2).map((ok) =>
              <div className="col-md-4" style={{ marginBottom: "2rem" }} key={ok.id} >

                <CardItem src={ok.image}
                  text={ok.title}
                  path={`/SingleRecipe/${ok.id}`}>

                </CardItem>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div >
  );
}

export default Cards;