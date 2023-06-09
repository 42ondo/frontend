import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "pages/Error";
import LoginPage from "pages/Login";
import NotFoundPage from "pages/NotFound";
import PersonalPage from "pages/Personal";
import TotalPage from "pages/Total";
import AuthPage from "pages/Auth";
import { useToast } from "@chakra-ui/react";

const AppRoutes = () => {
  const toast = useToast();

  const handleRouteError = (error) => {
    toast({
      title: "Error",
      description: error.message,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <BrowserRouter>
      <Routes onError={handleRouteError}>
        <Route errorElement={<ErrorPage />}>
          {/* <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/total" /> : <LoginPage />}
          /> */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/total" element={<TotalPage />} />
          <Route path="/personal/:name" element={<PersonalPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
