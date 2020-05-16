import React from 'react';
import { render } from '@testing-library/react';
import Tag from '../Tag';

describe('Tag', () => {
  it('renders the appropriate text', () => {
    const categoryName = 'Action';

    const { getByText } = render(<Tag name={categoryName} />);

    expect(getByText(categoryName)).toBeInTheDocument();
  });

  it.each`
    name           | expectedClassName
    ${'Action'}    | ${'action'}
    ${'Treasure'}  | ${'treasure'}
    ${'Event'}     | ${'event'}
    ${'Attack'}    | ${'attack'}
    ${'Victory'}   | ${'victory'}
    ${'Reaction'}  | ${'reaction'}
    ${'Duration'}  | ${'duration'}
    ${'Prize'}     | ${'prize'}
    ${'Curse'}     | ${'curse'}
    ${'Ruins'}     | ${'ruins'}
    ${'Looter'}    | ${'looter'}
    ${'Knight'}    | ${'knight'}
    ${'Shelter'}   | ${'shelter'}
    ${'Reserve'}   | ${'reserve'}
    ${'Traveller'} | ${'traveler'}
    ${'Castle'}    | ${'castle'}
    ${'Gathering'} | ${'gathering'}
    ${'Landmark'}  | ${'landmark'}
    ${'Fate'}      | ${'fate'}
    ${'Night'}     | ${'night'}
    ${'Heirloom'}  | ${'heirloom'}
    ${'Doom'}      | ${'doom'}
    ${'Zombie'}    | ${'zombie'}
    ${'Spirit'}    | ${'spirit'}
    ${'Boon'}      | ${'boon'}
    ${'Hex'}       | ${'hex'}
    ${'State'}     | ${'state'}
    ${'Artifact'}  | ${'artifact'}
    ${'Project'}   | ${'project'}
  `(
    'gives className=$expectedClassName when name=$name',
    ({ name, expectedClassName }) => {
      const { getByText } = render(<Tag name={name} />);

      expect(getByText(name)).toHaveClass(expectedClassName);
    }
  );
});
