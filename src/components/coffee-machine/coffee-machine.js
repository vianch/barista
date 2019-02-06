import React from 'react';

import coffeeCupStyles from './coffee-machine.scss';
import ExtraIngredient from './extra-ingredient/extra-ingredient'
import extraIngredientStyle from './extra-ingredient/extra-ingredient.scss';

const coffeeCupComponent = (props) => {
    const extraIngredientData = Object.keys(props.extraIngredients).map(ingredientKey => {
        return props.extraIngredients[ingredientKey];
    }) ;

    let extraIngredientsElements = <h2>No extra ingredients added</h2>;

    if (extraIngredientData.length > 0) {
        extraIngredientsElements = extraIngredientData.map((ingredient, index) => {
            return <ExtraIngredient key={ingredient + index} ingredient={ ingredient } />
        });
    }

    return (
        <div className={coffeeCupStyles['cup-wrapper']}>
            <div className={coffeeCupStyles.machine}>
                <div className={coffeeCupStyles['machine-top']}>
                    <div className={coffeeCupStyles['machine-middle']}> </div>
                </div>
                <div className={coffeeCupStyles['machine-bottom']}> </div>
                <div className={coffeeCupStyles.hand}> </div>
                <div className={coffeeCupStyles['left-hand']}> </div>
                <div className={coffeeCupStyles.coffee} > </div>
            </div>

            <div className={extraIngredientStyle['bar-extra-ingredients-component']}>
                <h1 className={extraIngredientStyle['extra-ingredients-title']}>Extra ingredients</h1>

                { extraIngredientsElements }
            </div>
        </div>
    );
};

export default coffeeCupComponent;
