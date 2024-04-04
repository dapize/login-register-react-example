import { AppBar } from "../AppBar";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Box maxWidth={1272} width="calc(100% - 48px)" marginInline="auto" p={4}>
        <Outlet />
      </Box>
    </>
  );
};
