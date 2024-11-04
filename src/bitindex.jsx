import React from 'react'
import ReactDOM from 'react-dom/client'
import BitwiseOperations from './bitwise'
import Headermain from './header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Headermain name="Bitwise Operations"/>
    <BitwiseOperations/>
  </React.StrictMode>
)