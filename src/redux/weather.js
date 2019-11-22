import * as ActionTypes from './ActionTypes'

export const weather = (
    state = {
        data: null
    }, action) => {
        switch(action.type) {
            case ActionTypes.INSERT_DATA:
                return {...state, data: action.payload}
            default:
                return state
        }
    }
