import React, { useState } from 'react';
import {
  Container,
  Card,
  AppBar,
  Typography,
  makeStyles,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@material-ui/core';
import tempConverters from '../utils/tempConverterUtils';

const FAHRENHEIT = 'f';
const CELSIUS = 'c';
const KELVIN = 'k';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  text: {
    padding: '20px',
  },
  appBar: {
    padding: '10px',
  },
  container: {
    margin: '20px auto',
  },
  card: {
    textAlign: 'center',
    padding: '40px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  italics: {
    fontStyle: 'italic',
  },
}));

const App = () => {
  const classes = useStyles();

  const [tempText, setTempText] = useState('');
  const [units, setUnits] = useState(FAHRENHEIT);

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Typography variant="h6" className={classes.title}>
          Temperature Converter
        </Typography>
      </AppBar>
      <Container className={classes.container}>
        <Card raised className={classes.card}>
          <Typography>Enter Your Temperature To Be Converted</Typography>
          <TextField
            variant="outlined"
            type="number"
            value={tempText}
            onChange={e => setTempText(e.target.value)}
          />
          <RadioGroup
            aria-label="units"
            name="units"
            value={units}
            onChange={e => setUnits(e.target.value)}
          >
            <FormControlLabel
              value={FAHRENHEIT}
              control={<Radio />}
              label="Fahrenheit"
            />
            <FormControlLabel
              value={CELSIUS}
              control={<Radio />}
              label="Celsius"
            />
            <FormControlLabel
              value={KELVIN}
              control={<Radio />}
              label="Kelvin"
            />
          </RadioGroup>
          <hr />
          {tempText !== '' && (
            <>
              <Typography>
                {(() => {
                  if (units === CELSIUS) {
                    return tempConverters.convertCelsiusToFahrenheit(
                      parseInt(tempText, 10)
                    );
                  } else if (units === KELVIN) {
                    return tempConverters.convertKelvinToFahrenheit(
                      parseInt(tempText, 10)
                    );
                  } else {
                    return tempText;
                  }
                })()}{' '}
                degrees Fahrenheit
              </Typography>
              <Typography>
                {(() => {
                  if (units === FAHRENHEIT) {
                    return tempConverters.convertFahrenheitToCelsius(
                      parseInt(tempText, 10)
                    );
                  } else if (units === KELVIN) {
                    return tempConverters.convertFahrenheitToKelvin(
                      parseInt(tempText, 10)
                    );
                  } else {
                    return tempText;
                  }
                })()}{' '}
                degrees Celsius
              </Typography>
              <Typography>
                {(() => {
                  if (units === FAHRENHEIT) {
                    return tempConverters.convertFahrenheitToKelvin(
                      parseInt(tempText, 10)
                    );
                  } else if (units === CELSIUS) {
                    return tempConverters.convertCelsiusToKelvin(
                      parseInt(tempText, 10)
                    );
                  } else {
                    return tempText;
                  }
                })()}{' '}
                degrees Kelvin
              </Typography>
            </>
          )}
        </Card>
      </Container>
    </>
  );
};

export default App;
