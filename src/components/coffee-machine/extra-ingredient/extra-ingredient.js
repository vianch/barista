import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { coffeeExtraIngredients } from '../coffee-cup.machine';
import extraIngredientStyle from './extra-ingredient.scss'

class ExtraIngredientComponent extends Component {
    render() {
        let ingredient = null;

        switch (this.props.ingredient) {
            case(coffeeExtraIngredients.cinnamonPowder.selector):
                ingredient =
                    <div className={ extraIngredientStyle[coffeeExtraIngredients.cinnamonPowder.selector] }>
                        { coffeeExtraIngredients.cinnamonPowder.title }
                    </div>;
                break;

            case(coffeeExtraIngredients.cocoaPowder.selector):
                ingredient =
                    <div className={ extraIngredientStyle[coffeeExtraIngredients.cinnamonPowder.selector] }>
                        { coffeeExtraIngredients.cocoaPowder.title }
                    </div>;
                break;

            case(coffeeExtraIngredients.marshmallow.selector):
                ingredient =
                    <div className={ extraIngredientStyle[coffeeExtraIngredients.marshmallow.selector] }>
                        { coffeeExtraIngredients.marshmallow.title }
                    </div>;
                break;

            case(coffeeExtraIngredients.sweetener.selector):
                ingredient = <div className={ extraIngredientStyle[coffeeExtraIngredients.cinnamonPowder.selector] }>
                    { coffeeExtraIngredients.sweetener.title }
                </div>;
                break;

            case(coffeeExtraIngredients.biscuits.selector):
                ingredient = <div className={ extraIngredientStyle[coffeeExtraIngredients.biscuits.selector] }>
                    { coffeeExtraIngredients.biscuits.title }
                </div>;
                break;

            default:
                ingredient = null;
                break;
        }

        return ingredient;
    }
}

ExtraIngredientComponent.propTypes = {
    ingredient: PropTypes.string.isRequired,
};

export default ExtraIngredientComponent;
