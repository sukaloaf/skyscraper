import { auth } from "@/firebase/clientApp";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Divider,
  Icon,
  Flex,
  Text,
  MenuDivider,
} from "@chakra-ui/react";
import { User, signOut } from "firebase/auth";
import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { FaUserAstronaut, FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

type UserMenuProps = {
  user?: User | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius={4}
        _hover={{ outline: "1px solid", outlineColor: "brand.200" }}
      >
        <Flex align="center">
          <Flex align="center">
            {user ? (
              <>
                <Icon
                  fontSize={24}
                  mr={1}
                  color="brand.300"
                  as={FaUserAstronaut}
                />
                <Flex
                  direction="column"
                  display={{ base: "none", lg: "flex" }}
                  fontSize="8pt"
                  align="flex-start"
                  mr={8}
                >
                  <Flex>
                    <Text fontWeight={700} color="brand.300">
                      {user?.displayName || user.email?.split("@")[0]}
                    </Text>
                  </Flex>
                </Flex>
              </>
            ) : (
              <Icon fontSize={24} color="brand.300" mr={1} as={BiSolidUser} />
            )}
          </Flex>
          <ChevronDownIcon color="brand.300" />
        </Flex>
      </MenuButton>
      <MenuList bg="brand.100">
        <MenuItem
          fontSize="10pt"
          fontWeight={700}
          bg="brand.100"
          _hover={{ bg: "brand.200" }}
        >
          <Flex align="center">
            <Icon color="brand.300" fontSize={20} mr={2} as={FaUserCircle} />
            <Text color="brand.300">Profile</Text>
          </Flex>
        </MenuItem>
        <MenuDivider />
        <MenuItem
          fontSize="10pt"
          fontWeight={700}
          bg="brand.100"
          _hover={{ bg: "brand.200" }}
          onClick={() => signOut(auth)}
        >
          <Flex align="center">
            <Icon color="brand.300" fontSize={20} mr={2} as={FiLogOut} />
            <Text color="brand.300">Logout</Text>
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
