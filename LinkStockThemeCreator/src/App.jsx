import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./theme.css";

function App() {
  const [userLinks, setUserLink] = useState([]);

  useEffect(() => {
    const links = [
      {
        title: "Youtube",
        url: "https://www.youtube.com/",
      },
      {
        title: "Facebook",
        url: "https://www.facebook.com",
      },
    ];

    if (links) {
      setUserLink(links);
    }
  }, []);

  return (
    <>
      <div className="wrapper  hidden">
        {/* container */}
        <div className="innerContainer ">
          {/* upper section */}
          <div className="upperSection">
            {/* avatarContainer */}
            <div className="avatarContainer"></div>

            {/* content section */}
            <div className="contentSection">
              <h1>username</h1>
              <h2>fullname</h2>
              <h2>email</h2>
            </div>
          </div>

          {/* lower section */}
          <div className="lowerSection ">
            {userLinks.map((link, index) => {
              return (
                <div className="linkSection" key={index}>
                  {/* icon */}
                  <img className="linkIcon" src="" alt="" />

                  <h2 className="linkTitle">Title</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* theme preview container(not to add in database) */}
      <div className="w-full h-screen bg-slate-600 flex justify-center items-center">
        <div className="innerSection">
          <div className="filter"></div>
          <h1 className="themeName">Name</h1>
        </div>
      </div>
    </>
  );
}

export default App;
