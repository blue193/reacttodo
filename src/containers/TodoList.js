import React from 'react'
import Todo from '../components/Todo'
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import styled from 'styled-components'
import { toggleTodo, loadTodos } from '../store/actions/index'

const UL = styled.ul`
    list-style: none;
    border-radius: 10px;
    border: 1px solid gray;
`
class TodoList extends React.Component {
    componentDidMount() {
        this.props.loadItems()
    }
    render() {
        return (
            <UL>
                {
                    this.props.todos.length ?
                    this.props.todos.filter(todo => todo.completed === this.props.completed).map( todo =>
                    <Todo 
                        key={todo.id}
                        {...todo}
                        onClick={() => {
                                this.props.toggle(todo.id)
                            }
                        }
                    />
                    ) : <div>Loading....</div>
                }
            </UL>
        )
    }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.any),
  toggle: PropTypes.func.isRequired,
  completed: PropTypes.bool
}
const mapStateToProps = (state) => ({
    todos: state.todos
})
const mapDispatchToProps = (dispatch) => ({
    toggle: (id) => dispatch(toggleTodo(id)),
    loadItems: () => dispatch(loadTodos())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)