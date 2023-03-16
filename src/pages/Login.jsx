import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div>
      <Link to={`${process.env.REACT_APP_OAUTH_LINK}`}>42 OAuth</Link>
    </div>
  );
}

export default LoginPage;
