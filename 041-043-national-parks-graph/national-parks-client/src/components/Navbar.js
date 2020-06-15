import React from 'react';
import { Flex, Image, Text, useTheme } from '@chakra-ui/core';

const Navbar = () => {
  const theme = useTheme();
  return (
    <Flex
      bg={theme.colors.primary}
      px={5}
      py={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
          size={30}
        />
        <Text pl={3} color="white">
          National Parks Data
        </Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
