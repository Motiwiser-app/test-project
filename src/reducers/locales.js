import et_translations from '../assets/translations/et.json';

const UPDATE_LOCALES = 'UPDATE_LOCALES'

const defaultLocale = {
  intl: {
      defaultLocale: 'et',
      locale: 'et',
      messages: et_translations,
  },
}

function localesReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_LOCALES:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}


export { localesReducer, defaultLocale };