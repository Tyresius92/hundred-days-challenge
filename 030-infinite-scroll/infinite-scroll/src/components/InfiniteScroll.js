import React, { useState } from 'react';
import faker from 'faker';
import useInfiniteScroll from './useInfiniteScroll';
import ProfileCard from './ProfileCard';

const getMoreNames = () =>
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(() => faker.name.findName());

const InfiniteScroll = () => {
  const loadMore = () => {
    setTimeout(() => {
      setNames([...names, ...getMoreNames()]);
      setIsFetching(false);
    }, 2000);
  };

  const [names, setNames] = useState([...getMoreNames()]);
  const [isFetching, setIsFetching] = useInfiniteScroll(loadMore);

  return (
    <div id="scroller">
      {names.map((name, index) => (
        <ProfileCard key={name} name={name} />
      ))}
      {isFetching && <p>Loading more names...</p>}
    </div>
  );
};

export default InfiniteScroll;
