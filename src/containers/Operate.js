import React from 'react'
import {
    moveAllA2B,
    moveAllB2A,
    moveSelectedA2B,
    moveSelectedB2A
} from '../store/actions'

import { connect } from 'react-redux'
class Operate extends React.Component {

    render() {
        return (
            <div>
                <button onClick={() => moveAllA2B()}> &#8608; </button>
                <button onClick={() => moveAllB2A()}> &#8606; </button>
                <button onClick={() => moveSelectedA2B()}> &#8592; </button>
                <button onClick={() => moveSelectedB2A()}> &#8594; </button>
            </div>
        )
    }
}
Operate.propTypes = {
}
const mapStateToProps = (todos) => ({
    todos
})
const mapDispatchToProps = (dispatch) => ({
    moveAllA2B: () => dispatch(moveAllA2B()),
    moveAllB2A: () => dispatch(moveAllB2A()),
    moveSelectedA2B: () => dispatch(moveSelectedA2B()),
    moveSelectedB2A: () => dispatch(moveSelectedB2A())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Operate)