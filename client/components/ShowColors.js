import React from 'react'

const getColor = ({colors}) => {

    if (colors.red.colorState && colors.green.colorState && colors.blue.colorState) {
        return "white light"
    }
    if (colors.red.colorState && colors.green.colorState && !colors.blue.colorState) {
        return "yellow"
    }
    if (!colors.red.colorState && colors.green.colorState && colors.blue.colorState) {
        return "cyan"
    }
    if (colors.red.colorState && !colors.green.colorState && colors.blue.colorState) {
        return "magenta"
    }
    if (colors.red.colorState && !colors.green.colorState && !colors.blue.colorState) {
        return "red"
    }
    if (!colors.red.colorState && colors.green.colorState && !colors.blue.colorState) {
        return "green"
    }
    if (!colors.red.colorState && !colors.green.colorState && colors.blue.colorState) {
        return "blue"
    }
    if (!colors.red.colorState && !colors.green.colorState && !colors.blue.colorState) {
        return "black"
    }
    else {
        return "unknown"
    }
}

const ShowColors = (colors) => {
    return <div>
        <div style= {{
            "textAlign":"center",
            "width": "100px",
            "height": "100px",
            "borderRadius": "50px",
            "color": getColor(colors) === 'black' ? "white" : "black",
            "background":getColor(colors) || "white" 
            }}>{getColor(colors)}</div>
    </div>
}

export default ShowColors