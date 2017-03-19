import React from 'react'
import { connect } from 'react-redux'
import { getColors, getIsFetching }  from '../reducers'
import * as actions from '../actions'



let isPressed = false


const Arrow = ({color}) => {
    switch(color){
        case 'red':
        return(
            <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
                <path d="M0-.5h24v24H0z" fill="none"/>
            </svg>
        )
        case 'green':
            return (
            <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
            )
        case 'blue':
            return (
            <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                <path d="M0-.25h24v24H0z" fill="none"/>
            </svg>
            )
        default:
            return null
    }
}

const allowedKeys = [
    "ArrowLeft", "ArrowUp", "ArrowRight"
]

let ColorButton = ({colors, color, isFetching, keyDown, keyUp}) => {
    document.addEventListener('keydown', (e) => {
        console.log(e.code)
        return allowedKeys.indexOf(e.code) !== -1 ? keyDown(e.code) : null 
    })
    document.addEventListener('keyup', (e) => allowedKeys.indexOf(e.code) !== -1 ? keyUp(e.code) : null)

    return    (
        <div>
            <div>{color}</div>
            <button 
            style ={
            {
                "height":"40px",
                "width":"40px",
                "backgroundColor": "Transparent",
                "backgroundRepeat": "no-repeat",
                "border": "outline",
                "cursor": "pointer",
                "overflow": "hidden",
                "outline":"none"
                }
            }
            onClick={()=> toggleColor(color)}
            disabled={isFetching}
                >
                <Arrow color={color}/>
            </button>
        </div>
)}

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