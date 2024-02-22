import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./theme.css";

function App() {
  const [userLinks, setUserLink] = useState([]);

  useEffect(() => {
    const links = [
      {
        title: "Youtube1",
        url: "https://www.youtube.com/",
      },
      {
        title: "Facebook2",
        url: "https://www.facebook.com",
      },
      {
        title: "Facebook3",
        url: "https://www.facebook.com",
      },
      {
        title: "Facebook4",
        url: "https://www.facebook.com",
      },
      {
        title: "Facebook5",
        url: "https://www.facebook.com",
      },
      {
        title: "Facebook6",
        url: "https://www.facebook.com",
      },
      {
        title: "Facebook7",
        url: "https://www.facebook.com",
      },
      {
        title: "Facebook8",
        url: "https://www.facebook.com",
      },
      {
        title: "Facebook9",
        url: "https://www.facebook.com",
      },
    ];

    if (links) {
      setUserLink(links);
    }
  }, []);

  return (
    <>
      <div className="wrapper ">
        {/* container */}
        <div className="innerContainer ">
          {/* upper section */}
          <div className="upperSection">
            {/* avatarContainer */}
            <div className="avatarContainer"></div>

            {/* content section */}
            <div className="contentSection">
              <h1>username asdfl</h1>
              <h2>fullname lakdsfj alksfd</h2>
              <h2>emailasdfasdfas</h2>
            </div>
          </div>

          {/* lower section */}
          <div className="lowerSection ">
            {userLinks.map((link, index) => {
              return (
                <div className="linkSection" key={index}>
                  {/* icon */}
                  <img className="linkIcon" src="" alt="" />

                  <h2 className="linkTitle">{link.title}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* theme preview container(not to add in database) */}
      <div className="w-full  h-screen bg-slate-600 flex justify-center items-center">
        <div className="innerSection">
          <div className="filter"></div>
          <h1 className="themeName">Name</h1>
        </div>
      </div>
    </>
  );
}

export default App;
