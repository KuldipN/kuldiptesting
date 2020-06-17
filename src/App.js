import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UseEffectExample from './Components/useEffect';
import Resizer from './Components/Resizer';
function App() {

  const [isVisibleMyComponent, setVisibility] = useState(true)

  return (
    <div className="App">
      <button onClick={() => setVisibility(!isVisibleMyComponent)}>Toggle Visibility of Resizer Component</button>
      {
        isVisibleMyComponent && <Resizer />
      }
      
    </div>
  );
}

export default App;
