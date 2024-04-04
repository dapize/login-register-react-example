import { FC } from "react";
import { Checkbox, CheckboxProps } from "@chakra-ui/react";

export const CheckboxRemember: FC<CheckboxProps> = (props) => {
  return (
    <Checkbox
      value="remember"
      size="md"
      name="remember"
      sx={{
        transform: "scale(0.95) translateX(-3px)",
        fontSize: "14px",
        ".chakra-checkbox__label": {
          fontSize: "14px",
        },
      }}
      {...props}
    >
      Remember me
    </Checkbox>
  );
};
