import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon } from "@chakra-ui/react";
import {
  BsArrowRightCircle,
  BsArrowUpRightCircle,
  BsChatDots,
} from "react-icons/bs";
import {
  IoFilterCircleOutline,
  IoNotificationsOutline,
  IoVideocamOutline,
  IoAdd,
} from "react-icons/io5";

const Icons: React.FC = () => {
  return (
    <Flex>
      <Flex
        display={{ base: "none", md: "flex" }}
        align="center"
        borderRight="1px solid"
        borderColor="brand.300"
      >
        <Flex
          mr={1.5}
          ml={1.5}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "brand.200" }}
        >
          <Icon color="brand.300" as={BsArrowUpRightCircle} fontSize={20} />
        </Flex>
        <Flex
          mr={1.5}
          ml={1.5}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "brand.200" }}
        >
          <Icon color="brand.300" as={IoFilterCircleOutline} fontSize={22} />
        </Flex>
        <Flex
          mr={1.5}
          ml={1.5}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "brand.200" }}
        >
          <Icon color="brand.300" as={IoVideocamOutline} fontSize={22} />
        </Flex>
      </Flex>
      <></>
      <Flex
        mr={1.5}
        ml={1.5}
        padding={1}
        cursor="pointer"
        borderRadius={4}
        _hover={{ bg: "brand.200" }}
      >
        <Icon color="brand.300" as={BsChatDots} fontSize={20} />
      </Flex>
      <Flex
        mr={1.5}
        ml={1.5}
        padding={1}
        cursor="pointer"
        borderRadius={4}
        _hover={{ bg: "brand.200" }}
      >
        <Icon color="brand.300" as={IoNotificationsOutline} fontSize={20} />
      </Flex>
      <Flex
        mr={1.5}
        ml={1.5}
        padding={1}
        cursor="pointer"
        borderRadius={4}
        _hover={{ bg: "brand.200" }}
      >
        <Icon color="brand.300" as={IoAdd} fontSize={23} />
      </Flex>
    </Flex>
  );
};
export default Icons;
