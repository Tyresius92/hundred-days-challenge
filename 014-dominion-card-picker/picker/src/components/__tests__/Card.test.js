import React from 'react';
import { render } from '@testing-library/react';
import Card from '../Card';

describe('Card', () => {
  const mockProps = {
    title: 'Island',
    expansion: 'Seaside',
    types: ['Action', 'Victory'],
    isKingdomCard: true,
    cost: '$4',
    card_text:
      'Set aside this and another card from your hand. Return them to your deck at the end of the game.\\dWorth 2VP',
  };

  it('renders a card', () => {
    const { getByText } = render(<Card {...mockProps} />);

    expect(getByText(mockProps.title)).toBeInTheDocument();
    expect(getByText(mockProps.cost)).toBeInTheDocument();
    mockProps.types.forEach(type => {
      expect(getByText(type)).toBeInTheDocument();
    });
    expect(getByText(mockProps.expansion)).toBeInTheDocument();
  });
});
