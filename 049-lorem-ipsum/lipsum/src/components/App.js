import React, { useState } from 'react';
import {
  Container,
  Button,
  Typography,
  TextField,
  makeStyles,
} from '@material-ui/core';
import Card from './Card';
import { LoremIpsum } from 'lorem-ipsum';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();

  const [numParagraphs, setNumParagraphs] = useState(3);
  const [paragraphs, setParagraphs] = useState([]);

  const handleNumParagraphsChange = e => {
    const newVal = e.target.value === '' ? '' : parseInt(e.target.value);

    setNumParagraphs(newVal);
  };

  const generateText = () => {
    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 4,
      },
      wordsPerSentence: {
        max: 16,
        min: 4,
      },
    });

    const result = lorem.generateParagraphs(numParagraphs);

    setParagraphs(result.split('\n'));
  };

  return (
    <Container>
      <Card title="Control Panel">
        <TextField
          label="Number of paragraphs"
          variant="outlined"
          type="number"
          onChange={handleNumParagraphsChange}
          value={numParagraphs}
        />
        <Button onClick={generateText} variant="contained" color="primary">
          Generate text!
        </Button>
      </Card>
      {paragraphs.length > 0 && (
        <Card title="Your Text">
          {paragraphs.map(para => (
            <Typography key={para}>{para}</Typography>
          ))}
        </Card>
      )}
    </Container>
  );
};

export default App;
