import React from 'react'

const getColor = ({colors}) => {

    console.log(colors)

    if (colors.red && colors.green && colors.blue) {
        return "white light"
    }
    if (colors.red && colors.green && !colors.blue) {
        return "yellow"
    }
    if (!colors.red && colors.green && colors.blue) {
        return "cyan"
    }
    if (colors.red && !colors.green && colors.blue) {
        return "magenta"
    }
    if (colors.red && !colors.green && !colors.blue) {
        return "red"
    }
    if (!colors.red && colors.green && !colors.blue) {
        return "green"
    }
    if (!colors.red && !colors.green && colors.blue) {
        return "blue"
    }
    if (!colors.red && !colors.green && !colors.blue) {
        return "dark"
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
            "background":getColor(colors) || "white" 
            }}>{getColor(colors)}</div>
    </div>
}
export default ShowColors