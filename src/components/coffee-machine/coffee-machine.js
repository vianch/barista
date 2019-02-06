import React from 'react';

import coffeeCupStyles from './coffee-machine.scss';
import ExtraIngredient from './extra-ingredient/extra-ingredient'
import { coffeeExtraIngredients } from './coffee-cup.machine';
import extraIngredientStyle from './extra-ingredient/extra-ingredient.scss';

const coffeeCupComponent = () => {
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

                <ExtraIngredient ingredient={coffeeExtraIngredients.cinnamonPowder.selector} />
                <ExtraIngredient ingredient={coffeeExtraIngredients.cocoaPowder.selector} />
                <ExtraIngredient ingredient={coffeeExtraIngredients.sweetener.selector} />
                <ExtraIngredient ingredient={coffeeExtraIngredients.marshmallow.selector} />
                <ExtraIngredient ingredient={coffeeExtraIngredients.biscuits.selector} />
            </div>
        </div>
    );
};

export default coffeeCupComponent;
