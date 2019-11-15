import { createStore } from 'redux';
import { rootReducer, defaultLocale } from '../reducers';


const store = createStore(rootReducer, defaultLocale);


export default store;