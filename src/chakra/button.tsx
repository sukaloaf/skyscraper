import { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "60px",
    fontSize: "10pt",
    fontWeight: 700,
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
      //height: "28px",
    },
  },
  variants: {
    solid: {
      color: "brand.100",
      bg: "brand.600",
      _hover: {
        bg: "#FF3366",
      },
      _active: {
        bg: "#FF7699",
        color: "brand.100",
      },
    },
    outline: {
      color: "brand.600",
      border: "1px solid",
      borderColor: "brand.600",
      _hover: {
        bg: "#FF3366",
        color: "brand.100",
      },
      _active: {
        bg: "#FF7699",
        color: "brand.100",
      },
    },
    oauth: {
      height: "34px",
      border: "1px solid",
      borderColor: "gray.300",
      _hover: {
        bg: "gray.50",
      },
    },
  },
};
