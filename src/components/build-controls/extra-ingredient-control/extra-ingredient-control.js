import React from 'react';

import extraIngredientSControlStyle from './extra-ingredient-control.scss';
import extraIngredientStyle from '../../coffee-machine/extra-ingredient/extra-ingredient.scss';

const extraIngredientControl = (props) => {
    let actionButton = <button
        className={extraIngredientSControlStyle['add-ingredient-button']}
        onClick={() => props.addExtraIngredientHandler(props.name)}>Add</button>;

    if (props.extraIngredients && props.extraIngredients.hasOwnProperty(props.name)) {
        actionButton = <button
            className={extraIngredientSControlStyle['add-ingredient-button']}
            onClick={() => props.removeExtraIngredientHandler(props.name)}>Remove</button>
    }

    return (
        <div className={ extraIngredientSControlStyle['extra-ingredient-control'] }>
            <div className={ extraIngredientStyle[props.selector] }>
                { props.label }
            </div>

            { actionButton }
        </div>
    );
}

export default extraIngredientControl;