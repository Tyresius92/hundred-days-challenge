import React from 'react';
import './Toggle.css';

const Toggle = ({ name, onChange, checked }) => {
  return (
    <div style={{ padding: '10px' }}>
      <div style={{ display: 'inline-block', width: '10%' }}>
        <label className="switch">
          <input
            type="checkbox"
            name={name}
            onChange={onChange}
            checked={checked}
          />
          <span className="slider round" />
        </label>
      </div>
      <div style={{ display: 'inline-block', width: '10%' }}>
        <span>{name}</span>
      </div>
    </div>
  );
};

export default Toggle;
