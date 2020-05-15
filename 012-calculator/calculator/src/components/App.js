import React, { useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';

const App = () => {
  const [numOne, setNumOne] = useState('');
  const [numTwo, setNumTwo] = useState('');

  const [operator, setOperator] = useState(null);

  const onAllClearClick = () => {
    setNumOne('');
    setNumTwo('');
    setOperator(null);
  };

  const onSignClick = () => {
    if (operator === '') {
      setNumOne('-');
      setOperator(null);
    } else if (operator) {
      if (numTwo.length > 0 && numTwo[0] === '-') {
        setNumTwo([...numTwo].slice(1).join(''));
      } else {
        setNumTwo('-' + numTwo);
      }
    } else {
      if (numOne.length > 0 && numOne[0] === '-') {
        setNumOne([...numOne].slice(1).join(''));
      } else {
        setNumOne('-' + numOne);
      }
    }
  };

  const onNumberClick = num => {
    if (operator === '') {
      if (num === '.') {
        setNumOne('.');
      } else {
        setNumOne(num.toString(10));
      }
      setOperator(null);
    } else if (operator) {
      if (num === '.' && ![...numTwo].includes('.')) {
        setNumTwo(numTwo + '.');
      } else if (num !== '.') {
        setNumTwo(numTwo + num.toString(10));
      }
    } else {
      if (num === '.' && ![...numOne].includes('.')) {
        setNumOne(numOne + '.');
      } else if (num !== '.') {
        setNumOne(numOne + num.toString(10));
      }
    }
  };

  const onOperatorClick = op => {
    if (op === '=') {
      switch (operator) {
        case '+':
          setNumOne((parseFloat(numOne) + parseFloat(numTwo)).toString());
          break;
        case '-':
          setNumOne((parseFloat(numOne) - parseFloat(numTwo)).toString());
          break;
        case '*':
          setNumOne((parseFloat(numOne) * parseFloat(numTwo)).toString());
          break;
        case '/':
          setNumOne((parseFloat(numOne) / parseFloat(numTwo)).toString());
          break;
      }
      setOperator('');
      setNumTwo('');
    } else if (op === '%') {
      if (operator) {
        setNumTwo((parseFloat(numTwo) / 100).toString());
      } else {
        setNumOne((parseFloat(numOne) / 100).toString());
      }
    } else {
      if (operator) {
        switch (operator) {
          case '+':
            setNumOne((parseFloat(numOne) + parseFloat(numTwo)).toString());
            break;
          case '-':
            setNumOne((parseFloat(numOne) - parseFloat(numTwo)).toString());
            break;
          case '*':
            setNumOne((parseFloat(numOne) * parseFloat(numTwo)).toString());
            break;
          case '/':
            setNumOne((parseFloat(numOne) / parseFloat(numTwo)).toString());
            break;
        }
      }
      setOperator(op);
      setNumTwo('');
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <p>
            {numOne} {operator} {numTwo}
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <button onClick={onAllClearClick}>AC</button>
        </Col>
        <Col xs={3}>
          <button onClick={onSignClick}>+/-</button>
        </Col>
        <Col xs={3}>
          <button onClick={() => onOperatorClick('%')}>%</button>
        </Col>
        <Col xs={3}>
          <button onClick={() => onOperatorClick('/')}>÷</button>
        </Col>
      </Row>

      <Row>
        <Col xs={3}>
          <button onClick={() => onNumberClick(7)}>7</button>
        </Col>
        <Col xs={3}>
          <button onClick={() => onNumberClick(8)}>8</button>
        </Col>
        <Col xs={3}>
          <button onClick={() => onNumberClick(9)}>9</button>
        </Col>
        <Col xs={3}>
          <button onClick={() => onOperatorClick('*')}>X</button>
        </Col>
      </Row>

      <Row>
        <Col xs={3}>
          <button onClick={() => onNumberClick(4)}>4</button>
        </Col>
        <Col xs={3}>
          <button onClick={() => onNumberClick(5)}>5</button>
        </Col>
        <Col xs={3}>
          <button onClick={() => onNumberClick(6)}>6</button>
        </Col>
        <Col xs={3}>
          <button onClick={() => onOperatorClick('-')}>-</button>
        </Col>
      </Row>

      <Row>
        <Col xs={3}>
          <button onClick={() => onNumberClick(1)}>1</button>
        </Col>
        <Col xs={3}>
          <button onClick={() => onNumberClick(2)}>2</button>
        </Col>
        <Col xs={3}>
          <button onClick={() => onNumberClick(3)}>3</button>
        </Col>
        <Col xs={3}>
          <button onClick={() => onOperatorClick('+')}>+</button>
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <button onClick={() => onNumberClick(0)}>0</button>
        </Col>
        <Col xs={3}>
          <button onClick={() => onNumberClick('.')}>.</button>
        </Col>
        <Col xs={3}>
          <button onClick={() => onOperatorClick('=')}>=</button>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
