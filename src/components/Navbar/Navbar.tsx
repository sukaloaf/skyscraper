import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import RightContent from "./RightContent/RightContent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";
import Directory from "./Directory/Directory";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex bg="brand.100" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image
          alt="SkyscraperLogo"
          src="/images/skyscraperlogo.png"
          height="40px"
        />
        <Image
          alt="Skyscraper"
          src="/images/skyscraper.png"
          height="45px"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      {user && <Directory />}
      <SearchInput />
      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;
