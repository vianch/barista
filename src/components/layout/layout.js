import React from 'react'

import Auxiliar from '../../hoc/auxiliar';
import layoutStyle from './layout.scss';

const layout = (props) => (
    <Auxiliar>
        <main className={layoutStyle['bar-content']}>
            <h1>Toolbar, side drawer, backdrop</h1>
            { props.children }
        </main>
    </Auxiliar>
);

export default layout;
