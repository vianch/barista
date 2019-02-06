import React, {Component} from 'react';

import Layout from './components/layout/layout';
import BaristaBuilder from './containers/barista-builder/barista-builder';

class AppComponent extends Component {
    render() {
        return (
            <Layout>
                <BaristaBuilder />
            </Layout>
        );
    }
}

export default AppComponent;
