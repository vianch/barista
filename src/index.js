import React from 'react';
import ReactDOM from 'react-dom';

import './stylesheets/index.scss';
import App from './app.js';
import * as serviceWorker from './service-worker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
serviceWorker.unregister();
