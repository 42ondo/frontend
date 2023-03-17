import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const { useGet } = useApi();
  const navigate = useNavigate();

  const { status } = useGet("me", "auth/me", code, {
    onSuccess: () => {
      navigate("/total");
    },
  });

  return <div>{status}</div>;
};

export default Auth;
