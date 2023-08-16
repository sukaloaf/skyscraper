import PageContent from "@/components/Layout/PageContent";
import NewPostForm from "@/components/Posts/NewPostForm";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const SubmitPostPage: React.FC = () => {
  return (
    <PageContent>
      <>
        {/* NewPostForm */}
        <Box p="14px 0px" borderBottom="1px solid" borderColor="brand.300">
          <Text color="brand.300">Create a Post</Text>
        </Box>
        <NewPostForm />
      </>
      <>{/* About */}</>
    </PageContent>
  );
};
export default SubmitPostPage;
