import users from "../data.js";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function UserProfile() {

  const user_id = parseInt(useParams().id)
  console.log(user_id)

  const user = users.find(user => user.id === user_id)
  console.log(user)

  return(
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{user.name}</h1>
      </main>
    </>
  );
};

export default UserProfile;