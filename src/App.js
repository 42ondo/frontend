import { Global } from "@emotion/react";
import { reset } from "./styles/reset";
import { global } from "./styles/global";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import ErrorPage from "./pages/Error";
import LoginPage from "./pages/Login";
import NotFoundPage from "./pages/NotFound";
import PersonalPage from "./pages/Personal";
import TotalPage from "./pages/Total";

const authGuard = (isAuthenticated, Component) => {
  if (!isAuthenticated) {
    return <LoginPage />;
  } else {
    return <Component />;
  }
};

const AppRoutes = () => {
  // const { isAuthenticated } = useAuthStore();
  const isAuthenticated = true;

  return (
    <Router>
      <Routes>
        {/* <Route errorElement={<ErrorPage />}> */}
        <Route path="/" element={authGuard(isAuthenticated, TotalPage)} />
        <Route path="/total" element={authGuard(isAuthenticated, TotalPage)} />
        <Route
          path="/personal/:username"
          element={authGuard(isAuthenticated, PersonalPage)}
        />
        <Route path="*" element={<NotFoundPage />} />
        {/* </Route> */}
      </Routes>
    </Router>
  );
};
function App() {
  return (
    <ChakraProvider>
      <Global styles={[reset, global]} />
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
