/* eslint-disable no-unused-vars */
/* eslint-disable no-self-compare */
import React,{ useState } from 'react';
// import './App.css';
import UseContext from './component/UseContext';

export const ToggleTheme = React.createContext()
export const textTheme = React.createContext()
function App() {

  const [state,setState] = useState(true)
  const[name,setName]=useState(0)
  const handleToggle = ()=>{
    setState(state=>!state)
  }
  const hand=()=>{
    setName(name=>!name)
  }
  const [value,change]=useState(0);


  const abc= ()=>{
    change(value+1)
  }

  return (
    <ToggleTheme.Provider value={state}>
      <textTheme.Provider value={name}>
        <div className='tog'>
        <button onClick={handleToggle}>Toggle</button>
        </div>
      <UseContext/>
      <div className='context'>
      <button onClick={hand}>Component</button>
      </div>
      <div className='like'>
      <div className='value'>{value}</div>
      <button onClick={abc}>Like</button>
      </div>
      
      </textTheme.Provider>
      
    </ToggleTheme.Provider>
    
  );
}

export default App;