import * as ActionTypes from './ActionTypes'
import axios from 'axios'

export const fetchWeather = value => dispatch => {
    const weatherAPI = process.env.WEATHER_API

    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${value},US&appid=${weatherAPI}`)
         .then(response => {
            return dispatch({
                type: ActionTypes.INSERT_DATA,
                payload: response.data
            })
         })
}