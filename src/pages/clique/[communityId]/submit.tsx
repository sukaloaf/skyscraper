import { CommunityState } from "@/atoms/communitiesAtom";
import PageContent from "@/components/Layout/PageContent";
import NewPostForm from "@/components/Posts/NewPostForm";
import { auth } from "@/firebase/clientApp";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";

const SubmitPostPage: React.FC = () => {
  const [user] = useAuthState(auth);
  const [communityState, communityStateValue] = useRecoilState(CommunityState);

  return (
    <PageContent>
      <>
        {/* NewPostForm */}
        <Box p="14px 0px" borderBottom="1px solid" borderColor="brand.300">
          <Text color="brand.300">Create a Post</Text>
        </Box>
        {user && <NewPostForm user={user} />}
      </>
      <>{/* About */}</>
    </PageContent>
  );
};
export default SubmitPostPage;
