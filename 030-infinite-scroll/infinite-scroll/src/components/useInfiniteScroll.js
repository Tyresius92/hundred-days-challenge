import { useState, useEffect } from 'react';

const useInfiniteScroll = callback => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (isFetching) {
      callback();
    }
  }, [isFetching, callback]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      document.documentElement.offsetHeight -
        (window.innerHeight + document.documentElement.scrollTop) <
      40
    ) {
      setIsFetching(true);
    }
  };

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
