import React, { useState } from 'react';
import './App.css'
import ConversionCard from './Card'

export default function Distance() {
  // Conversion for km to m
  const [kmInput, setKmInput] = useState('');
  const [mFromKm, setMFromKm] = useState('');
  const handleKmToM = () => {
    const conversion = kmInput * 1000;
    setMFromKm(conversion);
  };

  // Conversion for m to km
  const [MInput, setmInput] = useState('');
  const [kmFromM, setKmFromM] = useState('');
  const handleMToKm = () => {
    const conversion = MInput / 1000;
    setKmFromM(conversion);
  };


  // Conversion for m to cm
  const [mInput, setMInput] = useState('');
  const [cmFromM, setCmFromM] = useState('');
  const handleMToCm = () => {
    const conversion = mInput * 100;
    setCmFromM(conversion);
  };

  // Conversion for cm to m
  const [cmInput, setCmInput] = useState('');
  const [mFromCm, setMFromCm] = useState('');
  const handleCmToM = () => {
    const conversion = cmInput / 100;
    setMFromCm(conversion);
  };
  return (
    <div className="conversion-container">
      <ConversionCard
        name="Km to M"
        inputValue={kmInput}
        setInputValue={setKmInput}
        convertedValue={mFromKm}
        handleConvert={handleKmToM}
      />
      <ConversionCard
        name="M to Km"
        inputValue={MInput}
        setInputValue={setmInput}
        convertedValue={kmFromM}
        handleConvert={handleMToKm}
      />
      <ConversionCard
        name="M to Cm"
        inputValue={mInput}
        setInputValue={setMInput}
        convertedValue={cmFromM}
        handleConvert={handleMToCm}
      />
      <ConversionCard
        name="Cm to M"
        inputValue={cmInput}
        setInputValue={setCmInput}
        convertedValue={mFromCm}
        handleConvert={handleCmToM}
      />
    </div>
  )
}