import {combineReducers} from 'redux'
import createColor, * as fromCreateColor from  './createColor'

const colors = combineReducers({
    red: createColor('red'),
    green: createColor('green'),
    blue: createColor('blue')
})

const isFetching = (state = false, action) => {
    switch (action.type){
        case 'COLOR_TOGGLE_REQUEST':
        case 'COLORS_FETCH_REQUEST':
            return true
        case 'COLOR_TOGGLE_SUCCESS':
        case 'COLORS_FETCH_SUCCESS':
        case 'COLOR_TOGGLE_FAILURE':
        case 'COLORS_FETCH_FAILURE':
            return false
        default:
            return state
}}

const app = combineReducers({
    colors,
    isFetching
})

export default app

export const getColor = (state, color) => fromCreateColor.getColor(state.colors[color])

export const getColors = (state) => state.colors

export const getIsFetching = (state) => state.isFetching