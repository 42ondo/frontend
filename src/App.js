import { ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { reset } from "./styles/reset";
import { global } from "./styles/global";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <ChakraProvider>
      <Global styles={[reset, global]} />
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
