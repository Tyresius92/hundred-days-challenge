import React, { useState } from 'react';
import {
  Container,
  Card,
  CardHeader,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import paperImage from '../images/paper.jpg';
import rockImage from '../images/rock.jpg';
import scissorsImage from '../images/scissors.jpg';
import questionImage from '../images/question.png';
import Button from './Button';

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

const getImage = selected => {
  switch (selected) {
    case ROCK:
      return rockImage;
    case PAPER:
      return paperImage;
    case SCISSORS:
      return scissorsImage;
    default:
      return questionImage;
  }
};

const getWinLoseText = (playerChoice, botChoice) => {
  if (playerChoice === null) {
    return 'Rock, Paper, or Scissors?';
  }
  if (playerChoice === botChoice) {
    return "It's a tie!";
  }
  if (
    (playerChoice === ROCK && botChoice === SCISSORS) ||
    (playerChoice === PAPER && botChoice === ROCK) ||
    (playerChoice === SCISSORS && botChoice === PAPER)
  ) {
    return 'You Win!';
  }
  return 'You Lose!';
};

const App = () => {
  const [selected, setSelected] = useState(null);
  const [botSelection, setBotSelection] = useState(null);

  const playGame = selection => {
    const randomInt = Math.floor(Math.random() * 3);

    const botChoice = [ROCK, PAPER, SCISSORS][randomInt];

    setSelected(selection);
    setBotSelection(botChoice);
  };

  const reset = () => {
    setSelected(null);
    setBotSelection(null);
  };

  return (
    <div style={{ margin: '100px' }}>
      <Container>
        <Card style={{ padding: '40px', textAlign: 'center' }}>
          <CardHeader title={getWinLoseText(selected, botSelection)} />
          <Grid container>
            <Grid item xs={6}>
              <Paper style={{ margin: '30px', height: '300px' }}>
                <Typography>You</Typography>
                <img style={{ height: '260px' }} src={getImage(selected)} />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper style={{ margin: '30px', height: '300px' }}>
                <Typography>The Machine</Typography>
                <img style={{ height: '260px' }} src={getImage(botSelection)} />
              </Paper>
            </Grid>
          </Grid>
          {selected ? (
            <div>
              <Button onClick={reset}>Play Again</Button>
            </div>
          ) : (
            <div>
              <Button onClick={() => playGame(ROCK)}>Rock</Button>
              <Button onClick={() => playGame(PAPER)}>Paper</Button>
              <Button onClick={() => playGame(SCISSORS)}>Scissors</Button>
            </div>
          )}
        </Card>
      </Container>
    </div>
  );
};
export default App;
