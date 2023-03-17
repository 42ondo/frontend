import axios from "axios";
import { Link } from "react-router-dom";
import { useApi } from "../hooks/useApi";
function TotalPage() {
  const { useGet } = useApi();

  const testCall = () => {
    useGet("test", "example/test");
  };
  const logout = () => {
    useGet("logout", "auth/logout");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button onClick={testCall}>test</button>
      <button onClick={logout}>logout</button>
      <Link to={process.env.REACT_APP_OAUTH_LINK}>Login</Link>
    </div>
  );
}

export default TotalPage;
