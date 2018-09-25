import {
    TOGGLE_TODO,
    MOVE_A2B_ALL,
    MOVE_B2A_ALL,
    MOVE_A2B_SELECTED,
    MOVE_B2A_SELECTED,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE
}  from "../actions/index"
// import initialState from './../initialstate';

const todosReducer = (state = [], action) => {
    switch(action.type) {
        case LOAD_TODOS_SUCCESS:
            return action.todos
        case LOAD_TODOS_FAILURE:
            return []
        case TOGGLE_TODO:
            return state.map(todo =>
                (todo.id) === (action.id) ? {...todo, checked: !todo.checked} : todo
            )
        case MOVE_A2B_ALL:
            return state.map(todo => 
                ({...todo, checked: false, completed: true})
            )
        case MOVE_B2A_ALL:
            return state.map(todo => 
                ({...todo, checked: false, completed: false})
            )
        case MOVE_A2B_SELECTED:
            return state.map(todo => 
                    todo.checked ? {...todo, checked: false, completed: false} : todo
                )
        case MOVE_B2A_SELECTED:
            return state.map(todo => 
                todo.checked ? {...todo, checked: false, completed: true} : todo
            )
        default:
            return state
    }
}

export default todosReducer