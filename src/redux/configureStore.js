import { createStore, combineReducers, applyMiddleware } from 'redux'
import { weather } from './weather'


import thunk from 'redux-thunk'
import logger from 'redux-logger' // Remove before building

export const ConfigureStore = () => {
    // This is for the redux Devtools to work correctly. Remove before building
    const compose = enhancer => {return enhancer},
          composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
        combineReducers({
            weather
        }),
        composeEnhancers(applyMiddleware(thunk, logger)) // Reduce composeEnhancer() and thunk before build
    )

    return store
}
