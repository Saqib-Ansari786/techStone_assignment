// UserCard.js
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const UserCard = ({ user }) => {
  return (
    <Flex
      p={4}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      width="500px"
      align="center"
    >
      <Box>
        <Image
          boxSize="100px"
          borderRadius="full"
          objectFit="cover"
          src={user.image}
          alt={user.firstName}
        />
      </Box>

      <Box ml={4}>
        <LabelInput label={"Name"} value={user.firstName} />
        <LabelInput label={"Phone"} value={user.phone} />
      </Box>
      <Box ml={4}>
        <Text fontSize="md" fontWeight="bold" color="red.500">
          Date of birth
        </Text>
        <Text color="black">{user.birthDate}</Text>
        <LabelInput label={"Email"} value={user.email} />
      </Box>
    </Flex>
  );
};

export default UserCard;

const LabelInput = ({ label, value }) => {
  return (
    <>
      <Text fontSize="md" fontWeight="bold" color="red.500">
        {label}
      </Text>
      <Text color="black">{value}</Text>
    </>
  );
};
