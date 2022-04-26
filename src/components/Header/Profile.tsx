import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Leo</Text>
          <Text color="gray.300" fontSize="small">
            leo_lli@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Leonardo Martinelli" />
    </Flex>
  );
}
