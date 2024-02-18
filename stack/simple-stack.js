
const stack = () => {
    let topIndex = -1;
    const stackContainer = [];
    const push = (value) => {
        stackContainer[++topIndex] = value;
    }

    const pop = () => {
        return stackContainer[topIndex--];
    }

    const topItem = () => {
        return stackContainer[topIndex];
    }

    const container = () => {
        return stackContainer;
    }
    return { push, pop, topItem, container };
};

export default stack;
