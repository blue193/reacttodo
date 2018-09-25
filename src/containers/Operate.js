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
                <div class="btn-group-vertical" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-secondary" onClick={() => this.props.moveAllA2B()}> &#8608; </button>
                    <button type="button" class="btn btn-secondary" onClick={() => this.props.moveAllB2A()}> &#8606; </button>
                    <button type="button" class="btn btn-secondary" onClick={() => this.props.moveSelectedA2B()}> &#8592; </button>
                    <button type="button" class="btn btn-secondary" onClick={() => this.props.moveSelectedB2A()}> &#8594; </button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    moveAllA2B: () => dispatch(moveAllA2B()),
    moveAllB2A: () => dispatch(moveAllB2A()),
    moveSelectedA2B: () => dispatch(moveSelectedA2B()),
    moveSelectedB2A: () => dispatch(moveSelectedB2A())
})

export default connect(
    null,
    mapDispatchToProps
)(Operate)