import { Link, Outlet } from "react-router-dom";
import { useUserSession } from "../store/userSession";
import { Text } from "@chakra-ui/react";

export const Private = () => {
  const userEmail = useUserSession((state) => state.email);

  if (!userEmail) {
    return (
      <Text fontSize="md" color="#fff">
        This is a private route, you have to{" "}
        <Text as={Link} to="/login" fontSize="md" textDecor="underline">
          Login
        </Text>{" "}
        to see this page or{" "}
        <Text as={Link} to="/register" fontSize="md" textDecor="underline">
          register it!
        </Text>
      </Text>
    );
  }

  return <Outlet />;
};
