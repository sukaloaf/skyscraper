import { Post } from "@/atoms/postAtoms";
import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import {
  BsDashCircle,
  BsDashCircleFill,
  BsPlusCircle,
  BsPlusCircleFill,
} from "react-icons/bs";

type PostItemProps = {
  post: Post;
  userIsCreator: boolean;
  userVoteValue?: number;
  onVote: () => {};
  onDeletePost: () => {};
  onSelectPost: () => void;
};

const PostItem: React.FC<PostItemProps> = ({
  post,
  userIsCreator,
  userVoteValue,
  onVote,
  onDeletePost,
  onSelectPost,
}) => {
  return (
    <Flex
      border="1px solid"
      bg="brand.100"
      borderColor="brand.200"
      borderRadius={4}
      _hover={{ borderColor: "brand.300" }}
      cursor="pointer"
      onClick={onSelectPost}
    >
      <Flex direction="column" align="center" bg="brand.200" p={2} width="40px">
        <Icon
          as={userVoteValue === 1 ? BsPlusCircleFill : BsPlusCircle}
          color={userVoteValue === 1 ? "brand.100" : "brand.300"}
          fontSize={20}
          onClick={onVote}
          cursor="pointer"
        />
        <Text fontSize="9pt">{post.voteStatus}</Text>
        <Icon
          as={userVoteValue === -1 ? BsDashCircleFill : BsDashCircle}
          color={userVoteValue === -1 ? "brand.100" : "brand.300"}
          fontSize={20}
          onClick={onVote}
          cursor="pointer"
        />
      </Flex>
      {post.title}
    </Flex>
  );
};
export default PostItem;
