import React, { useState } from 'react';
import Toggle from './Toggle';

const GOOD = 'Good';
const CHEAP = 'Cheap';
const FAST = 'Fast';

const App = () => {
  const [goodChecked, setGoodChecked] = useState(false);
  const [cheapChecked, setCheapChecked] = useState(false);
  const [fastChecked, setFastChecked] = useState(false);

  const onToggleChange = e => {
    let turnOff = null;
    const random = Math.floor(Math.random() * 2);

    switch (e.target.name) {
      case GOOD:
        setGoodChecked(e.target.checked);
        if (e.target.checked && cheapChecked && fastChecked) {
          turnOff = random ? CHEAP : FAST;
        }
        break;
      case CHEAP:
        setCheapChecked(e.target.checked);
        if (e.target.checked && goodChecked && fastChecked) {
          turnOff = random ? GOOD : FAST;
        }
        break;
      case FAST:
        setFastChecked(e.target.checked);
        if (e.target.checked && goodChecked && cheapChecked) {
          turnOff = random ? GOOD : CHEAP;
        }
        break;
      default:
      // intentionally empty
    }

    switch (turnOff) {
      case GOOD:
        setGoodChecked(false);
        break;
      case CHEAP:
        setCheapChecked(false);
        break;
      case FAST:
        setFastChecked(false);
        break;
      default:
        // intentionally empty
        break;
    }
  };

  return (
    <div style={{ paddingTop: '150px', textAlign: 'center', margin: 'auto' }}>
      <p>Describe your project:</p>
      <Toggle
        name={GOOD}
        checked={goodChecked}
        onChange={e => onToggleChange(e)}
      />
      <Toggle
        name={CHEAP}
        checked={cheapChecked}
        onChange={e => onToggleChange(e)}
      />
      <Toggle
        name={FAST}
        checked={fastChecked}
        onChange={e => onToggleChange(e)}
      />
    </div>
  );
};

export default App;
