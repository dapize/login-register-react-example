import { boolean, object, string } from "yup";

export const LoginFormSchema = object({
  email: string().max(50).email().required("Email is required"),
  password: string().min(3).max(50).required("Password is required"),
  remember: boolean().required("Remember is required XD"),
});
