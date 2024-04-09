import { Flex } from "@chakra-ui/react";
import { RegisterForm } from "@features/RegisterForm";

export const Register = () => {
  return (
    <Flex minHeight="100vh" align="center" justify="center">
      <RegisterForm />
    </Flex>
  );
};
