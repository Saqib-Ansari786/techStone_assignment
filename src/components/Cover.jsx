// GradientBackground.js
import { Box, Flex, Text, Image } from "@chakra-ui/react";

const Cover = () => {
  return (
    <Flex
      justify="center"
      h="100vh"
      w={"100%"}
      bgGradient="linear(to-b, #F7839A , #7CDADA)"
      direction="column"
    >
      <Flex>
        <Image
          src={
            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          }
          alt="Image 1"
          boxSize="70px"
          borderRadius="full"
          ml="450"
        />
        <Image
          src={
            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          }
          alt="Image 2"
          boxSize="70px"
          borderRadius="full"
          mt={"-100px"}
          ml={"200"}
        />
        <Image
          src={
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          }
          alt="Image 3"
          boxSize="50px"
          borderRadius="full"
          ml={"100px"}
        />
      </Flex>
      <Box textAlign="center">
        <Text fontSize="6xl" fontWeight="bold" color="black">
          User &
        </Text>
        <Text fontSize="6xl" fontWeight="bold" color="black">
          Profiles
        </Text>
      </Box>

      <Flex>
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Image 1"
          boxSize="100px"
          borderRadius="full"
          ml="400"
          mt={"-70px"}
        />
        <Image
          src={
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          }
          alt="Image 2"
          boxSize="70px"
          borderRadius="full"
          mt={"100px"}
          ml={"120"}
        />
        <Image
          src={
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Image 3"
          boxSize="100px"
          borderRadius="full"
          ml={"100px"}
          mt={"20px"}
        />
      </Flex>
    </Flex>
  );
};

export default Cover;
