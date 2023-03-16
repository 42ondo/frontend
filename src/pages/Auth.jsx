import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
const Auth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get("code");
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/auth/me`, {
        params: { code: code },
        withCredentials: true,
      })
      .then(() => {
        navigate("/total");
      });
  }, []);

  return <div>Auth</div>;
};

export default Auth;
