import React, { useState } from 'react';
import { Button, Container, Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import RestoreIcon from '@material-ui/icons/Restore';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);

  const reset = () => {
    setCurrentNumber(0);
  };

  const increment = () => {
    setCurrentNumber(currentNumber + 1);
  };

  const decrement = () => {
    setCurrentNumber(currentNumber - 1);
  };

  return (
    <Container style={{ paddingTop: '100px', textAlign: 'center' }}>
      <div style={{ display: 'inline-block' }}>
        <Paper
          style={{
            backgroundColor: '#ccc',
            padding: '20px 0',
            fontSize: '40px',
          }}
        >
          {currentNumber}
        </Paper>
        <div>
          <Button
            style={{ margin: '5px 0' }}
            variant="contained"
            color="primary"
            onClick={increment}
          >
            <AddIcon />
          </Button>
          <Button
            style={{ margin: '5px 5px' }}
            variant="contained"
            color="secondary"
            onClick={reset}
          >
            <RestoreIcon />
          </Button>
          <Button
            style={{ margin: '5px 0' }}
            variant="contained"
            color="primary"
            onClick={decrement}
          >
            <RemoveIcon />
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default App;
