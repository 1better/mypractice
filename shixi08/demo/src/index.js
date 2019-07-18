import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import configureStore from './store/configStore'
import App from './components/App/app.js'
import Other from './components/Other/other.js'
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
        <Other/>
    </Provider>
    ,
    document.getElementById('root'));