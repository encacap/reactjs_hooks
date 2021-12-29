import { useRef } from "react";
import { useStore, actions } from "./store";

const App = () => {
    const [state, dispatch] = useStore();
    const { todoInput, todos } = state;

    const inputRef = useRef();

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput));
        dispatch(actions.setTodoInput(""));
        inputRef.current.focus();
    };

    return (
        <>
            <input
                type="text"
                value={todoInput}
                ref={inputRef}
                placeholder="What do you do?"
                onChange={(e) => {
                    dispatch(actions.setTodoInput(e.target.value));
                }}
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </>
    );
};

export default App;
