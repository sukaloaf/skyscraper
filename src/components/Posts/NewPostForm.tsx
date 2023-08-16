import { Flex, Icon } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaImage } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { LuLink } from "react-icons/lu";
import TabItem from "./TabItem";

type NewPostFormProps = {};

const formTabs = [
  {
    title: "Post",
    icon: IoDocumentText,
  },
  {
    title: "Images & Video",
    icon: FaImage,
  },
  {
    title: "Link",
    icon: LuLink,
  },
];

export type TabItem = {
  title: string;
  icon: typeof Icon.arguments;
};

const NewPostForm: React.FC<NewPostFormProps> = () => {
  const [selectedTab, setSelectedTab] = useState(formTabs[0].title);
  return (
    <Flex direction="column" bg="brand.200" borderRadius={4} mt={5}>
      <Flex width="100%">
        {formTabs.map((item) => (
          <TabItem item={item} selected={item.title === selectedTab} />
        ))}
      </Flex>
    </Flex>
  );
};
export default NewPostForm;
