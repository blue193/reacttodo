import {
    TOGGLE_TODO,
    MOVE_A2B_ALL,
    MOVE_B2A_ALL,
    MOVE_A2B_SELECTED,
    MOVE_B2A_SELECTED
}  from "../actions/index"

const todosReducer = (state = [], action) => {
    switch(action.type) {
        case TOGGLE_TODO:
            return state.map(todo =>
                (todo.id) === (action.id) ? {...todo, completed: !todo.completed} : todo
            )
        case MOVE_A2B_ALL:
            return
        case MOVE_B2A_ALL:
            return
        case MOVE_A2B_SELECTED:
            return
        case MOVE_B2A_SELECTED:
            return
        default:
            return state
    }
}

export default todosReducer