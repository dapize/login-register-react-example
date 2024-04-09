import { Flex } from "@chakra-ui/react";
import { LoginForm } from "@features/LoginForm";

export const Login = () => {
  return (
    <Flex minHeight="100vh" align="center" justify="center">
      <LoginForm />
    </Flex>
  );
};
