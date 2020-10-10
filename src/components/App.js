import React, { Component, useState } from "react";
import '../styles/App.css';
import store from '../store/index';
import {increment, decrement} from '../store/actions';

const App = (props) =>{

    const [count , setCount] = useState(store.getState().count)

    const handleIncrement = () => {
        store.dispatch(increment());
        setCount(store.getState().count);
    };
    const handleDecrement = () => {
        store.dispatch(decrement());
        setCount(store.getState().count);
    };
    return (
        <div>
            <h1>Count: {count} </h1>
    <button onClick={handleIncrement}>Increment </button>
    <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
}


export default App;