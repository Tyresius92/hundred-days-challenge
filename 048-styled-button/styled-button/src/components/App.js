import React from 'react';
import Button from './Button';

const App = () => (
  <div>
    <div>Hello World!</div>
    <div style={{ margin: '3px' }}>
      <Button onClick={() => alert('default clicked')}>Default Button</Button>
    </div>
    <div style={{ margin: '3px' }}>
      <Button onClick={() => alert('primary clicked')} variant="primary">
        Primary Button
      </Button>
    </div>
    <div style={{ margin: '3px' }}>
      <Button onClick={() => alert('secondary clicked')} variant="secondary">
        Secondary Button
      </Button>
    </div>
    <div style={{ margin: '3px' }}>
      <Button onClick={() => alert('accent clicked')} variant="accent">
        Accent Button
      </Button>
    </div>
    <div style={{ margin: '3px' }}>
      <Button onClick={() => alert('warning clicked')} variant="warning">
        Warning Button
      </Button>
    </div>
  </div>
);

export default App;
