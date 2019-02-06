import React, { Component } from 'react';

import Auxiliary from '../../hoc/auxiliar';
import CoffeeMachine from '../../components/coffee-machine/coffee-machine';
import { coffeeExtraIngredients } from './barista.models';
import BuildControls from '../../components/build-controls/build-controls';

export default class BaristaBuilderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            extraIngredients: { },
            totalPrice: 0,
        };
    }

    addExtraIngredientHandler = (ingredientName) => {
        const updatedExtraIngredients = {
            ...this.state.extraIngredients
        };
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + coffeeExtraIngredients[ingredientName].price;

        if(!updatedExtraIngredients.hasOwnProperty(ingredientName)) {
            updatedExtraIngredients[ingredientName] = coffeeExtraIngredients[ingredientName].selector;

            this.setState({
                extraIngredients: updatedExtraIngredients,
                totalPrice: newPrice,
            });
        }
    }

    removeExtraIngredientHandler = (ingredientName) => {
        const updatedExtraIngredients = {
            ...this.state.extraIngredients
        };
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - coffeeExtraIngredients[ingredientName].price;

        if(updatedExtraIngredients.hasOwnProperty(ingredientName)) {
            delete updatedExtraIngredients[ingredientName];

            this.setState({
                extraIngredients: updatedExtraIngredients,
                totalPrice: newPrice,
            });
        }
    }

    render() {
        return (
            <Auxiliary>
                <CoffeeMachine extraIngredients = { this.state.extraIngredients } />

               <BuildControls
                   extraIngredients = { this.state.extraIngredients }
                   addExtraIngredientHandler={this.addExtraIngredientHandler}
                   removeExtraIngredientHandler={this.removeExtraIngredientHandler} />
            </Auxiliary>
        );
    }
}
