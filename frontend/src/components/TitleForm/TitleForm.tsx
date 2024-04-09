import { FC, ReactNode } from "react";
import { Text } from "@chakra-ui/react";

export const TitleForm: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Text
      as="h2"
      fontSize="27px"
      fontWeight={600}
      mb={7}
      _after={{
        content: '""',
        display: "block",
        width: 30,
        height: "3px",
        backgroundColor: "#4070F4",
      }}
    >
      {children}
    </Text>
  );
};
