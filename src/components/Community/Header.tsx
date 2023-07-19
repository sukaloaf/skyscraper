import { Community } from "@/atoms/communitiesAtom";
import { Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import { IoCamera } from "react-icons/io5";
import useCommunityData from "@/hooks/useCommunityData";

type HeaderProps = {
  communityData: Community;
};

const Header: React.FC<HeaderProps> = ({ communityData }) => {
  const { communityStateValue, onJoinOrLeaveCommunity } = useCommunityData();
  const isJoined = !!communityStateValue.mySnippets.find(
    (item) => item.communityId === communityData.id
  );
  return (
    <Flex direction="column" width="100%" height="73px">
      <Flex justify="center" flexGrow={1}>
        <Flex width="95%" maxWidth="860px">
          {communityData.imageURL ? (
            <Image alt="Clique Header Image" />
          ) : (
            <Icon
              color="brand.300"
              fontSize={72}
              border="4px solid"
              borderRadius="50%"
              as={IoCamera}
            />
          )}
          <Flex>
            <Flex direction="column" mr={6}>
              <Text
                fontWeight={800}
                fontSize="16pt"
                color="brand.300"
                mt={2}
                ml={2}
              >
                {communityData.id}
              </Text>
              <Text fontWeight={600} fontSize="10pt" color="brand.300" ml={2}>
                Welcome to {communityData.id}
              </Text>
            </Flex>
            <Button
              variant={isJoined ? "outline" : "solid"}
              height="30px"
              pr={6}
              pl={6}
              mt={2}
              onClick={() => onJoinOrLeaveCommunity(communityData, isJoined)}
            >
              {isJoined ? "Joined" : "Join"}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
