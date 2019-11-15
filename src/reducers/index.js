import { combineReducers } from 'redux';
import sessionReducer from './session';
import userReducer from './user';
import listingReducer from './listing';
import { intlReducer } from 'react-intl-redux'
import { localesReducer, defaultLocale } from './locales';


const rootReducer = combineReducers({
    sessionState: sessionReducer,
    userState: userReducer,
    listingState: listingReducer,
    intl: intlReducer,
    locales: localesReducer,
});


export { rootReducer, defaultLocale };