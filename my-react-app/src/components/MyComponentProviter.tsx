import React, { useContext } from 'react';
import { StoreContext } from '../store/store.js';

function CounterComponent() {
    const { state, dispatch } = useContext(StoreContext);
    return (
        <div>
            <p>Counter:{state.counter}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Incremnet</button>
        </div>
    );
}

function CounterComponentTwo() {
    const { state, dispatch } = useContext(StoreContext);
    return (
        <div>
            <p>组件other Counter:{state.counter}</p>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
        </div>
    );
}

export { CounterComponent, CounterComponentTwo };
