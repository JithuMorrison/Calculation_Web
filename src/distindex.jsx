import React from 'react'
import ReactDOM from 'react-dom/client'
import Headermain from './header'
import Distance from './distance'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Headermain name="Distance"/>
    <Distance/>
  </React.StrictMode>
)