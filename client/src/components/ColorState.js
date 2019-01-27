import React from 'react'
import { connect } from 'react-redux'
import { getColors, getIsFetching }  from '../reducers'
import * as actions from '../actions'
import ShowColors from './ShowColors'

class ColorState extends React.Component {

    componentDidMount(){
        this.fetchData()
    }

    // componentDidUpdate(prevProps){
    //     console.log(this.props.colors)
    //     console.log(prevProps.colors)
    //     if (this.props.colors !== prevProps.colors){
    //         this.fetchData()
    //     }
    // }

    fetchData() {
        const { fetchColors } = this.props
        fetchColors()
    }

    render() {
        const {colors, isFetching} = this.props
        if (isFetching){
            return <p>Loading...</p>
        }

        // if (errorMessage && !todos.length) {
        //     return <FetchError
        //             message = {errorMessage}
        //             onRetry={() => this.fetchData()}
        //     />
        // }
        return <ShowColors colors={colors}/>
    }
}

const mapStateToProps = (state) => 
    ({
        colors: getColors(state),
        isFetching: getIsFetching(state)
    })

ColorState = connect(
    mapStateToProps,
    actions
)(ColorState)

export default ColorState