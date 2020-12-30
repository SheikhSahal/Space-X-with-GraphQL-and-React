import React,{useState, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import  MissionContainer from './components/Mission/Index';
import  MissionList from './components/MissionInfo/Index';

function App() {
  const [id,setId] = useState(50);
  const handleChange = useCallback(newId =>{
    setId(newId);
  },[])

  return (
    <div className="App">
     <MissionContainer /> 
     <MissionList id={id} /> 
    </div>
  );
}

export default App;
