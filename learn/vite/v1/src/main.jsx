import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Router } from 'react-router-dom'
import './index.css'
import './App.jsx'
import Timer from './react_learn/r1.jsx'
import Menu from './react_learn/r2.jsx'
import SearchinTime from './react_learn/r3.jsx'
import RL from './react_learn/r4.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Timer/> */}
    {/* <BrowserRouter>
      <Menu/> 
    </BrowserRouter> */}
    {/* <SearchinTime/> */}
    <RL/>
  </React.StrictMode>,
)
