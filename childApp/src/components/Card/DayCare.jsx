// components/Card/Card.js
import React from 'react';

const Card = ({ title, subtitle, content, hours, contact }) => {
  return (
    <div className="bg-slate-800 shadow-lg p-6 rounded-md text-center text-white">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <h1 className="text-4xl font-bold text-green-600 mb-4">{subtitle}</h1>
      {content.map((text, index) => (
        <p key={index} className="text-lg font-medium mb-2">{text}</p>
      ))}
      <hr className="my-4"/>
      <h3 className="text-2xl font-semibold mb-2">Hours of Operation</h3>
      {hours.map((hour, index) => (
        <p key={index} className="text-lg font-medium">{hour}</p>
      ))}
      <hr className="my-4"/>
      <p className="text-lg font-medium">{contact}</p>
    </div>
  );
};

export default Card;
