import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Service from "./apiService/service";

function App() {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState([]);
  const [file, setFile] = useState();
  useEffect(() => {
    (async () => {
      try {
        // const data = await Service.login();
        // const data = await Service.signUp();
        // const data = await Service.updateUser(

        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWI3ZmNjYzZmZjY1NmQ4MTViY2ZjYjQiLCJlbWFpbCI6ImF4aW9zQGVtYWlsLmNvbSIsInVzZXJuYW1lIjoiYXhpb3N1c2VyMDEiLCJmdWxsTmFtZSI6ImF4aW9zIHVzZXIiLCJpYXQiOjE3MDY1NTc0MzMsImV4cCI6MTcwNjY0MzgzM30.OD4cr7grjI0DTO_rkhpHymQABoSr5wI_NJ0_l3BP9vs";

        // const data = await Service.updateUser(token, file);
        // if (data) {
        //   console.log("hi data fetched successfully", data);
        // }
      } catch (error) {
        console.log("Error in App page", error);
      }
    })();
  }, [file]);

  return (
    <>
      <h1>test</h1>
    </>
  );
}

export default App;
