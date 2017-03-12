import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class ColorState extends React.Component {

    componentDidMount(){
        this.fetchData()
    }

    // componentDidUpdate(prevProps){
    //     if (this.props.accountId !== prevProps.accountId){
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
        return <div>{colors}</div>
    }
}

const mapStateToProps = (state) => 
    {
        colors: getColors(state),
        isFetching: getIsFetching(state)
    }

ColorState = connect(
    mapStateToProps,
    actions
)(ColorState)

export default ColorState