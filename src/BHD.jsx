import React, { useState } from 'react';
import './App.css';
import ConversionCard from './Card';

export default function NumberSystemConversion() {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('Binary');
  const [toUnit, setToUnit] = useState('Decimal');
  const [convertedValue, setConvertedValue] = useState('');
  const [conversionResults, setConversionResults] = useState([]);

  const convert = () => {
    const input = inputValue.trim();
    let results = {};

    try {
      if (fromUnit === toUnit) {
        results[toUnit] = input;
      } else {
        let decimalValue = convertToDecimal(input);
        if (decimalValue !== null) {
          results = {
            Decimal: convertFromDecimal(decimalValue, 'Decimal'),
            Binary: convertFromDecimal(decimalValue, 'Binary'),
            Octal: convertFromDecimal(decimalValue, 'Octal'),
            Hexadecimal: convertFromDecimal(decimalValue, 'Hexadecimal'),
          };
        } else {
          results = { Invalid: 'Invalid Input' };
        }
      }
    } catch (error) {
      results = { Invalid: 'Invalid Input' };
    }

    setConvertedValue(results[toUnit] || 'Invalid Input');
    setConversionResults(results);
  };

  const convertToDecimal = (input) => {
    let decimalValue = null;
    switch (fromUnit) {
      case 'Binary':
        decimalValue = parseInt(input, 2);
        break;
      case 'Octal':
        decimalValue = parseInt(input, 8);
        break;
      case 'Hexadecimal':
        decimalValue = parseInt(input, 16);
        break;
      case 'Decimal':
        decimalValue = parseInt(input, 10);
        break;
      default:
        decimalValue = null;
    }
    return isNaN(decimalValue) ? null : decimalValue;
  };

  const convertFromDecimal = (decimalValue, toUnit) => {
    switch (toUnit) {
      case 'Binary':
        return decimalValue.toString(2);
      case 'Octal':
        return decimalValue.toString(8);
      case 'Hexadecimal':
        return decimalValue.toString(16).toUpperCase();
      case 'Decimal':
        return decimalValue.toString(10);
      default:
        return 'Invalid Conversion';
    }
  };

  return (
    <div>
      <div className="conversion-container">
        <h1>Number System Conversion</h1>

        <div className="dropdown-group">
          <label htmlFor="from-unit">Convert From:</label>
          <select
            id="from-unit"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="dropdown"
          >
            <option value="Binary">Binary</option>
            <option value="Octal">Octal</option>
            <option value="Hexadecimal">Hexadecimal</option>
            <option value="Decimal">Decimal</option>
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
            <option value="Decimal">Decimal</option>
            <option value="Binary">Binary</option>
            <option value="Octal">Octal</option>
            <option value="Hexadecimal">Hexadecimal</option>
          </select>
        </div>
      </div>

      <div className="center-container">
        <ConversionCard
          name={`Result for ${fromUnit} to ${toUnit}`}
          inputValue={inputValue}
          setInputValue={setInputValue}
          convertedValue={convertedValue}
          handleConvert={convert}
        />
        <div className="all-conversions-container">
        <h2>Conversion Results</h2>
        <table>
          <thead>
            <tr>
              <th>Conversion Type</th>
              <th>Converted Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(conversionResults).length === 0 ? (
              <tr>
                <td colSpan="2">No conversion results yet.</td>
              </tr>
            ) : (
              Object.keys(conversionResults).map((key, index) => (
                <tr key={index}>
                  <td>{fromUnit} to {key}</td>
                  <td>{conversionResults[key]}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
}
