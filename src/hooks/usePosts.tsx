import { Post, postState } from "@/atoms/postAtoms";
import { firestore, storage } from "@/firebase/clientApp";
import { deleteDoc, doc, writeBatch } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React from "react";
import { useRecoilState } from "recoil";

type usePostsProps = {};

const usePosts = () => {
  const [postStateValue, setPostStateValue] = useRecoilState(postState);

  const onVote = async (post: Post, vote: number, communityId: string) => {
    // check for a user -> if not, open auth modal

    try {
      const { voteStatus } = post;
      const existingVote = postStateValue.postVotes.find(
        (vote) => vote.postId === post.id
      );

      const batch = writeBatch(firestore);
      const updatedPost = { ...post };
      const updatedPosts = [...postStateValue.posts];
      const updatedPostVotes = [...postStateValue.postVotes];

      if (!existingVote) {
        // add/subtract 1 to/from post.voteStatus
        // create a new PostVote document
      }
      // existing vote - they have voted on the post before
      else {
        // removing their vote(up -> neutral OR down -> neutral)
        if (removingVote) {
          // add.subtract 1 to/from post.voteStatus
          // delete the postVost document
        }
        // flipping their vote (up -> down OR down -> up)
        else {
          // add/subtract 2 to/from post.voteStatus
          // updating the existing postVote document
        }
      }
    } catch (error) {
      console.log("onVote error", error);
    }
  };

  const onSelectPost = () => {};

  const onDeletePost = async (post: Post): Promise<boolean> => {
    try {
      // check if there is an image, delete if it exists
      if (post.imageURL) {
        const imageRef = ref(storage, `post/${post.id}/image`);
        await deleteObject(imageRef);
      }

      // delete post documents from firestore
      const postDocRef = doc(firestore, "posts", post.id!);
      await deleteDoc(postDocRef);

      // update recoil state
      setPostStateValue((prev) => ({
        ...prev,
        posts: prev.posts.filter((item) => item.id !== post.id),
      }));
      return true;
    } catch (error) {
      return false;
    }
  };

  return {
    postStateValue,
    setPostStateValue,
    onVote,
    onSelectPost,
    onDeletePost,
  };
};
export default usePosts;
