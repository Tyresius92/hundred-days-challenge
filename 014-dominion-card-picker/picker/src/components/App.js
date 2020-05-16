import React, { useState, useEffect } from 'react';
import { Container, Col, Row, setConfiguration } from 'react-grid-system';
import Card from './Card';
import axios from 'axios';

setConfiguration({
  gutterWidth: '60',
});

const App = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
      .get('https://dominioncardapi.pythonanywhere.com/cardset/')
      .then(response => response.data)
      .then(data => {
        const formattedCards = data
          .map(card => ({
            title: card.card_name,
            cost: card.cost,
            types: card.type.split('-'),
            expansion: card.set_name,
          }))
          .sort((a, b) => {
            const aCost = parseInt(a.cost.slice(1), 10);
            const bCost = parseInt(b.cost.slice(1), 10);

            return aCost - bCost;
          });

        setCards(formattedCards);
      });
  }, []);

  return (
    <Container>
      <Row>
        {cards.map(card => (
          <Col key={card.title} sm={4}>
            <Card {...card} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default App;
