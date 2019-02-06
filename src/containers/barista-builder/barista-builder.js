import React, { Component } from 'react';

import Auxiliary from '../../hoc/auxiliar';
import CoffeMachine from '../../components/coffee-machine/coffee-machine';

export default  class BaristaBuilderComponent extends Component {
    render() {
        return (
            <Auxiliary>
                <CoffeMachine />

                <div className='bar-build-controls'>
                    Build controls
                </div>
            </Auxiliary>
        );
    }
}
