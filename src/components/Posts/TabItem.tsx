import React from "react";
import { FormTabItem } from "./NewPostForm";
import { Flex, Icon, Text } from "@chakra-ui/react";

type TabItemProps = {
  item: FormTabItem;
  selected: boolean;
  setSelectedTab: (value: string) => void;
};

const TabItem: React.FC<TabItemProps> = ({
  item,
  selected,
  setSelectedTab,
}) => {
  return (
    <Flex
      justify="center"
      align="center"
      flexGrow={1}
      p="14px 0px"
      cursor="pointer"
      fontWeight={700}
      borderColor="brand.300"
      _hover={{ bg: "brand.200" }}
      color={selected ? "brand.500" : "brand.300"}
      borderWidth={selected ? "1px 1px 2px 1px" : "1px 1px 1px 1px"}
      borderBottomColor={selected ? "brand.500" : "brand.300"}
      onClick={() => setSelectedTab(item.title)}
    >
      <Flex align="center" height="20px" mr={2}>
        <Icon as={item.icon} />
      </Flex>
      <Text fontSize="10pt">{item.title}</Text>
    </Flex>
  );
};
export default TabItem;
