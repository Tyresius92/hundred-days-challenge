import React, { useState } from 'react';
import { Button, Container, TextField, makeStyles } from '@material-ui/core';
import NavBar from './NavBar';
import Card from './Card';
import ColorSwatch from './ColorSwatch';
import generatePallet from '../utils';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minHeight: '1vh',
  },
}));

const isValidColorNum = color => {
  return color !== '' && parseInt(color, 10) >= 0 && parseInt(color, 10) <= 255;
};

const isValidStepNum = steps => {
  return (
    steps !== '' &&
    parseInt(steps, 10) > 0 &&
    // more than 255 steps will result in duplicates (less might result in dupes too, but still)
    parseInt(steps, 10) <= 255
  );
};

const getRandomInt = max => Math.floor(Math.random() * max);

const App = () => {
  const classes = useStyles();

  const [red, setRed] = useState(getRandomInt(255));
  const [green, setGreen] = useState(getRandomInt(255));
  const [blue, setBlue] = useState(getRandomInt(255));
  const [steps, setSteps] = useState(getRandomInt(10));
  const [pallet, setPallet] = useState(generatePallet(red, green, blue, steps));

  return (
    <div className={classes.root}>
      <Container>
        <Card title="Enter your initial color">
          <TextField
            id="red-number"
            label="Red"
            type="number"
            size="small"
            error={!isValidColorNum(red)}
            InputLabelProps={{
              shrink: true,
            }}
            value={red}
            onChange={e => setRed(e.target.value)}
            variant="outlined"
          />
          <TextField
            id="green-number"
            label="Green"
            type="number"
            size="small"
            error={!isValidColorNum(green)}
            InputLabelProps={{
              shrink: true,
            }}
            value={green}
            onChange={e => setGreen(e.target.value)}
            variant="outlined"
          />
          <TextField
            id="blue-number"
            label="Blue"
            type="number"
            size="small"
            error={!isValidColorNum(blue)}
            InputLabelProps={{
              shrink: true,
            }}
            value={blue}
            onChange={e => setBlue(e.target.value)}
            variant="outlined"
          />
          <TextField
            id="blue-number"
            label="Number of Hues"
            type="number"
            size="small"
            error={!isValidStepNum(steps)}
            InputLabelProps={{
              shrink: true,
            }}
            value={steps}
            onChange={e => setSteps(e.target.value)}
            variant="outlined"
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
                  parseInt(red, 10),
                  parseInt(green, 10),
                  parseInt(blue, 10),
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
              backgroundColor: `rgb(${parseInt(red, 10)},
              ${parseInt(green, 10)},
              ${parseInt(blue, 10)})`,
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
      <NavBar color={`rgb(${red},${green},${blue})`} />
    </div>
  );
};

export default App;
