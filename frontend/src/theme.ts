import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: "#4070F4",
        minHeight: "100vh",
      },
    }),
  },
  colors: {
    blue: {
      50: "#EFF4FF",
      100: "#DBE6FE",
      200: "#C0D4FD",
      300: "#94B9FC",
      400: "#6294F8",
      500: "#4070F4",
      600: "#274EE9",
      700: "#1F3AD6",
      800: "#2031AD",
      900: "#1F2F89",
    },
  },
});
