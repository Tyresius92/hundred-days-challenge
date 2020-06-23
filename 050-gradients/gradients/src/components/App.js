import React, { useState } from 'react';
import { Button, Container, TextField, makeStyles } from '@material-ui/core';
import NavBar from './NavBar';
import Card from './Card';
import ColorSwatch from './ColorSwatch';
import generatePallet from '../utils';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const isValidColorNum = color => {
  return color !== '' && parseInt(color, 10) >= 0 && parseInt(color, 10) <= 255;
};

const getRandomVal = () => Math.floor(Math.random() * 255);

const App = () => {
  const classes = useStyles();

  const [red, setRed] = useState(getRandomVal());
  const [green, setGreen] = useState(getRandomVal());
  const [blue, setBlue] = useState(getRandomVal());
  const [pallet, setPallet] = useState(generatePallet(red, green, blue));

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
          <Button
            color="primary"
            variant="contained"
            disabled={
              !isValidColorNum(red) ||
              !isValidColorNum(green) ||
              !isValidColorNum(blue)
            }
            size="large"
            onClick={() =>
              setPallet(
                generatePallet(
                  parseInt(red, 10),
                  parseInt(green, 10),
                  parseInt(blue, 10)
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
