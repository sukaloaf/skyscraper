import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

const SearchInput: React.FC = () => {
  return (
    <Flex flexGrow={1} mr={2} align="center">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="brand.300" mb={1} />
        </InputLeftElement>
        <Input
          placeholder="Search"
          fontSize="10pt"
          borderColor="brand.300"
          color="brand.300"
          _placeholder={{ color: "brand.300" }}
          _hover={{
            bg: "brand.100",
            border: "1px solid",
            borderColor: "brand.400",
          }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "brand.400",
          }}
          height="34px"
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
