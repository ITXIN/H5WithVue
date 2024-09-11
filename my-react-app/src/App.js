// import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
// import { CounterComponent, CounterComponentTwo } from './components/MyComponentProviter.tsx';
// import { StoreProvider } from './store/store.js';
// import { useEffect, useState } from 'react';
// import { Canvas } from './components/Canvas.tsx';
import ReactDOM from 'react-dom';
function MyPortalComponent() {
    return ReactDOM.createPortal(
        <div>
            <h1>Portal Component</h1>
        </div>,
        document.getElementById('portal-root'),
    );
}
function App() {
    function test() {
        // var a = 1;
        // {
        //     var a = 3;
        //     console.log('=======a', a);
        // }
        let b = 'outside';
        const b1 = 'dd';
        if (b1) {
            console.log(b); // ReferenceError: b is not defined
            // let b = 'inside';
        }
    }

    useEffect(() => {
        // let a = 'c';
        // let a = 'd';
        console.log('-=========app', test());
    }, []);

    return (
        <div className="App">
            <h1>Root </h1>
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header> */}
            {/* <StoreProvider>
                <CounterComponent></CounterComponent>
                <CounterComponentTwo></CounterComponentTwo>
            </StoreProvider> */}
            {/* <Canvas></Canvas> */}

            <MyPortalComponent />
        </div>
    );
}

export default App;
