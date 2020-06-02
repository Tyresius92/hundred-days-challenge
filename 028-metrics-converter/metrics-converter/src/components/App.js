import React, { useState, useRef } from 'react';
import {
  Container,
  Card,
  CardHeader,
  Button,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  makeStyles,
} from '@material-ui/core';
import conversionUtils from '../utils';

const {
  distance: { convert },
  CONSTANTS: { DISTANCE_UNITS },
} = conversionUtils;

const useStyles = makeStyles(theme => ({
  select: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const App = () => {
  const classes = useStyles();

  const fromLabelRef = useRef();
  const fromLabelWidth = fromLabelRef.current
    ? fromLabelRef.current.clientWidth
    : 0;

  const toLabelRef = useRef();
  const toLabelWidth = toLabelRef.current ? toLabelRef.current.clientWidth : 0;

  const [num, setNum] = useState('0');
  const [from, setFrom] = useState(DISTANCE_UNITS.INCHES);
  const [to, setTo] = useState(DISTANCE_UNITS.INCHES);
  const [result, setResult] = useState(null);

  return (
    <div>
      <Container>
        <Card
          raised
          style={{ margin: '100px 0', padding: '40px', textAlign: 'center' }}
        >
          <CardHeader title="Distance" />
          <FormControl required variant="outlined" className={classes.select}>
            <TextField
              required
              id="filled-name"
              label="Number"
              type="number"
              value={num}
              onChange={e => setNum(e.target.value)}
              variant="outlined"
            />
          </FormControl>

          <FormControl required variant="outlined" className={classes.select}>
            <InputLabel ref={fromLabelRef}>From</InputLabel>
            <Select
              labelWidth={fromLabelWidth}
              value={from}
              onChange={e => setFrom(e.target.value)}
            >
              {Object.values(DISTANCE_UNITS).map(unitName => (
                <MenuItem key={unitName} value={unitName}>
                  {unitName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl required variant="outlined" className={classes.select}>
            <InputLabel ref={toLabelRef}>To</InputLabel>
            <Select
              labelWidth={toLabelWidth}
              value={to}
              onChange={e => setTo(e.target.value)}
            >
              {Object.values(DISTANCE_UNITS).map(unitName => (
                <MenuItem key={unitName} value={unitName}>
                  {unitName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl className={classes.select}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() =>
                setResult({
                  lastNum: parseFloat(num, 10),
                  lastFrom: from,
                  lastTo: to,
                  lastResult: convert(num, from, to),
                })
              }
            >
              Convert!
            </Button>
          </FormControl>

          {result && (
            <Typography>
              {result.lastNum} {result.lastFrom} is equal to {result.lastResult}{' '}
              {result.lastTo}
            </Typography>
          )}
        </Card>
      </Container>
    </div>
  );
};

export default App;
