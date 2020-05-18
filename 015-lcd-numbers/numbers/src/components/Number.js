import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import SingleDigitNumber from './SingleDigitNumber';
import './Number.css';

const Number = ({ number }) => {
  // Why useState? We want consistent IDs for keys across renders
  // for performance and expected behavior. useState allows us to not need
  // to use the array index for the key.
  const [numbers] = useState(
    [...number.toString()].map(strNumber => ({
      id: nanoid(),
      num: parseInt(strNumber, 10),
    }))
  );

  return (
    <div className="number">
      {numbers.map(num => (
        <SingleDigitNumber key={num.id} number={num.num} />
      ))}
    </div>
  );
};

Number.propTypes = {
  // Note: Only non-negative integers are supported
  number: PropTypes.number.isRequired,
};

export default Number;
