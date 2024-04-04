import { Box, Button, VStack } from "@chakra-ui/react";
import { IconMail } from "@tabler/icons-react";
import { TextField } from "../../components/TextField";
import { TitleForm } from "../../components/TitleForm";
import { CheckboxRemember } from "./components/CheckboxRemember";

export const LoginForm = () => {
  return (
    <Box
      boxShadow="0 5px 10px rgba(0, 0, 0, 0.1)"
      width={430}
      borderRadius={10}
      bgColor="#fff"
      p={7}
    >
      <form>
        <TitleForm lineWidth="30px">Login</TitleForm>

        <VStack spacing={6} mb={5}>
          <TextField
            placeholder="Enter your email"
            type="email"
            name="email"
            startIcon={IconMail}
          />

          <TextField
            placeholder="Enter your password"
            name="password"
            type="password"
          />
        </VStack>
        <Box mb={8}>
          <CheckboxRemember />
        </Box>
        <Button
          type="submit"
          colorScheme="blue"
          width="100%"
          size="lg"
          sx={{ fontSize: 16 }}
        >
          Login
        </Button>
      </form>
    </Box>
  );
};
