import {combineReducers} from 'redux'

const createColor = (color) => {

    const colorState = (state = false, action) => {
        switch (action.type){
            case 'COLOR_SWITCH_SUCCESS':
                return action.color == color ? action.colorAction : state
            case 'COLORS_FETCH_SUCCESS':
                return action.response[color] ? true : false
            default:
                return state
        }
    }

    const isPressed = (state = false, action) => {
        switch (action.type){
            case 'KEY_DOWN':
                return action.color === color ? true : state
            case 'KEY_UP':
                return action.color === color ? false : state
            default:
                return state
        }
    }

    
    return combineReducers({
        colorState,
        isPressed
    })

}

export default createColor

export const getColor = (state) =>  state.colorState

export const getIsPressed = (state) =>  state.isPressed
