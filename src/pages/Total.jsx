import axios from "axios";
import { Link } from "react-router-dom";

function TotalPage() {
  const { useGet } = useApi();

  const testCall = () => useGet("example/test");
  const logout = () => useGet("auth/logout");

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button onClick={testCall}>test</button>
      <button onClick={logout}>logout</button>
      <Link to={process.env.REACT_APP_OAUTH_LINK}>Login</Link>
    </div>
  );
}

export default TotalPage;
