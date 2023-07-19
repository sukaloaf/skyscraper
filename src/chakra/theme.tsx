import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#2F323A", //Background (Gunmetal)
      200: "#77867F", //Secondary Background (Battleship Gray)
      300: "#87B37A", //Text Color (Olivine)
      400: "#9CE37D", //Main Color (Light Green)
      500: "#FF1654", //Secondary Color (Folly)
      600: "#CD7064", //Complimentary Text Color (Warm Red)
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: "#2F323A",
      },
    }),
  },
  components: {
    Button,
  },
});
