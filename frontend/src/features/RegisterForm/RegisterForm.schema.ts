import { boolean, object, ref, string } from "yup";

export const RegisterFormSchema = object({
  name: string().min(3).max(50).required("Name is required"),
  email: string().max(50).email().required("Email is required"),
  password: string().min(3).max(50).required("Password is required"),
  confirmPassword: string()
    .oneOf([ref("password"), undefined], "Passwords must match")
    .required("Password confirmation required"),
  terms: boolean().required("Remember is required XD"),
});
