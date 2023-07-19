import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, Icon, Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";
import React from "react";
import { TbBuildingSkyscraper } from "react-icons/tb";
import Communities from "./Communities";

const UserMenu: React.FC = () => {
  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius={4}
        mr={2}
        ml={{ base: 0, md: 2 }}
        _hover={{ outline: "1px solid", outlineColor: "brand.200" }}
      >
        <Flex
          align="center"
          justify="space-between"
          width={{ base: "auto", lg: "200px" }}
        >
          <Flex align="center">
            <Icon
              color="brand.300"
              fontSize={24}
              mr={{ base: 1, md: 2 }}
              as={TbBuildingSkyscraper}
            />
            <Flex display={{ base: "none", lg: "flex" }}>
              <Text fontWeight={600} fontSize="10pt" color="brand.300">
                Home
              </Text>
            </Flex>
          </Flex>
          <ChevronDownIcon color="brand.300" />
        </Flex>
      </MenuButton>
      <MenuList bg="brand.100" borderColor="brand.200">
        <Communities />
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
