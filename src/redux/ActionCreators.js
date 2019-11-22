import * as ActionTypes from './ActionTypes'
import axios from 'axios'

export const fetchWeather = value => dispatch => {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${value},US&appid=4feebab3b716b411881417ad9a91ee0f`)
         .then(response => {
            return dispatch({
                type: ActionTypes.INSERT_DATA,
                payload: response.data
            })
         })
}