import React from 'react';
const initalState = {
    counter: 0,
};
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { counter: state.counter + 1 };

        case 'DECREMENT':
            return { counter: state.counter - 1 };
        default:
            return state;
    }
}
const StoreContext = React.createContext();

function StoreProvider({ children }) {
    const [state, dispatch] = React.useReducer(reducer, initalState);

    return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
}
export { StoreContext, StoreProvider };
