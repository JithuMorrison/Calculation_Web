import React, { useState } from 'react';
import './App.css';
import ConversionCard from './Card';

export default function NumberSystemConversion() {
  // Conversion for Decimal to Hexadecimal
  const [decimalhexInput, setDecimalhexInput] = useState('');
  const [hexFromDecimal, setHexFromDecimal] = useState('');
  const handleDecimalToHex = () => {
    const conversion = parseInt(decimalhexInput).toString(16).toUpperCase();
    setHexFromDecimal(conversion);
  };

  // Conversion for Decimal to Binary
  const [decimalbinaryInput, setDecimalBinaryInput] = useState('');
  const [binaryFromDecimal, setBinaryFromDecimal] = useState('');
  const handleDecimalToBinary = () => {
    const conversion = parseInt(decimalbinaryInput).toString(2);
    setBinaryFromDecimal(conversion);
  };

  // Conversion for Decimal to Octal
  const [decimaloctalInput, setDecimalOctalInput] = useState('');
  const [octalFromDecimal, setOctalFromDecimal] = useState('');
  const handleDecimalToOctal = () => {
    const conversion = parseInt(decimaloctalInput).toString(8);
    setOctalFromDecimal(conversion);
  };

  // Conversion for Binary to Hexadecimal
  const [binaryHexInput, setBinaryHexInput] = useState('');
  const [hexFromBinary, setHexFromBinary] = useState('');
  const handleBinaryToHex = () => {
    const conversion = parseInt(binaryHexInput, 2).toString(16).toUpperCase();
    setHexFromBinary(conversion);
  };

  // Conversion for Binary to Octal
  const [binaryOctalInput, setBinaryOctalInput] = useState('');
  const [octalFromBinary, setOctalFromBinary] = useState('');
  const handleBinaryToOctal = () => {
    const conversion = parseInt(binaryOctalInput, 2).toString(8);
    setOctalFromBinary(conversion);
  };

  // Conversion for Octal to Hexadecimal
  const [octalHexInput, setOctalHexInput] = useState('');
  const [hexFromOctal, setHexFromOctal] = useState('');
  const handleOctalToHex = () => {
    const conversion = parseInt(octalHexInput, 8).toString(16).toUpperCase();
    setHexFromOctal(conversion);
  };

  return (
    <div className="conversion-container">
      <ConversionCard
        name="Decimal to Hexadecimal"
        inputValue={decimalhexInput}
        setInputValue={setDecimalhexInput}
        convertedValue={hexFromDecimal}
        handleConvert={handleDecimalToHex}
      />
      <ConversionCard
        name="Decimal to Binary"
        inputValue={decimalbinaryInput}
        setInputValue={setDecimalBinaryInput}
        convertedValue={binaryFromDecimal}
        handleConvert={handleDecimalToBinary}
      />
      <ConversionCard
        name="Decimal to Octal"
        inputValue={decimaloctalInput}
        setInputValue={setDecimalOctalInput}
        convertedValue={octalFromDecimal}
        handleConvert={handleDecimalToOctal}
      />
      <ConversionCard
        name="Binary to Hexadecimal"
        inputValue={binaryHexInput}
        setInputValue={setBinaryHexInput}
        convertedValue={hexFromBinary}
        handleConvert={handleBinaryToHex}
      />
      <ConversionCard
        name="Binary to Octal"
        inputValue={binaryOctalInput}
        setInputValue={setBinaryOctalInput}
        convertedValue={octalFromBinary}
        handleConvert={handleBinaryToOctal}
      />
      <ConversionCard
        name="Octal to Hexadecimal"
        inputValue={octalHexInput}
        setInputValue={setOctalHexInput}
        convertedValue={hexFromOctal}
        handleConvert={handleOctalToHex}
      />
    </div>
  );
}
