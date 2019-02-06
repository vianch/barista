import React, { Component } from 'react';

import Auxiliary from '../../hoc/auxiliar';
import CoffeMachine from '../../components/coffee-machine/coffee-machine';
import { coffeeExtraIngredients } from '../../components/coffee-machine/coffee-machine.models';

export default  class BaristaBuilderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            extraIngredients: {
                cinnamonPowder: coffeeExtraIngredients.cinnamonPowder.selector,
                cocoaPowder: coffeeExtraIngredients.cocoaPowder.selector,
                marshmallow: coffeeExtraIngredients.marshmallow.selector,
                sweetener: coffeeExtraIngredients.sweetener.selector,
                biscuits: coffeeExtraIngredients.biscuits.selector,
            }
        };
    }

    render() {
        return (
            <Auxiliary>
                <CoffeMachine extraIngredients = { this.state.extraIngredients } />

                <div className='bar-build-controls'>
                    Build controls
                </div>
            </Auxiliary>
        );
    }
}
