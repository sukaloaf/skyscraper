import { Community, CommunityState } from "@/atoms/communitiesAtom";
import About from "@/components/Community/About";
import CreatePostLink from "@/components/Community/CreatePostLink";
import Header from "@/components/Community/Header";
import CommunityNotFound from "@/components/Community/NotFound";
import PageContent from "@/components/Layout/PageContent";
import Posts from "@/components/Posts/Posts";
import { firestore } from "@/firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import safeJsonStringify from "safe-json-stringify";

type CommunityPageProps = {
  communityData: Community;
};

const CommunityPage: React.FC<CommunityPageProps> = ({ communityData }) => {
  const [communityState, setCommunityStateValue] =
    useRecoilState(CommunityState);

  if (!communityData) {
    return <CommunityNotFound />;
  }

  useEffect(() => {
    setCommunityStateValue((prev) => ({
      ...prev,
      currentCommunity: communityData,
    }));
  }, []);

  return (
    <>
      <Header communityData={communityData} />
      <PageContent>
        <>
          <CreatePostLink />
          <Posts communityData={communityData} />
        </>
        <>
          <About communityData={communityData} />
        </>
      </PageContent>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const communityDocRef = doc(
      firestore,
      "communities",
      context.query.communityId as string
    );
    const communityDoc = await getDoc(communityDocRef);

    return {
      props: {
        communityData: communityDoc.exists()
          ? JSON.parse(
              safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() })
            )
          : "",
      },
    };
  } catch (error) {
    // Add error page later
    console.log("getServerSideProps error", error);
  }
}
export default CommunityPage;
