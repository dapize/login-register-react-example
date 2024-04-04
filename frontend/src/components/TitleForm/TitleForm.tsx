import { Text } from "@chakra-ui/react";
import { FC } from "react";
import { TitleFormProps } from "./TitleForm.d";

export const TitleForm: FC<TitleFormProps> = ({ children, lineWidth }) => {
  return (
    <Text
      as="h2"
      fontSize="27px"
      fontWeight={600}
      mb={7}
      _after={{
        content: '""',
        display: "block",
        width: lineWidth,
        height: "3px",
        backgroundColor: "#4070F4",
      }}
    >
      {children}
    </Text>
  );
};
