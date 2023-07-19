import { auth, firestore } from "@/firebase/clientApp";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
  Text,
  Input,
  Stack,
  Checkbox,
  Flex,
} from "@chakra-ui/react";
import {
  doc,
  getDoc,
  runTransaction,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

type CreateCommunityModalProps = {
  open: boolean;
  handleClose: () => void;
};

const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({
  open,
  handleClose,
}) => {
  const [user] = useAuthState(auth);
  const [communityName, setCommunityName] = useState("");
  const [communityType, setCommunityType] = useState("public");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 25) return;

    setCommunityName(event.target.value);
  };

  const onCommunityTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCommunityType(event.target.name);
  };

  const handleCreatCommunity = async () => {
    if (error) setError("");
    // Validate Community
    const format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    if (format.test(communityName) || communityName.length < 3) {
      setError(
        "Clique names must be between 3-25 characters, and can only vontain letter, numbers, or underscores."
      );
      return;
    }
    setLoading(true);

    try {
      // Creats the community documernt in firestore
      // Check that name is not taken

      const communityDocRef = doc(firestore, "communities", communityName);

      await runTransaction(firestore, async (transaction) => {
        const communtyDoc = await transaction.get(communityDocRef);

        // Check if community exists
        if (communtyDoc.exists()) {
          throw new Error(
            "Sorry, this Clique already exists. Please consider joining that Clique or you can try another name."
          );
        }
        // Create Community
        transaction.set(communityDocRef, {
          creatorId: user?.uid,
          createdAt: serverTimestamp(),
          numberOfMembers: 1,
          privacyType: communityType,
        });
        // Creat communitySnippet on user
        transaction.set(
          doc(firestore, `users/${user?.uid}/communitySnippets`, communityName),
          {
            communityId: communityName,
            isModerator: true,
          }
        );
      });
    } catch (error: any) {
      console.log("handleCommunity error", error);
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <>
      <Modal isOpen={open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent bg="brand.100" color="brand.300">
          <ModalHeader
            display="flex"
            flexDirection="column"
            fontSize={15}
            padding={3}
          >
            Create a Clique
          </ModalHeader>
          <Box pl={3} pr={3}>
            <ModalCloseButton />
            <ModalBody display="flex" flexDirection="column" padding="10px 0px">
              <Text fontSize={15} fontWeight={600}>
                Name
              </Text>
              <Input
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
                borderColor="brand.300"
                value={communityName}
                size="sm"
                onChange={handleChange}
              />
              <Text fontSize="9pt" color="red" pt={1}>
                {error}
              </Text>
              <Box mt={4} mb={4}>
                <Text fontWeight={600} fontSize={15}>
                  Clique Settings
                </Text>
                <Stack spacing={2}>
                  <Checkbox
                    name="public"
                    colorScheme="green"
                    isChecked={communityType === "public"}
                    onChange={onCommunityTypeChange}
                  >
                    <Flex align="center">
                      <Text fontSize="12pt" mr={1}>
                        Public
                      </Text>
                      <Text fontSize="10pt" pt={1} ml={1}>
                        (For Everyone)
                      </Text>
                    </Flex>
                  </Checkbox>
                  <Checkbox
                    name="private"
                    colorScheme="green"
                    isChecked={communityType === "private"}
                    onChange={onCommunityTypeChange}
                  >
                    <Flex align="center">
                      <Text fontSize="12pt" mr={1}>
                        Private
                      </Text>
                      <Text fontSize="10pt" pt={1} ml={1}>
                        (For A Select Few)
                      </Text>
                    </Flex>
                  </Checkbox>
                </Stack>
              </Box>
            </ModalBody>
          </Box>

          <ModalFooter>
            <Button
              variant="outline"
              height="30px"
              mr={3}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              height="30px"
              onClick={handleCreatCommunity}
              isLoading={loading}
            >
              Create Clique
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default CreateCommunityModal;
