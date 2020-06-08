import React from 'react';
import { Badge, Box, Divider, Image } from '@chakra-ui/core';

const ProfileCard = ({ avatar, birthday, name, contractRate, href }) => (
  <Box
    maxW="sm"
    borderWidth="1px"
    rounded="lg"
    overflow="hidden"
    justifyContent="center"
    as={href ? 'a' : 'div'}
    href={href}
  >
    <Image src={avatar} name={name} size="100%" rounded="full" p={6} />
    <Divider />
    <Box p="6">
      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
        {name}
      </Box>
      <Badge variantColor="green">{birthday}</Badge>

      <Box>
        ${contractRate}
        <Box as="span" color="gray.600" fontSize="sm">
          / hr
        </Box>
      </Box>
    </Box>
  </Box>
);

export default ProfileCard;
