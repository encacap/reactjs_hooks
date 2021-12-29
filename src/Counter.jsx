import { useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div className="App">{count}</div>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
};

export default App;
