import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/clientApp";
import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { LuImagePlus, LuLink } from "react-icons/lu";
import { useSetRecoilState } from "recoil";

const CreatePostLink: React.FC = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);

  const onClick = () => {
    if (!user) {
      setAuthModalState({ open: true, view: "login" });
      return;
    }
    const { communityId } = router.query;
    router.push(`/clique/${communityId}/submit`);
  };

  return (
    <Flex
      justify="space-evenly"
      align="center"
      bg="brand.100"
      height="56px"
      borderRadius={4}
      border="1px solid"
      borderColor="brand.200"
      p={2}
      mb={4}
    >
      <Icon as={TbBuildingSkyscraper} fontSize={36} color="brand.300" mr={4} />
      <Input
        placeholder="Create Post"
        fontSize="10pt"
        _placeholder={{ color: "brand.300" }}
        _hover={{
          bg: "brand.100",
          border: "1px solid",
          borderColor: "brand.400",
        }}
        bg="brand.100"
        borderColor="brand.300"
        height="36px"
        borderRadius={4}
        mr={4}
        onClick={onClick}
      />
      <Icon
        as={LuImagePlus}
        fontSize={24}
        mr={4}
        color="brand.300"
        cursor="pointer"
      />
      <Icon as={LuLink} fontSize={24} color="brand.300" cursor="pointer" />
    </Flex>
  );
};
export default CreatePostLink;
