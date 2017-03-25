import React from 'react'
import { connect } from 'react-redux'
import { getColors, getIsFetching }  from '../reducers'
import * as actions from '../actions'

let ColorButton = ({colors, color, isFetching, toggleColor}) => (
<div>
    <button 
    style={{cursor:"pointer"}}
    onClick={()=> toggleColor(color)}
    disabled={isFetching}
        >TURN {color.toUpperCase()} {colors[color]? "OFF": "ON"}</button>
</div>
)

const mapStateToProps = (state) => 
    ({
        colors: getColors(state),
        isFetching: getIsFetching(state)
    })

ColorButton = connect(
    mapStateToProps,
    actions
)(ColorButton)


export default ColorButton
