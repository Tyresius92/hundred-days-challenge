import React, { useState } from 'react';
import { Button, Container, TextField, makeStyles } from '@material-ui/core';
import NavBar from './NavBar';
import Card from './Card';
import ColorSwatch from './ColorSwatch';
import generatePallet from '../utils';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    minHeight: '1vh',
  },
});

const isValidColorNum = color =>
  color !== '' && parseInt(color, 10) >= 0 && parseInt(color, 10) <= 255;

const isValidStepNum = steps =>
  steps !== '' &&
  parseInt(steps, 10) > 0 &&
  // more than 255 steps will result in duplicates
  // (less might result in dupes too, but still)
  parseInt(steps, 10) <= 255;

const getRandomInt = max => Math.floor(Math.random() * max);

const textFieldProps = {
  type: 'number',
  size: 'small',
  InputLabelProps: {
    shrink: true,
  },
  variant: 'outlined',
};

const App = () => {
  const classes = useStyles();

  const [red, setRed] = useState(getRandomInt(255));
  const [green, setGreen] = useState(getRandomInt(255));
  const [blue, setBlue] = useState(getRandomInt(255));
  const [steps, setSteps] = useState(getRandomInt(10));
  const [pallet, setPallet] = useState(
    generatePallet({ red, green, blue }, steps)
  );

  const rgbString = `rgb(${parseInt(red, 10)},${parseInt(green, 10)},${parseInt(
    blue,
    10
  )})`;

  return (
    <div className={classes.root}>
      <Container>
        <Card title="Enter your initial color">
          <TextField
            {...textFieldProps}
            id="red-number"
            label="Red"
            error={!isValidColorNum(red)}
            value={red}
            onChange={e => setRed(e.target.value)}
          />
          <TextField
            {...textFieldProps}
            id="green-number"
            label="Green"
            error={!isValidColorNum(green)}
            value={green}
            onChange={e => setGreen(e.target.value)}
          />
          <TextField
            {...textFieldProps}
            id="blue-number"
            label="Blue"
            error={!isValidColorNum(blue)}
            value={blue}
            onChange={e => setBlue(e.target.value)}
          />
          <TextField
            {...textFieldProps}
            id="number-of-hues"
            label="Number of Hues"
            error={!isValidStepNum(steps)}
            value={steps}
            onChange={e => setSteps(e.target.value)}
          />
          <Button
            color="primary"
            variant="contained"
            disabled={
              !isValidColorNum(red) ||
              !isValidColorNum(green) ||
              !isValidColorNum(blue) ||
              !isValidStepNum(steps)
            }
            size="large"
            onClick={() =>
              setPallet(
                generatePallet(
                  {
                    red: parseInt(red, 10),
                    green: parseInt(green, 10),
                    blue: parseInt(blue, 10),
                  },
                  parseInt(steps, 10)
                )
              )
            }
          >
            Make my pallet!
          </Button>
          <div
            style={{
              width: '20%',
              margin: '20px auto',
              backgroundColor: rgbString,
              height: '40px',
              borderRadius: '8px',
            }}
          ></div>
        </Card>
        <Card title="Your Pallet">
          <Container>
            {pallet.map(color => (
              <ColorSwatch key={color} color={color} />
            ))}
          </Container>
        </Card>
      </Container>
      <NavBar color={rgbString} />
    </div>
  );
};

export default App;
