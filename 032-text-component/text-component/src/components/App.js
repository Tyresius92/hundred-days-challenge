import React from 'react';
import Text from './Text';

const App = () => (
  <div>
    <Text variant="h1">This is an h1</Text>
    <Text variant="h2">This is an h2</Text>
    <Text variant="h3">This is an h3</Text>
    <Text variant="h4">This is an h4</Text>
    <Text variant="h5">This is an h5</Text>
    <Text variant="h6">This is an h6</Text>
    <Text>This is a default p tag</Text>
    <Text variant="p">This is an explicit p tag</Text>
    <Text variant="subtitle1">This is a subtitle 1</Text>
    <Text variant="subtitle2">This is a subtitle 2</Text>
    <Text variant="body1">This is a body 1</Text>
    <Text variant="body2">This is a body 2</Text>
  </div>
);

export default App;
