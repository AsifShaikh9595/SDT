import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyfcComponent from './components/MyfcComponent';
import ClassComponent from './components/ClassComponent';
import ConditionalRendering from './components/ConditionalRendering';
import ClassComp2 from './components/ClassComp2';
import { MyState } from './components/MyState';
import Colors from './components/Colors';
import Parent from './components/Parent';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Welcome to react</h1>
    {/* <App /> */}
    {/* <MyfcComponent name="Asif" prn="220943420015"/>
    <ClassComponent name="Asif" village="Bhalawani"/> */}
    {/* <ConditionalRendering/> */}
    {/* <ClassComp2 name="Asif"/>
    <MyState/> */}
    {/* <Colors/> */}
    <Parent/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))"
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
