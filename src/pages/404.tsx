import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link as ChakraLink,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import MotionBox from 'components/motion/Box';
import Link from 'next/link';

const Page404 = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex minHeight="70vh" direction="column" justifyContent="center">
      <MotionBox
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
        width={['100%', '70%', '60%', '60%']}
        margin="0 auto"
      >
        <Image
          src="/404 Error-pana.svg"
          alt="Error 404 not found Illustration"
        />
      </MotionBox>
      <Text textAlign="center" fontSize="xs">
        <ChakraLink
          href="https://stories.freepik.com/web"
          isExternal
          rel="noopener noreferrer"
        >
          Illustration by Freepik Stories
        </ChakraLink>
      </Text>

      <Box marginY={4}>
        <Heading textAlign="center">Page not Found.</Heading>

        <Box textAlign="center" marginTop={4}>
          <Text>It&apos;s Okay!</Text>
          <Link href="/" passHref>
            <Button
              backgroundColor={colorMode === 'light' ? 'gray.300' : 'teal.500'}
            >
              Let&apos;s Head Back
            </Button>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default Page404;
