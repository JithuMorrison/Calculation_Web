import React, { useState } from 'react';
import './App.css';
import Headermain from './header';
import Distance from './distance';
import TimeConversion from './time';
import BitwiseOperations from './bitwise';
import NumberSystemConversion from './BHD';
import Temperature from './temperature';

export default function App() {
  const [currentSection, setCurrentSection] = useState('distance');

  const handleSectionChange = (event) => {
    setCurrentSection(event.target.value);
  };

  return (
    <main>
      <Headermain name="Calculation Web" />
      <div className="dropdown-container">
        <label htmlFor="conversion-type">Choose a conversion type:</label>
        <select
          id="conversion-type"
          value={currentSection}
          onChange={handleSectionChange}
          className="dropdown"
        >
          <option value="distance">Distance Conversion</option>
          <option value="time">Time Conversion</option>
          <option value="bitwise">Bitwise Operation</option>
          <option value="BHD">NumberSystemConversion</option>
          <option value="temp">Temperature Conversion</option>
        </select>
      </div>

      <div className="content">
        {currentSection === 'distance' && <Distance/>}
        {currentSection === 'time' && <TimeConversion/>}
        {currentSection === 'bitwise' && <BitwiseOperations/>}
        {currentSection === 'BHD' && <NumberSystemConversion/>}
        {currentSection === 'temp' && <Temperature/>}
      </div>
    </main>
  );
}

function BitwiseOperation() {
  return <div>Bitwise Operation Section</div>;
}
