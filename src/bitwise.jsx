import React, { useState } from 'react';
import './App.css';
import ConversionCard from './Card';
import ConversionCard1 from './Card2';

export default function BitwiseOperations() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('AND');
  const [result, setResult] = useState('');

  const handleOperation = () => {
    const n1 = parseInt(num1, 10) || 0;
    const n2 = parseInt(num2, 10) || 0;

    switch (operation) {
      case 'AND':
        setResult((n1 & n2).toString());
        break;
      case 'OR':
        setResult((n1 | n2).toString());
        break;
      case 'XOR':
        setResult((n1 ^ n2).toString());
        break;
      case 'XNOR':
        setResult((~(n1 ^ n2)).toString());
        break;
      case 'NOT':
        setResult((~n1).toString());
        break;
      case "One's Complement":
        const binary = n1.toString(2);
        setResult(
          binary
            .split('')
            .map((bit) => (bit === '0' ? '1' : '0'))
            .join('')
        );
        break;
      case "Two's Complement":
        const onesComplement = n1
          .toString(2)
          .split('')
          .map((bit) => (bit === '0' ? '1' : '0'))
          .join('');
        setResult((parseInt(onesComplement, 2) + 1).toString(2));
        break;
      default:
        setResult('Invalid Operation');
        break;
    }
  };

  return (
    <div>
    <div className="conversion-container">
      <h1>Bitwise Operations</h1>

      <div className="dropdown-group">
        <div>
          <label htmlFor="operation-select">Select Operation:</label>
          <select
            id="operation-select"
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className='dropdown'
          >
            <option value="AND">Bitwise AND</option>
            <option value="OR">Bitwise OR</option>
            <option value="XOR">Bitwise XOR</option>
            <option value="XNOR">Bitwise XNOR</option>
            <option value="NOT">Bitwise NOT</option>
            <option value="One's Complement">One's Complement</option>
            <option value="Two's Complement">Two's Complement</option>
          </select>
        </div>
      </div>
      </div>

      <div className="center-container">
      {(operation !== 'NOT' && operation !== "One's Complement" && operation !== "Two's Complement") && (
        <ConversionCard1 
        inputValue1={num1} 
        setInputValue1={setNum1} 
        inputValue2={num2} 
        setInputValue2={setNum2} 
        convertedValue={result} 
        handleConvert={handleOperation}
        />
      )}
      {(operation === 'NOT' || operation === "One's Complement" || operation === "Two's Complement") && (
        <ConversionCard
        inputValue={num1}
        setInputValue={setNum1}
        convertedValue={result}
        handleConvert={handleOperation}
        />
      )}
      <div className="all-conversions-container">
        <h2>Bitwise Operation Results</h2>
        <table>
          <thead>
            <tr>
              <th>Input 1 (Binary)</th>
              <th>Input 2 (Binary)</th>
              <th>Output (Binary)</th>
            </tr>
          </thead>
          <tbody>
            {num1 || num2 || result ? (
              <tr>
                <td>{num1 ? parseInt(num1, 10).toString(2) : 'N/A'}</td>
                <td>{num2 ? parseInt(num2, 10).toString(2) : 'N/A'}</td>
                <td>{result ? parseInt(result, 10).toString(2) : 'N/A'}</td>
              </tr>
            ) : (
              <tr>
                <td colSpan="3">No result yet. Please enter values and select an operation.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
}
