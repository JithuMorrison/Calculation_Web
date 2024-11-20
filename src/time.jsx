import React, { useState } from 'react';
import './App.css';
import ConversionCard from './Card';

export default function TimeConversion() {
  const [inputValue, setInputValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('');
  const [fromUnit, setFromUnit] = useState('hr');
  const [toUnit, setToUnit] = useState('sec');

  const conversionToSeconds = {
    sec: 1,
    min: 60,
    hr: 3600,
    day: 86400,
  };

  const convertToSeconds = (value, unit) => {
    return value * conversionToSeconds[unit];
  };

  // Function to convert meters to the desired unit
  const convertFromSeconds = (value, unit) => {
    return value / conversionToSeconds[unit];
  };

  // Handle conversion
  const handleConversion = () => {
    const valueInSeconds = convertToSeconds(Number(inputValue), fromUnit);
    const finalValue = convertFromSeconds(valueInSeconds, toUnit);
    setConvertedValue(finalValue);
  };

  const generateAllConversions = (valueInSeconds) => {
    const allConversions = {};
    Object.keys(conversionToSeconds).forEach((unit) => {
      allConversions[unit] = convertFromSeconds(valueInSeconds, unit);
    });
    return allConversions;
  };

  // Calculate all conversions if the input is valid
  const allConversions = inputValue
    ? generateAllConversions(convertToSeconds(parseFloat(inputValue), fromUnit))
    : {};

  return (
    <div>
    <div className="conversion-container">
    <h1>Time Conversion</h1>
      <div className="dropdown-group">
        <label htmlFor="from-unit">Convert from: </label>
        <select
          id="from-unit"
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
          className='dropdown'
        >
          <option value="sec">Seconds</option>
          <option value="min">Minutes</option>
          <option value="hr">Hours</option>
          <option value="day">Days</option>
        </select>
      </div>

      <div className="dropdown-group">
        <label htmlFor="to-unit">Convert to: </label>
        <select
          id="to-unit"
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
          className='dropdown'
        >
          <option value="sec">Seconds</option>
          <option value="min">Minutes</option>
          <option value="hr">Hours</option>
          <option value="day">Days</option>
        </select>
      </div>
      </div>
      <div className="center-container">
        <ConversionCard
          name="Time Conversion"
          inputValue={inputValue}
          setInputValue={setInputValue}
          convertedValue={convertedValue}
          handleConvert={handleConversion}
        />
        <div className="all-conversions-container">
        <table>
          <thead>
            <tr>
              <th>Unit</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(allConversions).map((unit) => (
              <tr key={unit}>
                <td>{unit}</td>
                <td>{allConversions[unit].toFixed(6)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    </div>
  );
}
