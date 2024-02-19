import { useEffect,useContext } from "react";
import userContext from "../contexts/user.context";
export default function User() {
  const { user } = useContext(userContext);

  useEffect(() => {
    console.log("user is ", user);
  }, [user]);
  return <div>this is user page</div>;
}
