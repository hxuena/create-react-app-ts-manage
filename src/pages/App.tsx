import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
// import { Button } from 'antd';
import Routes from '../routes'

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/" >{Routes()} </BrowserRouter>
  );
}

export default App;
