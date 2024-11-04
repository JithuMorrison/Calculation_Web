import React from 'react';
import './App.css'; // Import your CSS here

function ConversionCard1({ name, handleConvert, inputValue1, setInputValue1, inputValue2, setInputValue2, convertedValue }) {
  return (
    <div className="card tard">
      <h2>{name}</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter first value"
          value={inputValue1}
          onChange={(e) => setInputValue1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter second value"
          value={inputValue2}
          onChange={(e) => setInputValue2(e.target.value)}
        />
      </div>
      <input
        type="text"
        placeholder="Result"
        value={convertedValue}
        readOnly
      />
      <button onClick={handleConvert}>Convert</button>
    </div>
  );
}

export default ConversionCard1;
