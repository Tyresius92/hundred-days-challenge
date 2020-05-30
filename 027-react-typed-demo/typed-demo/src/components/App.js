import React from 'react';
import { Container, Card } from '@material-ui/core';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';

const App = () => (
  <div>
    <Container>
      <Card style={{ margin: '100px', padding: '40px' }}>
        <Typed
          typeSpeed={40}
          backSpeed={30}
          backDelay={1000}
          strings={[
            'This was rather less cool than I had hoped',
            'But this is a pretty cool drop in library',
            "But if it's not a cheap thing to build from scratch",
            "I'm totally open to reusing the published version",
            'Because duplicating effort is kind of the worst',
            "And I'd rather be building something new and cool",
            'Than re-implementing what someone else has created to say I did it',
          ]}
          loop
        />
      </Card>
    </Container>
  </div>
);

export default App;
