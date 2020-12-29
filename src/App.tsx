import React from 'react';
import logo from './logo.svg';
import './App.css';
import  MissionContainer from './components/Mission/Index';
import  MissionList from './components/MissionInfo/Index';

function App() {
  return (
    <div className="App">
     <MissionContainer /> 
     <MissionList /> 
    </div>
  );
}

export default App;
