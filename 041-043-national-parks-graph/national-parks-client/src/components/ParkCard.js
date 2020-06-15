import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box, Image, useTheme } from '@chakra-ui/core';

const ParkCard = ({ park }) => {
  const theme = useTheme();

  return (
    <Link to={`/${park.id}`}>
      <Box
        maxW="sm"
        rounded="lg"
        overflow="hidden"
        border={`1px solid ${theme.colors.gray.base}`}
      >
        <Image
          src={park.images[0].src}
          alt={park.images[0].altText}
          minWidth="100%"
          height="230px"
        />

        <Box p="6">
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            {park.name}
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

ParkCard.propTypes = {
  park: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        altText: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

export default ParkCard;
