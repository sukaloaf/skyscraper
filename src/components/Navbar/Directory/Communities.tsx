import React, { useState } from "react";
import CreateCommunityModal from "../../Modal/CreateCommunity/CreateCommunityModal";
import { Flex, Icon, MenuItem } from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";

type CommunitiesProps = {};

const Communities: React.FC<CommunitiesProps> = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CreateCommunityModal open={open} handleClose={() => setOpen(false)} />
      <MenuItem
        bg="brand.100"
        color="brand.300"
        width="100%"
        fontSize="10pt"
        _hover={{ bg: "brand.200" }}
        onClick={() => setOpen(true)}
      >
        <Flex align="center">
          <Icon fontSize={20} mr={2} as={IoAdd} />
          Create Clique
        </Flex>
      </MenuItem>
    </>
  );
};
export default Communities;
