import { useEffect } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IconLock, IconMail } from "@tabler/icons-react";
import { TextField } from "@components/TextField";
import { TitleForm } from "@components/TitleForm";
import { CheckboxRemember } from "./components/CheckboxRemember";
import { IFormData } from "./LoginForm.d";
import { LoginFormSchema } from "./LoginForm.schema";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = (data: IFormData) => {
    console.log(data);
  };

  useEffect(() => {
    console.log("errors: ", errors);
  }, [errors]);

  return (
    <Box
      boxShadow="0 5px 10px rgba(0, 0, 0, 0.1)"
      width={430}
      borderRadius={10}
      bgColor="#fff"
      p={7}
    >
      <Box mb={30} as="form" onSubmit={handleSubmit(onSubmit)}>
        <TitleForm lineWidth="30px">Login</TitleForm>

        <VStack spacing={6} mb={5}>
          <TextField
            placeholder="Enter your email"
            type="email"
            startIcon={IconMail}
            isInvalid={Boolean(errors.email)}
            helperText={errors.email?.message}
            isRequired
            {...register("email")}
          />

          <TextField
            placeholder="Enter your password"
            type="password"
            startIcon={IconLock}
            isInvalid={Boolean(errors.password)}
            helperText={errors.password?.message}
            isRequired
            {...register("password")}
          />
        </VStack>

        <Box mb={8}>
          <CheckboxRemember {...register("remember")} />
        </Box>

        <Button
          type="submit"
          colorScheme="blue"
          width="100%"
          size="lg"
          sx={{ fontSize: 16 }}
          // isLoading
          // loadingText="Logging in..."
        >
          Login
        </Button>
      </Box>

      <Box textAlign="center">
        <Text fontSize="sm">
          Not a member?{" "}
          <Text as={ReactRouterLink} to="/register" color="blue.500">
            Signup Now
          </Text>
        </Text>
      </Box>
    </Box>
  );
};
