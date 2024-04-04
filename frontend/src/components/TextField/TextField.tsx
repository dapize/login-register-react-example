import { FC } from "react";
import { TextFieldProps } from "./TextField.d";
import { Password } from "./Password";
import { Generic } from "./Generic";

export const TextField: FC<TextFieldProps> = (props) => {
  if (props.type === "password") {
    return <Password {...props} />;
  }
  return <Generic {...props} />;
};
