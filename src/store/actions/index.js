export const ADD_TODO = "ADD_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"

export const LOAD_TODOS = "LOAD_TODOS"
export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS"
export const LOAD_TODOS_FAILURE = "LOAD_TODOS_FAILURE"

export const MOVE_A2B_ALL = "MOVE_A2B_ALL"
export const MOVE_B2A_ALL = "MOVE_B2A_ALL"
export const MOVE_A2B_SELECTED = "MOVE_A2B_SELECTED"
export const MOVE_B2A_SELECTED = "MOVE_B2A_SELECTED"

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

export const moveAllA2B = () => ({
    type: MOVE_A2B_ALL
})

export const moveAllB2A = () => ({
    type: MOVE_B2A_ALL
})

export const moveSelectedA2B = () => ({
    type: MOVE_A2B_SELECTED
    
})

export const moveSelectedB2A = () => ({
    type: MOVE_B2A_SELECTED
})