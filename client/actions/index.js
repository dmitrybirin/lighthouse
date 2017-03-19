import { getIsFetching, getColor, getIsPressed } from '../reducers'

const keyColorMap = {
    "ArrowLeft": "red",
    "ArrowUp": "green",
    "ArrowRight": "blue"
}

const toggleColor = (color, colorAction) => (dispatch, getState) => {

    const getActionToPut = (color) => {
        return colorAction ? 'on' : 'off'
    }

    if (getIsFetching(getState())) {
        return Promise.resolve()
    }
    
    dispatch({
        type:'COLOR_SWITCH_REQUEST',
        color
    })

    fetch('/colors/',{
                method: "PUT",
                body: JSON.stringify({color:color, action: getActionToPut(color)}),
                headers: {
                    "Content-Type": "application/json"
                }}).then(response => {
            dispatch({
                type:'COLOR_SWITCH_SUCCESS',
                colorAction: colorAction,
                color
                
            })
        })
        .catch(error =>
            dispatch({
                type:'COLOR_SWITCH_FAILURE',
                message: error.message || 'Something went wrong'
            }))
}

export const keyDown = (code) => (dispatch, getState) => {
    
    const keyColor = keyColorMap[code]        

    if (getIsPressed(getState(), keyColor)) {
        return Promise.resolve()
    }

    dispatch({
        type:'KEY_DOWN',
        color: keyColor
    })

    toggleColor(keyColor, true)(dispatch, getState)
}

export const keyUp = (code) => (dispatch, getState) => {
    
    const keyColor = keyColorMap[code]        

    if (!getIsPressed(getState(), keyColor)) {
        return Promise.resolve()
    }

    dispatch({
        type:'KEY_UP',
        color: keyColor
    })

    toggleColor(keyColor, false)(dispatch, getState)
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