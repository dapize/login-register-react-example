import { FC, FocusEvent, forwardRef, useState } from "react";
import {
  Box,
  Flex,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { IconExclamationCircle } from "@tabler/icons-react";
import { Icon } from "@chakra-ui/react";
import { TextFieldProps } from "./TextField.d";
import { Input } from "./TextField.styled";

export const TextField: FC<TextFieldProps> = forwardRef((props, ref) => {
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
    helperText,
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
    <Box width="full">
      <InputGroup>
        {!!StartIcon && (
          <InputLeftElement width="auto" {...startElementProps}>
            <StartIcon {...startIconProps} color={colorIcon} />
          </InputLeftElement>
        )}
        <Input
          {...inputProps}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          ref={ref}
          focusBorderColor={props.isInvalid ? "red.500" : undefined}
        />
        {!!EndIcon && (
          <InputRightElement width="auto" {...endElementProps}>
            <EndIcon {...endIconProps} color={colorIcon} />
          </InputRightElement>
        )}
      </InputGroup>
      {!!helperText && (
        <Flex justifyContent="flex-start" alignItems="flex-start" mt="6px">
          {!!props.isInvalid && (
            <Box pt="1px" mr={2}>
              <Icon as={IconExclamationCircle} boxSize={4} color="red.500" />
            </Box>
          )}
          <Text
            as="div"
            fontSize="13px"
            color={props.isInvalid ? "red.500" : undefined}
          >
            {helperText}
          </Text>
        </Flex>
      )}
    </Box>
  );
});
