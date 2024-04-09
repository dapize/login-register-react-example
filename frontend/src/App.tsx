import { ChakraProvider } from "@chakra-ui/react";
import { Routers } from "./routes/Routes";
import { theme } from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routers />
    </ChakraProvider>
  );
}

export default App;
