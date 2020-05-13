import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { Typography } from '@material-ui/core';
import './Spinner.css';

const Spinner = ({ loadingText, color }) => (
  <div style={{ padding: '10px' }}>
    <div
      style={{
        textAlign: 'center',
      }}
      className="wrapper"
    >
      <div>
        <FontAwesomeIcon
          id="spinner"
          style={{
            fontSize: '60px',
            color: color ? color : 'green',
          }}
          icon={faDiceD20}
          data-testid="iconComponent"
        />
      </div>
    </div>
    <div
      style={{
        textAlign: 'center',
      }}
    >
      {loadingText && <Typography>{loadingText}</Typography>}
    </div>
  </div>
);

export default Spinner;
