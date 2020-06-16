import React, {useState, useEffect} from 'react';

const UseEffectExample = () => {

    const [counter, increaseCounter] = useState(0)
    

     useEffect(() => {
         debugger
         //Runs after component mounts 
         ///When state's value has change, it will render and then call useEffect again.
        document.title = `You have click ${counter} times!` 
     })

    return (
        
        <div>
            <button onClick = {() => {increaseCounter(counter + 1)}}>Increase</button>
            Counter Value : {counter}
        </div>
    );
};

export default UseEffectExample;