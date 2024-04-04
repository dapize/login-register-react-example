import { ForwardRefExoticComponent } from "react";
import { InputElementProps, InputProps } from "@chakra-ui/react";
import { IconProps } from "@tabler/icons-react";

export interface TextFieldProps extends InputProps {
  startElementProps?: InputElementProps;
  startIcon?: ForwardRefExoticComponent<Omit<IconProps, "ref">>;
  startIconProps?: IconProps;
  endIcon?: ForwardRefExoticComponent<Omit<IconProps, "ref">>;
  endIconProps?: IconProps;
  endElementProps?: InputElementProps;
  error?: boolean;
}
