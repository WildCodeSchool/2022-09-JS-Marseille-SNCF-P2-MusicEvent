import Header from "./components/header/Header";
import SearchBar from "./components/search/Search";
import "./App.css";
import Cocktail from "./components/Cocktail/Cocktail";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Footer from "./components/footer/Footer";
import CocktailList from "./components/CocktailList/CocktailList";
import CocktailCard from "./components/CocktailCard/CocktailCard";

const drinksInitial = [
  {
    strAlcoholic: "Alcoholic",
    strDrink: "Margarita",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",

    strIBA: "Contemporary Classics",
    strImageAttribution: "Cocktailmarler",
    strImageSource:
      "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
    strIngredient1: "Tequila",
    strIngredient2: "Triple sec",
    strIngredient3: "Lime juice",
    strIngredient4: "Salt",
    strIngredient5: null,
    strVideo: null,
    strInstructions:
      "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
  },
  
];

function App() {
  const [drinkState, setDrinkState] = useState(drinksInitial);

  const getDrink = () => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")

      .then((response) => response.data)

      .then((data) => {
        console.log(data, "test api");
        setDrinkState(data.drinks);
      });
  };
  console.log(drinkState.drinks, "appel drink");

  // useEffect(() => {
  //   getDrink();
  // }, []);

  return (
    <div className="App">
      <Header />
      <div className="search">
        <SearchBar />
        <button className="btn" type="button" onClick={getDrink}>
          Recherche
        </button>
      </div>
      <Cocktail />

      <div className="cocktail-list">
        {drinkState.map((drink, index) => (
          <CocktailList
            key={index}
            name={drink.strDrink}
            picture={drink.strDrinkThumb}
          />
        ))}
      </div>
      <div className="cocktailCard">
        {drinkState.map((drink, index) => (
          <CocktailCard
            key={index}
            name={drink.strDrink}
            glass={drink.strGlass}
            picture={drink.strDrinkThumb}
            ingredient={drink.strIngredient1}
            ingredient2={drink.strIngredient2}
            ingredient3={drink.strIngredient3}
            ingredient4={drink.strIngredient4}
            recette={drink.strInstructions}
            video={drink.strVideo}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

{
  /* <div id="container">
        {contactInfo.map((potatoes, index) => (
<Contact
key={index}
name={potatoes.name}
email={potatoes.email}
phone={potatoes.phone}
isDeletable={potatoes.isDeletable}
/>
        )        
        )}
      </div> */
}
export default App;
