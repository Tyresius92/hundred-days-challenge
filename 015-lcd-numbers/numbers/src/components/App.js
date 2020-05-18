import React from 'react';
import { Container, setConfiguration } from 'react-grid-system';
import Number from './Number';

setConfiguration({ gutterWidths: 0 });

const App = () => (
  <Container>
    <Number number={5318008} />
  </Container>
);

export default App;
