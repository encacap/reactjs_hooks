import { SET_TODO_INPUT, ADD_TODO } from "./constants";

const initState = {
    todoInput: "",
    todos: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload,
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export { initState };
export default reducer;
