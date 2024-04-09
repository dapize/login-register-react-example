import { useEffect } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IconLock, IconMail, IconUser } from "@tabler/icons-react";
import { TextField } from "@components/TextField";
import { TitleForm } from "@components/TitleForm";
import { Checkbox } from "@components/Checkbox";

import { RegisterFormSchema } from "./RegisterForm.schema";
import { IFormData } from "./RegisterForm.d";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(RegisterFormSchema),
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
        <TitleForm>Registration</TitleForm>

        <VStack spacing={7} mb={5}>
          <TextField
            placeholder="Enter your name"
            type="name"
            startIcon={IconUser}
            isInvalid={Boolean(errors.name)}
            helperText={errors.name?.message}
            isRequired
            {...register("name")}
          />

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
            placeholder="Create a password"
            type="password"
            startIcon={IconLock}
            isInvalid={Boolean(errors.password)}
            helperText={errors.password?.message}
            isRequired
            {...register("password")}
          />

          <TextField
            placeholder="Confirm the password"
            type="password"
            startIcon={IconLock}
            isInvalid={Boolean(errors.confirmPassword)}
            helperText={errors.confirmPassword?.message}
            isRequired
            {...register("confirmPassword")}
          />
        </VStack>

        <Box mb={8}>
          <Checkbox {...register("terms")}>
            I accepted all terms and conditions
          </Checkbox>
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
          Signup
        </Button>
      </Box>

      <Box textAlign="center">
        <Text fontSize="sm">
          Already a member?{" "}
          <Text as={ReactRouterLink} to="/login" color="blue.500">
            Login Now
          </Text>
        </Text>
      </Box>
    </Box>
  );
};
