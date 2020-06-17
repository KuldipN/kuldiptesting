import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {

    // const [counter, increaseCounter] = useState(0)
    const [message, setMessage] = useState("My first Message");

    //By default, it will run after mounting, updating and unmounting the component
    useEffect(() => {
        
        //Similar to ComponentDidMount()
        //  console.log("ComponentDidMount() called")
        
        console.log("From Effect")

        setTimeout(() => {
            
            setMessage("My second updated message")
        }, 2000);

        //  //Runs after component mounts 
        //  ///When state's value has change, it will render and then call useEffect again.
        // document.title = `You have click ${counter} times!` 

        ///This acts as ComponentWillUnmount()
        //  return function performCleanup()
        //  {
        //      debugger
        //     console.log("I am gonna unmount from DOM")
        //  }

        return () => { console.log("I am gonna unmount from DOM")}

    },[])

    return (
        <div>
            {console.log("From Render")}
            {/* <button onClick={() => { increaseCounter(counter + 1) }}>Increase</button> */}
            {/* Counter Value : {counter}  */}
            <h1>{message}</h1>
        </div>
    );
};

export default UseEffectExample;