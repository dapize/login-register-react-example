import { FC, FocusEvent, useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import { TextFieldProps } from "./TextField.d";

export const Generic: FC<TextFieldProps> = (props) => {
  const [colorIcon, setColorIcon] = useState("#718096");

  const {
    startIcon: StartIcon,
    startIconProps: startIconPropsRaw,
    startElementProps = {},
    endIcon: EndIcon,
    endIconProps: endIconPropsRaw,
    endElementProps = {},
    error = false,
    sx: sxRaw = {},
    onFocus,
    onBlur,
    ...rest
  } = props;

  let inputProps: InputProps = {
    sx: sxRaw,
    variant: "flushed",
    size: "md",
    ...rest,
  };

  if (StartIcon) {
    inputProps = {
      ...inputProps,
      sx: {
        ...inputProps.sx,
        paddingInlineStart: "35px",
      },
    };

    startElementProps.pointerEvents = "none";
  }

  const iconPropsBase = {
    stroke: 2,
    size: 22,
  };

  const startIconProps = {
    ...iconPropsBase,
    ...startIconPropsRaw,
  };

  if (EndIcon) {
    inputProps = {
      ...inputProps,
      sx: {
        ...inputProps.sx,
        paddingInlineEnd: "35px",
      },
    };
  }

  const endIconProps = {
    ...iconPropsBase,
    ...endIconPropsRaw,
  };

  if (error) {
    inputProps = {
      ...inputProps,
      isInvalid: true,
      errorBorderColor: "red.500",
      focusBorderColor: "red.400",
      color: "red.500",
    };
  }

  const handleOnFocus = (event: FocusEvent<HTMLInputElement, Element>) => {
    setColorIcon("#4070F4");
    if (onFocus) {
      onFocus(event);
    }
  };

  const handleOnBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
    setColorIcon("#718096");
    if (onBlur) {
      onBlur(event);
    }
  };

  return (
    <InputGroup>
      {!!StartIcon && (
        <InputLeftElement width="auto" {...startElementProps}>
          <StartIcon {...startIconProps} color={colorIcon} />
        </InputLeftElement>
      )}
      <Input {...inputProps} onFocus={handleOnFocus} onBlur={handleOnBlur} />
      {!!EndIcon && (
        <InputRightElement width="auto" {...endElementProps}>
          <EndIcon {...endIconProps} color={colorIcon} />
        </InputRightElement>
      )}
    </InputGroup>
  );
};
