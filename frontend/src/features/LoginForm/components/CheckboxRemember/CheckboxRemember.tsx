import { FC, forwardRef } from "react";
import { Checkbox, CheckboxProps } from "@chakra-ui/react";

export const CheckboxRemember: FC<CheckboxProps> = forwardRef((props, ref) => {
  return (
    <Checkbox
      value="true"
      size="md"
      sx={{
        transform: "scale(0.95) translateX(-3px)",
        fontSize: "14px",
        ".chakra-checkbox__label": {
          fontSize: "14px",
        },
      }}
      {...props}
      ref={ref}
    >
      Remember me
    </Checkbox>
  );
});
