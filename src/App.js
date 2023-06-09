import { QueryClientProvider } from "react-query";
import { queryClient } from "./constants/queryClient";
import { ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { reset } from "styles/reset";
import { global } from "styles/global";
import { color } from "styles/colors";
import AppRoutes from "AppRoutes";
import "App.css";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Global styles={[reset, global, color]} />
        <AppRoutes />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
