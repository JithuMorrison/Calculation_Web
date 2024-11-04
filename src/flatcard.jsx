import React from 'react';
import './App.css'; // Import the CSS file for styling

const FlatCard = ({name,link}) => {
  return (
    <div className="cart">
      <span className="card-text">{name}</span>
      <a href={link} className="arrow-button">&#8594;</a>
    </div>
  );
};

export default FlatCard;
