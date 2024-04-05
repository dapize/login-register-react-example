import { forwardRef } from "react";
import { InputProps } from "@chakra-ui/react";
import { TextFieldProps } from "./TextField.d";
import { Password } from "./Password";
import { Generic } from "./Generic";

export const TextField = forwardRef<InputProps, TextFieldProps>(
  (props, ref) => {
    if (props.type === "password") {
      return <Password {...props} ref={ref} />;
    }
    return <Generic {...props} ref={ref} />;
  }
);
