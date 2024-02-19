import { useContext, useState } from "react";
import userContext from "../contexts/user.context";

export default function Form() {
  const [username, setUsername] = useState();
  const { addUser } = useContext(userContext);
  async function handleSubmit() {
    try {
      if (username) {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (response) {
          const data = await response.json();
          addUser(data);
          // console.log("user details is ", await response.json());
        }
      }
    } catch (error) {
      console.log("error is ", error);
    }
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
