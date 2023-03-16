import axios from "axios";
import { Link } from "react-router-dom";

function TotalPage() {
  const testCall = () => {
    axios.get(process.env.REACT_APP_API + "/example/test", {
      withCredentials: true,
    });
  };

  const logout = () => {
    axios.get(process.env.REACT_APP_API + "/auth/logout", {
      withCredentials: true,
    });
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
