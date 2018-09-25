import React from 'react'
import Todo from '../components/Todo'
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import styled from 'styled-components'
import { toggleTodo } from '../store/actions/index'

const UL = styled.ul`
    list-style: none;
    border-radius: 10px;
    border: 1px solid gray;
`
class TodoList extends React.Component {
    
    render() {
        return (
            <UL>
                {this.props.todos.filter(todo => todo.completed === this.props.completed).map( todo =>
                    <Todo 
                        key={todo.id}
                        {...todo}
                        onClick={() => {
                                this.props.toggle(todo.id)
                            }
                        }
                    />
                )}
            </UL>
        )
    }
}

TodoList.propTypes = {
  toggle: PropTypes.func.isRequired,
  completed: PropTypes.bool
}
const mapStateToProps = (state) => ({
    todos: state.todos
})
const mapDispatchToProps = (dispatch) => ({
    toggle: (id) => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)