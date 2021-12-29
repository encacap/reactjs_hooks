const logger = (reducer) => {
    return (prevState, action) => {
        console.group(action.type);
        console.log("prevState:", prevState);
        const nextState = reducer(prevState, action);
        console.log("nextState:", nextState);
        console.log("action:", action);
        console.groupEnd();
        return nextState;
    };
};

export default logger;
