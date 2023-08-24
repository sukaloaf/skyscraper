import { Post } from "@/atoms/postAtoms";
import { Flex, Icon, Stack, Text, Image, Skeleton } from "@chakra-ui/react";
import moment from "moment";
import React, { useState } from "react";
import { BiBookmark, BiCommentAdd, BiSolidShareAlt } from "react-icons/bi";
import {
  BsDashCircle,
  BsDashCircleFill,
  BsPlusCircle,
  BsPlusCircleFill,
} from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

type PostItemProps = {
  post: Post;
  userIsCreator: boolean;
  userVoteValue?: number;
  onVote: () => {};
  onDeletePost: (post: Post) => Promise<boolean>;
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
  const [loadingImage, setLoadingImage] = useState(true);
  const [error, setError] = useState(false);

  const handleDelete = async () => {
    try {
      const success = await onDeletePost(post);
      if (!success) {
        throw new Error("Failed to delete post");
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

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
      <Flex direction="column" align="center" bg="brand.100" p={2} width="40px">
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
      <Flex direction="column" width="100%">
        <Stack spacing={1} p="10px" color="brand.300">
          <Stack direction="row" spacing={0.6} align="center" fontSize="9pt">
            {/* Home Page Check */}
            <Text>
              Posted by {post.creatorDisplayName}{" "}
              {moment(new Date(post.createdAt?.seconds * 1000)).fromNow()}
            </Text>
          </Stack>
          <Text fontSize="12pt" fontWeight={600}>
            {post.title}
          </Text>
          <Text fontSize="10pt">{post.body}</Text>
          {post.imageURL && (
            <Flex justify="center" align="center" p={2}>
              {loadingImage && (
                <Skeleton height="200px" width="100%" borderRadius={4} />
              )}
              <Image
                alt="Post Image"
                src={post.imageURL}
                maxHeight="460px"
                display={loadingImage ? "none" : "unset"}
                onLoad={() => setLoadingImage(false)}
              />
            </Flex>
          )}
        </Stack>
        <Flex ml={1} mb={0.5} color="brand.300">
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "brand.200" }}
            cursor="pointer"
          >
            <Icon as={BiCommentAdd} mr={2} />
            <Text fontSize="9pt">{post.numberofComments}</Text>
          </Flex>
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "brand.200" }}
            cursor="pointer"
          >
            <Icon as={BiSolidShareAlt} mr={2} />
            <Text fontSize="9pt">Share</Text>
          </Flex>
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "brand.200" }}
            cursor="pointer"
          >
            <Icon as={BiBookmark} mr={2} />
            <Text fontSize="9pt">Save</Text>
          </Flex>
          {userIsCreator && (
            <Flex
              align="center"
              p="8px 10px"
              borderRadius={4}
              _hover={{ bg: "brand.200" }}
              cursor="pointer"
              onClick={handleDelete}
            >
              <Icon as={RiDeleteBin6Line} mr={2} />
              <Text fontSize="9pt">Delete</Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PostItem;
