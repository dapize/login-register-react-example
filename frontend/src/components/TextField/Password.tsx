import { FC, forwardRef, useState } from "react";
import { IconEye, IconEyeOff, IconLock } from "@tabler/icons-react";
import { Generic } from "./Generic";
import type { TextFieldProps } from "./TextField.d";

export const Password: FC<TextFieldProps> = forwardRef((props = {}, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Generic
      startIcon={IconLock}
      endIcon={showPassword ? IconEye : IconEyeOff}
      endElementProps={{
        _hover: {
          cursor: "pointer",
        },
        onClick: () => setShowPassword((state) => !state),
      }}
      {...props}
      ref={ref}
      type={showPassword ? "text" : "password"}
    />
  );
});
