import { Box, Flex, Text } from "@chakra-ui/react";

const Thermometer = ({ value1, value2 }) => {
  const height1 = Math.max(0, Math.min(value1, 100));
  const height2 = Math.max(0, Math.min(value2, 100));

  return (
    <>
      <Flex justifyContent="flex-start" alignItems="center">
        <Box
          w="30px"
          h="200px"
          bg="gray.100"
          borderWidth="1px"
          borderColor="gray.300"
          borderRadius="lg"
          position="relative"
          overflow="hidden"
          transform="rotate(90deg)"
          mr={4}
        >
          <Box
            bg="red.500"
            position="absolute"
            bottom="0"
            w="100%"
            h={`${height1}%`}
            transition="height 0.5s ease-in-out"
          />
          <Box
            bg="blue.500"
            position="absolute"
            bottom="0"
            w="100%"
            h={`${height2}%`}
            transition="height 0.5s ease-in-out"
          />
        </Box>

        <Box
          // bg="white"
          borderWidth="1px"
          borderColor="gray.300"
          borderRadius="md"
          p={2}
          position="relative"
        >
          <Box
            bg="white"
            borderWidth="1px"
            borderColor="gray.300"
            borderRadius="md"
            p={2}
            position="absolute"
            bottom="100%"
            left={`${value1 - 150}%`}
            transform="translateX() rotate(-45deg)"
          >
            <Text
              fontSize="xs"
              fontWeight="bold"
              color="gray.500"
              mb={2}
              whiteSpace="nowrap"
            >
              {`${value1}°C`}
            </Text>
          </Box>
          <Box
            bg="white"
            borderWidth="1px"
            borderColor="gray.300"
            borderRadius="md"
            p={2}
            position="absolute"
            bottom="-200%"
            left={`${value2 - 150}%`}
            transform="translateX() rotate(-45deg)"
          >
            <Text
              fontSize="xs"
              fontWeight="bold"
              color="gray.500"
              mb={2}
              whiteSpace="nowrap"
            >
              {`${value2}°C`}
            </Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Thermometer;
