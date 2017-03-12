import { getIsFetching, getColor } from '../reducers'
// import * as api from '../api'

export const toggleColor = (color) => (dispatch, getState) => {

    const getActionToPut = (color) => {
        return getColor(getState(), color) ? 'off': 'on'
    }

    if (getIsFetching(getState())) {
        return Promise.resolve()
    }
    
    dispatch({
        type:'COLOR_TOGGLE_REQUEST',
        color
    })

    fetch('/colors/',{
                method: "PUT",
                body: JSON.stringify({color:color, action: getActionToPut(color)}),
                headers: {
                    "Content-Type": "application/json"
                }}).then(response => {
            dispatch({
                type:'COLOR_TOGGLE_SUCCESS',
                color
            })
        })
        .catch(error =>
            dispatch({
                type:'COLOR_TOGGLE_FAILURE',
                message: error.message || 'Something went wrong'
            }))
}

export const fetchColors = () => (dispatch, getState) => {

    if (getIsFetching(getState())) {
        return Promise.resolve()
    }
    
    dispatch({
        type:'COLORS_FETCH_REQUEST'
    })

    fetch('/colors/',{
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }}).then(
        response => response.json()).then(response => {
            dispatch({
                type:'COLORS_FETCH_SUCCESS',
                response
            })
        })
        .catch(error =>
            dispatch({
                type:'COLORS_FETCH_FAILURE',
                message: error.message || 'Something went wrong'
            }))
}