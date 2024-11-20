import React, { useState } from 'react';
import './App.css';
import ConversionCard from './Card';

export default function Distance() {
  const [inputValue, setInputValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('');
  const [fromUnit, setFromUnit] = useState('km');
  const [toUnit, setToUnit] = useState('m');

  // Conversion factors to meters
  const conversionToMeters = {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    um: 0.000001,
    nm: 0.000000001,
    mi: 1609.35,
    yd: 0.9144,
    ft: 0.3048,
    in: 0.0254,
    ly: 9460660000000000,
  };

  // Function to convert any unit to meters
  const convertToMeters = (value, unit) => {
    return value * conversionToMeters[unit];
  };

  // Function to convert meters to the desired unit
  const convertFromMeters = (valueInMeters, unit) => {
    return valueInMeters / conversionToMeters[unit];
  };

  const handleConversion = () => {
    const valueInMeters = convertToMeters(parseFloat(inputValue), fromUnit);
    const finalValue = convertFromMeters(valueInMeters, toUnit);
    setConvertedValue(finalValue);
  };

  const generateAllConversions = (valueInMeters) => {
    const allConversions = {};
    Object.keys(conversionToMeters).forEach((unit) => {
      allConversions[unit] = convertFromMeters(valueInMeters, unit);
    });
    return allConversions;
  };

  // Calculate all conversions if the input is valid
  const allConversions = inputValue
    ? generateAllConversions(convertToMeters(parseFloat(inputValue), fromUnit))
    : {};

  return (
    <div>
    <div className="conversion-container">
      <h1>Unit Conversion</h1>
      
      <div className="dropdown-group">
        <label htmlFor="from-unit">Convert From:</label>
        <select
          id="from-unit"
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
          className="dropdown"
        >
          <option value="km">Kilometers (km)</option>
          <option value="m">Meters (m)</option>
          <option value="cm">Centimeters (cm)</option>
          <option value="mm">Millimeters (mm)</option>
          <option value="um">Micrometers (um)</option>
          <option value="nm">Nanometers (nm)</option>
          <option value="mi">Mile (mi)</option>
          <option value="yd">Yard (yd)</option>
          <option value="ft">Foot (ft)</option>
          <option value="in">Inch (in)</option>
          <option value="ly">Light Year (ly)</option>
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
          <option value="km">Kilometers (km)</option>
          <option value="m">Meters (m)</option>
          <option value="cm">Centimeters (cm)</option>
          <option value="mm">Millimeters (mm)</option>
          <option value="um">Micrometers (um)</option>
          <option value="nm">Nanometers (nm)</option>
          <option value="mi">Mile (mi)</option>
          <option value="yd">Yard (yd)</option>
          <option value="ft">Foot (ft)</option>
          <option value="in">Inch (in)</option>
          <option value="ly">Light Year (ly)</option>
        </select>
      </div>
    </div>
    <div className="center-container">
      <ConversionCard
        name="Distance Conversion"
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
