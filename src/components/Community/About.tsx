import { Community } from "@/atoms/communitiesAtom";
import { auth } from "@/firebase/clientApp";
import { Box, Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { RiCakeLine } from "react-icons/ri";

type AboutProps = {
  communityData: Community;
};

const About: React.FC<AboutProps> = ({ communityData }) => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const selectedFileRef = useRef<string>();
  return (
    <Box position="sticky" top="14px">
      <Flex
        justify="center"
        align="center"
        bg="brand.300"
        color="brand.100"
        p={3}
        borderRadius="4px 4px 0px 0px"
      >
        <Text fontSize="10pt" fontWeight={700}>
          About Clique
        </Text>
      </Flex>
      <Flex
        direction="column"
        p={3}
        bg="brand.100"
        color="brand.300"
        border="1px"
        borderColor="brand.200"
        borderRadius="0px 0px 4px 4px"
      >
        <Stack>
          <Flex width="100%" p={2} fontSize="10pt" fontWeight={700}>
            <Flex direction="column" flexGrow={1}>
              <Text>{communityData.numberOfMembers.toLocaleString()}</Text>
              <Text>Members</Text>
            </Flex>
            <Flex direction="column" flexGrow={1}>
              <Text>1</Text>
              <Text>Online (WIP)</Text>
            </Flex>
          </Flex>
          <Flex
            align="center"
            justify="center"
            width="100%"
            p={1}
            fontWeight={500}
            fontSize="10pt"
          >
            <Icon as={RiCakeLine} fontSize={18} mr={2} />
            {communityData.createdAt && (
              <Text>
                Created{" "}
                {moment(
                  new Date(communityData.createdAt?.seconds * 1000)
                ).format("MMM DD, YYYY")}
              </Text>
            )}
          </Flex>
          <Link href={`/clique/${router.query.communityId}/submit`}>
            <Button mt={3} height="30px" width="100%">
              Create Post
            </Button>
          </Link>
          {user?.uid === communityData.creatorId && (
            <>
              <Stack spacing={1} fontSize="10pt">
                <Text fontWeight={600}>Admin</Text>
                <Flex align="center" justify="space-between">
                  <Text
                    color="blue.500"
                    cursor="pointer"
                    _hover={{ textDecoration: "underline" }}
                    onClick={() => {}}
                  >
                    Change Image
                  </Text>
                </Flex>
              </Stack>
            </>
          )}
        </Stack>
      </Flex>
    </Box>
  );
};
export default About;
