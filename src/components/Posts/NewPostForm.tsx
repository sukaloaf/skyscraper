import { Flex, Icon } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaImage } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { LuLink } from "react-icons/lu";
import TabItem from "./TabItem";
import TextInputs from "./PostForm/TextInputs";

type NewPostFormProps = {};

const formTabs: FormTabItem[] = [
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

export type FormTabItem = {
  title: string;
  icon: typeof Icon.arguments;
};

const NewPostForm: React.FC<NewPostFormProps> = () => {
  const [selectedTab, setSelectedTab] = useState(formTabs[0].title);
  const [textInputs, setTextInputs] = useState({
    title: "",
    body: "",
  });

  const [selectedFile, setSelectedFile] = useState<string>();

  const [loading, setLoading] = useState(false);

  const handleCreatePost = async () => {};

  const onSelectImage = () => {};

  const onTextChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { name, value },
    } = event;
    setTextInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Flex direction="column" bg="brand.100" borderRadius={4} mt={5}>
      <Flex width="100%">
        {formTabs.map((item, index) => (
          <TabItem
            key={index}
            item={item}
            selected={item.title === selectedTab}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </Flex>
      <Flex pt={4}>
        {selectedTab === "Post" && (
          <TextInputs
            textInputs={textInputs}
            handleCreatePost={handleCreatePost}
            onChange={onTextChange}
            loading={loading}
          />
        )}
      </Flex>
    </Flex>
  );
};
export default NewPostForm;
