import React, { Component } from 'react';

import buildControlsStyle from './build-controls.scss';
import ExtraIngredientControl from './extra-ingredient-control/extra-ingredient-control';
import { coffeeExtraIngredients } from '../../containers/barista-builder/barista.models';

export default class BuildControls extends Component {
    initializeIngredients () {
        return Object.keys(coffeeExtraIngredients).map(ingredientKey => {
            return coffeeExtraIngredients[ingredientKey];
        })
    }

    render() {
        return (
            <div className={ buildControlsStyle['build-controls-component'] }>
                <div className={ buildControlsStyle['build-control-container'] }>
                    <h2 className={buildControlsStyle['build-control-title']}>Choose your coffee type</h2>
                    { this.initializeIngredients().map(ingredientData => (
                        <ExtraIngredientControl key={ingredientData.selector} label={ingredientData.title} />
                    )) }
                </div>

                <div className={ buildControlsStyle['build-control-container'] }>
                    <h2 className={buildControlsStyle['build-control-title']}>Add extra ingredients</h2>
                    { this.initializeIngredients().map(ingredientData => (
                        <ExtraIngredientControl
                            key={ingredientData.selector}
                            label={ingredientData.title}
                            name={ingredientData.name}
                            selector={ingredientData.selector}
                            extraIngredients={this.props.extraIngredients}
                            addExtraIngredientHandler={this.props.addExtraIngredientHandler}
                            removeExtraIngredientHandler={this.props.removeExtraIngredientHandler}/>
                    )) }
                </div>
            </div>
        );
    }
}
