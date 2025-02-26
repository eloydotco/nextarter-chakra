import { Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text>
        {new Date().getFullYear()} -{' '}
        <Link href="https://eloy.co" isExternal rel="noopener noreferrer">
          eloy.co
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
