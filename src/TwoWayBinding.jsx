import { useState } from "react";

const TwoWayBinding = () => {
    const [name, setName] = useState("");

    const handleSubmit = () => {
        console.log(`Submitted: ${name}`);
    };

    const handleChange = (event) => {
        setName((prev) => {
            const { value } = event.target;
            console.log(`Changed: ${value}`);
            return value;
        });
    };

    return (
        <div>
            <input type="text" placeholder="Enter your name" onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default TwoWayBinding;
