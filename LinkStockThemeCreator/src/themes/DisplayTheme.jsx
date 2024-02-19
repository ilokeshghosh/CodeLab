import { useEffect, useState } from "react";
import themesService from "../apiService/api";
import "../theme.css";

export default function DisplayTheme() {
  const [themes, setThemes] = useState([]);
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

  useEffect(() => {
    themesService
      .getTheme()
      .then((response) => {
        if (response) {
          setThemes(response);
        }
      })
      .catch((error) => {
        console.log("errri is ", error);
      });
  }, []);

  useEffect(() => {
    console.log("themes are", themes);
    themes.map((theme, index) => {
      const test = JSON.stringify(theme.mainStyles);
      console.log("data before parsing", test);
      console.log("data after parsing", JSON.parse(test));
      const data = {"mainStyles":JSON.parse(test)}
    });
  }, [themes]);

  if (themes.length > 0) {
    return (
      <>
        {/* outer wrapper */}
        <div className="w-full h-screen overflow-y-auto bg-[#F2EDE3]">
          {/* container */}
          <div className="flex flex-2   py-4 justify-center items-center h-full gap-32 flex-wrap border-red-500 border-2 ">
            {themes.map((theme, index) => {
              return (
                <div key={index} className="" style={theme.mainStyles.wrapper}>
                  {/* container */}
                  <div
                    className="hidden"
                    style={theme.mainStyles.innerContainer}
                  >
                    {/* upper section */}
                    <div className="" style={theme.mainStyles.upperSection}>
                      {/* avatarContainer */}
                      <div
                        className=""
                        style={theme.mainStyles.avatarContainer}
                      ></div>

                      {/* content section */}
                      <div className="" style={theme.mainStyles.contentSection}>
                        <h1>username</h1>
                        <h2>fullname</h2>
                        <h2>email</h2>
                      </div>
                    </div>

                    {/* lower section */}
                    <div className=" " style={theme.mainStyles.lowerSection}>
                      {userLinks.map((link, index) => {
                        return (
                          <div
                            className=""
                            key={index}
                            style={theme.mainStyles.linkSection}
                          >
                            {/* icon */}
                            <img
                              className=""
                              style={theme.mainStyles.linkIcon}
                              src=""
                              alt=""
                            />

                            <h2 className="" style={theme.mainStyles.linkTitle}>
                              Title
                            </h2>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* theme preview */}
          <div className="flex bg-slate-500 hidden  flex-2 py-4 justify-center items-center h-full gap-32 flex-wrap border-red-500 border-2 ">
            {themes.map((theme, index) => {
              return (
                <div
                  key={index}
                  className=""
                  style={theme.previewStyles.innerSection}
                >
                  <div className=" " style={theme.previewStyles.filter}></div>
                  <h1 className="" style={theme.previewStyles.themeName}>
                    Theme name
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  } else {
    return <h1>Loading....</h1>;
  }
}
