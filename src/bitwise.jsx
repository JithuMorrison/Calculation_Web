import React, { useState } from 'react';
import './App.css';
import ConversionCard1 from './Card2';
import ConversionCard from './Card';


export default function BitwiseOperations() {
  // State for the bitwise operations
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [andResult, setAndResult] = useState('');
  const [orResult, setOrResult] = useState('');
  const [xorResult, setXorResult] = useState('');
  const [xnorResult, setXnorResult] = useState('');
  const [notResult, setNotResult] = useState('');

  const handleBitwiseOperations = () => {
    const n1 = parseInt(num1, 10);
    const n2 = parseInt(num2, 10);

    setAndResult((n1 & n2).toString()); // AND operation
    setOrResult((n1 | n2).toString());  // OR operation
    setXorResult((n1 ^ n2).toString()); // XOR operation
    setXnorResult((~(n1 ^ n2)).toString());
    setNotResult((~n1).toString()); // NOT operation for num1
  };

  const [number, setNumber] = useState('');
  const [onesComplement, setOnesComplement] = useState('');
  const [twosComplement, setTwosComplement] = useState('');

  const handleComplements = () => {
    const num = parseInt(number, 10);
    const binary = num.toString(2); // Convert number to binary string
    const binaryLength = binary.length;

    // Calculate one's complement
    const onesComp = binary.split('').map(bit => (bit === '0' ? '1' : '0')).join('');

    // Calculate two's complement
    const twosComp = (parseInt(onesComp, 2) + 1).toString(2).padStart(binaryLength, '0');

    setOnesComplement(onesComp);
    setTwosComplement(twosComp);
  };

  return (
    <div className="conversion-container">
      <ConversionCard1
        name="Bitwise AND"
        inputValue1={num1}
        setInputValue1={setNum1}
        inputValue2={num2}
        setInputValue2={setNum2}
        convertedValue={andResult}
        handleConvert={handleBitwiseOperations}
      />
      <ConversionCard1
        name="Bitwise OR"
        inputValue1={num1}
        setInputValue1={setNum1}
        inputValue2={num2}
        setInputValue2={setNum2}
        convertedValue={orResult}
        handleConvert={handleBitwiseOperations}
      />
      <ConversionCard1
        name="Bitwise XOR"
        inputValue1={num1}
        setInputValue1={setNum1}
        inputValue2={num2}
        setInputValue2={setNum2}
        convertedValue={xorResult}
        handleConvert={handleBitwiseOperations}
      />
      <ConversionCard1
        name="Bitwise XNOR"
        inputValue1={num1}
        setInputValue1={setNum1}
        inputValue2={num2}
        setInputValue2={setNum2}
        convertedValue={xnorResult}
        handleConvert={handleBitwiseOperations}
      />
      <ConversionCard
        name="Bitwise NOT"
        inputValue={num1}
        setInputValue={setNum1}
        convertedValue={notResult}
        handleConvert={handleBitwiseOperations}
      />
      <ConversionCard
        name="One's Complement"
        inputValue={number}
        setInputValue={setNumber}
        convertedValue={onesComplement}
        handleConvert={handleComplements}
      />
      <ConversionCard
        name="Two's Complement"
        inputValue={number}
        setInputValue={setNumber}
        convertedValue={twosComplement}
        handleConvert={handleComplements}
      />
    </div>
  );
}
