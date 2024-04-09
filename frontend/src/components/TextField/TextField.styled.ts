import { Input as InputChakra } from "@chakra-ui/react";

import styled from "@emotion/styled";

export const Input = styled(InputChakra)`
  border-bottom-color: #cccccc;

  &::placeholder {
    color: #767676;
    opacity: 1;
  }

  &::-ms-input-placeholder {
    color: #767676;
  }
`;
