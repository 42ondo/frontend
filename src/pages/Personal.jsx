import PersonalBoard from "../components/personalBoard/PersonalBoard";
import { useParams } from "react-router-dom";
function PersonalPage() {
  const { username } = useParams();
  console.log(username);
  return (
    <>
      <div>username : {username}</div>
      <PersonalBoard />
    </>
  );
}

export default PersonalPage;
