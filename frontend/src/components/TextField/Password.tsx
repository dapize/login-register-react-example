import { FC, useState } from "react";
import { Generic } from "./Generic";
import type { TextFieldProps } from "./TextField.d";
import { IconEye, IconEyeOff, IconLock } from "@tabler/icons-react";

export const Password: FC<TextFieldProps> = (props = {}) => {
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
      type={showPassword ? "text" : "password"}
    />
  );
};
