import React from 'react'
import ReactDOM from 'react-dom/client'
import TimeConversion from './time'
import Headermain from './header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Headermain name="Time"/>
    <TimeConversion/>
  </React.StrictMode>
)