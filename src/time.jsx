import React, { useState } from 'react';
import './App.css';
import ConversionCard from './Card';

export default function TimeConversion() {
  // Conversion for hr to sec
  const [hrInput, setHrInput] = useState('');
  const [secFromHr, setSecFromHr] = useState('');
  const handleHrToSec = () => {
    const conversion = hrInput * 3600;
    setSecFromHr(conversion);
  };

  // Conversion for sec to min
  const [secInput, setSecInput] = useState('');
  const [minFromSec, setMinFromSec] = useState('');
  const handleSecToMin = () => {
    const conversion = secInput / 60;
    setMinFromSec(conversion);
  };

  // Conversion for min to sec
  const [minInput, setMinInput] = useState('');
  const [secFromMin, setSecFromMin] = useState('');
  const handleMinToSec = () => {
    const conversion = minInput * 60;
    setSecFromMin(conversion);
  };

  // Conversion for sec to hr
  const [secInput2, setSecInput2] = useState('');
  const [hrFromSec, setHrFromSec] = useState('');
  const handleSecToHr = () => {
    const conversion = secInput2 / 3600;
    setHrFromSec(conversion);
  };

  // Conversion for min to hr
  const [minInput2, setMinInput2] = useState('');
  const [hrFromMin, setHrFromMin] = useState('');
  const handleMinToHr = () => {
    const conversion = minInput2 / 60;
    setHrFromMin(conversion);
  };

  // Conversion for hr to min
  const [hrInput2, setHrInput2] = useState('');
  const [minFromHr, setMinFromHr] = useState('');
  const handleHrToMin = () => {
    const conversion = hrInput2 * 60;
    setMinFromHr(conversion);
  };

  // Conversion for hr to days
  const [hrInput3, setHrInput3] = useState('');
  const [daysFromHr, setDaysFromHr] = useState('');
  const handleHrToDays = () => {
    const conversion = hrInput3 / 24;
    setDaysFromHr(conversion);
  };

  // Conversion for days to hr
  const [daysInput, setDaysInput] = useState('');
  const [hrFromDays, setHrFromDays] = useState('');
  const handleDaysToHr = () => {
    const conversion = daysInput * 24;
    setHrFromDays(conversion);
  };

  return (
    <div className="conversion-container">
      <ConversionCard
        name="Hr to Sec"
        inputValue={hrInput}
        setInputValue={setHrInput}
        convertedValue={secFromHr}
        handleConvert={handleHrToSec}
      />
      <ConversionCard
        name="Sec to Min"
        inputValue={secInput}
        setInputValue={setSecInput}
        convertedValue={minFromSec}
        handleConvert={handleSecToMin}
      />
      <ConversionCard
        name="Min to Sec"
        inputValue={minInput}
        setInputValue={setMinInput}
        convertedValue={secFromMin}
        handleConvert={handleMinToSec}
      />
      <ConversionCard
        name="Sec to Hr"
        inputValue={secInput2}
        setInputValue={setSecInput2}
        convertedValue={hrFromSec}
        handleConvert={handleSecToHr}
      />
      <ConversionCard
        name="Min to Hr"
        inputValue={minInput2}
        setInputValue={setMinInput2}
        convertedValue={hrFromMin}
        handleConvert={handleMinToHr}
      />
      <ConversionCard
        name="Hr to Min"
        inputValue={hrInput2}
        setInputValue={setHrInput2}
        convertedValue={minFromHr}
        handleConvert={handleHrToMin}
      />
      <ConversionCard
        name="Hr to Days"
        inputValue={hrInput3}
        setInputValue={setHrInput3}
        convertedValue={daysFromHr}
        handleConvert={handleHrToDays}
      />
      <ConversionCard
        name="Days to Hr"
        inputValue={daysInput}
        setInputValue={setDaysInput}
        convertedValue={hrFromDays}
        handleConvert={handleDaysToHr}
      />
    </div>
  );
}
