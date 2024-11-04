import React, { useState } from 'react';
import './App.css'; // Import your CSS here

function ConversionCard({name,handleConvert,inputValue, setInputValue,convertedValue}) {

  return (
    <div className="card">
      <h2>{name}</h2>
      <input
        type="text"
        placeholder="Enter value"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input
        type="text"
        placeholder="Converted value"
        value={convertedValue}
        readOnly
      />
      <button onClick={handleConvert}>Convert</button>
    </div>
  );
}

export default ConversionCard;
