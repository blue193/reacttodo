import React from 'react'
import Todo from '../components/Todo'

import { connect } from "react-redux"
import { toggleTodo } from '../store/actions/index'
class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                {id: 1, completed: false, text: "How are you", flag: true},
                {id: 2, completed: true, text: "Hello", flag: true},
                {id: 3, completed: false, text: "Nice to meet you", flag: true}
            ],
            filter: "SHOW_ALL",
            flag: false
        }
    }

    render() {
        return (
            <ul>
                {this.state.todos.map( todo =>
                    <Todo 
                        key={todo.id}
                        {...todo}
                        onClick={() => toggleTodo(todo.id)}
                    />
                )}
            </ul>
        )
    }
}
// TodoList.propTypes = {
//   todos: PropTypes.arrayOf().isRequired,
//   toggleTodo: PropTypes.func.isRequired
// }
// const mapStateToProps = (todos) => ({
//     todos
// })
const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => dispatch(toggleTodo(id))
})

export default connect(
    null,
    mapDispatchToProps
)(TodoList)