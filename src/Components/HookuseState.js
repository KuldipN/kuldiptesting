import React, { useState } from 'react';
import { render } from '@testing-library/react';

const HookuseState = () => {
    const [counter, IncreaseCounter] = useState(100);
    const [message, messageHandler] = useState("Hello There")
    const [messageObject, messageObjectHandler] = useState({ message: "Hello there", id: 1 })

    // const counter = MyCustomState[0];
    // const IncreaseCounter = MyCustomState[1];

    const buttonClickHandler = () => {
        setTimeout(() => {
            IncreaseCounter(counter => counter + 1)
        }, 1000);
    }

    const inputHandler = (e) => {
        const newObject = { ...messageObject, message: e.target.value }
        messageObjectHandler(newObject)
        // messageObjectHandler({message : e.target.value})
    }

    return (
        <div>
            <input placeholder="Enter something" onChange={(e) => inputHandler(e)} />
            <p>ID : {messageObject.id}</p>
            <p>Message : {messageObject.message}</p>
            <button onClick={() => alert(messageObject.message)}>Get value of Textbox</button>
            {/* <button onClick={() => buttonClickHandler()}>Hit me</button>
            Value of Counter : {counter} */}
            {/* <button onClick={IncreaseCounter(counter + 1)}>Click here </button> */}
        </div>
    );
};

export default HookuseState;