import React, { useState, useEffect } from 'react';
import {
  ThemeProvider,
  theme,
  CSSReset,
  Text,
  Button,
  Skeleton,
} from '@chakra-ui/core';
import axios from 'axios';
import './App.css';

const App = () => {
  const [pageCount, setPageCount] = useState(null);
  const [buttonClickCount, setButtonClickCount] = useState(null);
  const [isSecretButtonFound, setIsSecretButtonFound] = useState(false);
  const [secretFoundCount, setSecretFoundCount] = useState(null);

  useEffect(() => {
    axios
      .get(
        'https://api.countapi.xyz/hit/tyresius92-hundred-days-count-app/visits'
      )
      .then(response => {
        setPageCount(response.data.value);
      });

    axios
      .get(
        'https://api.countapi.xyz/get/tyresius92-hundred-days-count-app/button-clicks'
      )
      .then(response => {
        setButtonClickCount(response.data.value);
      });
  }, []);

  const handleButtonClick = () => {
    axios
      .get(
        'https://api.countapi.xyz/update/tyresius92-hundred-days-count-app/button-clicks?amount=1'
      )
      .then(response => {
        setButtonClickCount(response.data.value);
      });
  };

  const handleSecretButtonClick = () => {
    axios
      .get(
        'https://api.countapi.xyz/hit/tyresius92-hundred-days-count-app/secret-button'
      )
      .then(response => {
        setIsSecretButtonFound(true);
        setSecretFoundCount(response.data.value);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <div className="app">
        <Text fontSize="6xl">Page Counter!</Text>
        <div className="countBox">
          <Skeleton isLoaded={!!pageCount}>
            <Text fontSize="4xl">
              This page has been visited {pageCount} times
            </Text>
          </Skeleton>
        </div>

        <div className="countBox">
          <Button onClick={handleButtonClick} variantColor="green">
            Click The Button!
          </Button>
          <Skeleton isLoaded={!!buttonClickCount}>
            <Text>The button has been clicked {buttonClickCount} times</Text>
          </Skeleton>
        </div>

        <div className="countBox">
          {isSecretButtonFound ? (
            <Text>
              You found the secret button! The secret button has been found{' '}
              {secretFoundCount} times
            </Text>
          ) : (
            <button onClick={handleSecretButtonClick} className="secretButton">
              Secret Button
            </button>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
