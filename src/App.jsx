import React, { useState } from 'react';
import './App.css'
import Headermain from './header';
import FlatCard from './flatcard';

export default function App() {
  return (
    <main>
      <Headermain name='Calcilfy'/>
      <FlatCard name="Distance Converter" link = "dist.html"/>
      <FlatCard name="Time Converter" link = "time.html"/>
      <FlatCard name="BitWise Converter" link = "bit.html"/>
      <FlatCard name="Distance Converter" link = "dist.html"/>
      <FlatCard name="Time Converter" link = "time.html"/>
      <FlatCard name="BitWise Converter" link = "bit.html"/>
      <FlatCard name="Distance Converter" link = "dist.html"/>
      <FlatCard name="Time Converter" link = "time.html"/>
      <FlatCard name="BitWise Converter" link = "bit.html"/>
    </main>
  )
}
