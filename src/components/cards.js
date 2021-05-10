import React from 'react';
import '../components/card.css';

export default function RecipeReviewCard({title,calories,image,ingredients}) {
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h5>{`Calories: ${calories.toFixed(2)}`}</h5>
                    <h6>Ingredients:</h6>
                    <ul>
                        {ingredients.map((ing,i)=>(
                            <li key={i}>{ing.text}</li>
                            
                        ))}
                    </ul>
                </div>
        </div>
    )
}