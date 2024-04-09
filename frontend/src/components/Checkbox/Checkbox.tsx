import { FC, forwardRef } from "react";
import { Checkbox as CheckboxChakra, CheckboxProps } from "@chakra-ui/react";

export const Checkbox: FC<CheckboxProps> = forwardRef((propsRaw, ref) => {
  const { children, ...props } = propsRaw;
  return (
    <CheckboxChakra
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
      {children}
    </CheckboxChakra>
  );
});
