import React, { useState } from 'react';
import './App.css';
import ConversionCard from './Card';

export default function Temperature() {
  const [inputValue, setInputValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('');
  const [fromUnit, setFromUnit] = useState('C');
  const [toUnit, setToUnit] = useState('F');

  const convertTemperature = (value, from, to) => {
    if (isNaN(value)) return '';
    let tempInC;

    // Convert from source unit to Celsius
    switch (from) {
      case 'C':
        tempInC = value;
        break;
      case 'F':
        tempInC = (value - 32) * (5 / 9);
        break;
      case 'K':
        tempInC = value - 273.15;
        break;
      default:
        return '';
    }

    // Convert from Celsius to target unit
    switch (to) {
      case 'C':
        return tempInC;
      case 'F':
        return tempInC * (9 / 5) + 32;
      case 'K':
        return tempInC + 273.15;
      default:
        return '';
    }
  };

  const handleConversion = () => {
    const result = convertTemperature(parseFloat(inputValue), fromUnit, toUnit);
    setConvertedValue(result);
  };

  const generateAllConversions = (value, from) => {
    const valueInC = convertTemperature(value, from, 'C');
    return {
      C: valueInC,
      F: convertTemperature(valueInC, 'C', 'F'),
      K: convertTemperature(valueInC, 'C', 'K'),
    };
  };

  const allConversions = inputValue
    ? generateAllConversions(parseFloat(inputValue), fromUnit)
    : {};

  return (
    <div>
      <div className="conversion-container">
        <h1>Temperature Conversion</h1>

        <div className="dropdown-group">
          <label htmlFor="from-unit">Convert From:</label>
          <select
            id="from-unit"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="dropdown"
          >
            <option value="C">Celsius (°C)</option>
            <option value="F">Fahrenheit (°F)</option>
            <option value="K">Kelvin (K)</option>
          </select>
        </div>

        <div className="dropdown-group">
          <label htmlFor="to-unit">Convert To:</label>
          <select
            id="to-unit"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="dropdown"
          >
            <option value="C">Celsius (°C)</option>
            <option value="F">Fahrenheit (°F)</option>
            <option value="K">Kelvin (K)</option>
          </select>
        </div>
      </div>

      <div className="center-container">
        <ConversionCard
          name="Temperature Conversion"
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
                  <td>{allConversions[unit].toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}