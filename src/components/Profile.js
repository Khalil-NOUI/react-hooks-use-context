import React, {useContext} from "react";
import Interests from "./Interests";
import { userContext } from "../context/user";
import { themeContext } from "../context/theme";

function Profile() {
  const {theme} = useContext(themeContext)
  const { user } = useContext(userContext);

  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} theme={theme} />
    </div>
  );
}

export default Profile;
