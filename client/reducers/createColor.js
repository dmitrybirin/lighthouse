const createColor = (color) => {

    const colorState = (state = false, action) => {
        switch (action.type){
            case 'COLOR_TOGGLE_SUCCESS':
                return action.color == color ? !state : state
            case 'COLORS_FETCH_SUCCESS':
                return action.response[color] ? true : false
            default:
                return state
        }
    }
    
    return colorState
}

export default createColor

export const getColor = (state) =>  state.colorState