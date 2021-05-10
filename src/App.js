import './App.css';
import Header from './components/nav.js';
import Form from './components/form.js';
import React, { useState, useEffect } from 'react';
import RecipeReviewCard from "./components/cards.js"

function App() {

//  const Appid = process.env.REACT_APP_FOOD_APPID
//  const key = process.env.REACT_APP_FOOD_KEY
 

  const [srch, setsrch] = useState([]);
  const [recipies, setrecipies] = useState([]);

  const __reqs__ = (wat_to_search)=>{
    setsrch(wat_to_search)
  };



  
  useEffect(()=>{
    if(srch!==''){
      const fetch_data = async (q='chicken')=>{
        const response = await fetch(`https://api.edamam.com/search?q=${q}&app_id=${process.env.REACT_APP_FOOD_APPID}&app_key=${process.env.REACT_APP_FOOD_KEY}`);
        const data = await response.json();
        console.log(data.hits)
        setrecipies(data.hits)
      }
      fetch_data(srch)
    }else{
      return
    }
  },[srch])


  return (
    <>
    <Header/>
    <Form sendreq={__reqs__}/>
    {recipies.map(recipe=>(
      <RecipeReviewCard title={recipe.recipe.label}
       calories={recipe.recipe.calories}
       image={recipe.recipe.image}
       key={recipe.recipe.label}
       ingredients={recipe.recipe.ingredients}/>
    ))}
    </>

  );

}

export default App;
