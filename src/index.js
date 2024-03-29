import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl-redux'
import { Provider } from 'react-redux';

import './index.scss';
import * as serviceWorker from './serviceWorker';

import store from './store';
import App from './components/app';
import Firebase, { FirebaseContext } from './components/firebase';

import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <Provider store={store}>
        <IntlProvider>
            <FirebaseContext.Provider value={new Firebase()}>
                <App />
            </FirebaseContext.Provider>
        </IntlProvider>
    </Provider>,
    document.getElementById('root'),
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
