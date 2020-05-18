import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-grid-system';
import numberShapes from './numberShapes';
import './singleDigitNumber.css';

const HorizontalRow = ({ isAlive }) => (
  <Row className="horizontal">
    <Col xs={2} className="dead"></Col>
    <Col xs={8} className={isAlive ? 'alive' : 'dead'}></Col>
    <Col xs={2} className="dead"></Col>
  </Row>
);

HorizontalRow.propTypes = {
  isAlive: PropTypes.bool.isRequired,
};

const VerticalRow = ({ isLeftAlive, isRightAlive }) => (
  <Row className="vertical">
    <Col xs={2} className={isLeftAlive ? 'alive' : 'dead'}></Col>
    <Col xs={8} className="dead"></Col>
    <Col xs={2} className={isRightAlive ? 'alive' : 'dead'}></Col>
  </Row>
);

VerticalRow.propTypes = {
  isLeftAlive: PropTypes.bool.isRequired,
  isRightAlive: PropTypes.bool.isRequired,
};

const SingleDigitNumber = ({ number }) => {
  const shape = numberShapes[number];

  return (
    <div className="singleNumber">
      <HorizontalRow isAlive={shape.top} />
      <VerticalRow
        isLeftAlive={shape.upperLeft}
        isRightAlive={shape.upperRight}
      />
      <HorizontalRow isAlive={shape.middle} />
      <VerticalRow
        isLeftAlive={shape.lowerLeft}
        isRightAlive={shape.lowerRight}
      />
      <HorizontalRow isAlive={shape.bottom} />
    </div>
  );
};

SingleDigitNumber.propTypes = {
  number: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).isRequired,
};

export default SingleDigitNumber;
