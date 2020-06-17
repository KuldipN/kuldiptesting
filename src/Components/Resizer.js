import React, {useEffect, useState} from 'react';

const Resizer = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    
    useEffect(() => {
        
        function captureWindowResizeEvent()
        {
            
            const currentWidth = window.innerWidth;
            setWindowWidth(currentWidth);
        }
        
        window.addEventListener("resize", captureWindowResizeEvent)
        
        //It will call before unmouting comp.
        return () => {  window.removeEventListener("resize", captureWindowResizeEvent) }

    },[])


    return (
        <div>
           <h1> current width : {windowWidth}</h1>
        </div>
    );
};

export default Resizer;