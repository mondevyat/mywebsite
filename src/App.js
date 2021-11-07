import { useState, useEffect } from "react";
import { Bio } from "./components/Bio/Bio";
import Header from "./components/Header/Header";
import { LoadingScreen } from "./components/LoadingScreen/LoadingScreen";
import { Picture } from "./components/Picture/Picture";
import { ProjectsBin } from "./components/ProjectsBin/ProjectsBin";
import { Voxel } from "./components/Voxel/Voxel";

const App = () => {
  const BIO = `Hello, my name is Artyom and I am a ${
    ((new Date().getTime() - new Date("11.11.1999")) /
      (24 * 3600 * 365.25 * 1000)) |
    0
  } y.o. frontend developer from Saint Petersburg, Russia.\r\n\r\nNow I am a master's student at ITMO University and studying at the Faculty of Software Engineering and Computer Technology.\r\n\r\nPress 'Start' button bellow to get my socials\r\nOr you can look at my projects in 'Bin' folder :)\r\nGood luck and have fun!`;

  const [bio, setBio] = useState(BIO);

  const [bioHandler, setBioHandler] = useState(true);
  const [imageHandler, setImageHandler] = useState(false);
  const [projectsBinHandler, setProjectsBinHandler] = useState(false);

  const [closeBio, setCloseBio] = useState(false);
  const [closeImage, setCloseImage] = useState(false);
  const [closeProjectsBin, setCloseProjectsBin] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const [projectsCounter, setProjectsCounter] = useState(2);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? <LoadingScreen /> : null}
      <Voxel />
      {bioHandler ? (
        <Bio
          bio={bio}
          setBio={setBio}
          closeBio={closeBio}
          setCloseBio={setCloseBio}
          bioHandler={bioHandler}
          setBioHandler={setBioHandler}
        />
      ) : null}
      {imageHandler ? (
        <Picture
          closeImage={closeImage}
          setCloseImage={setCloseImage}
          imageHandler={imageHandler}
          setImageHandler={setImageHandler}
        />
      ) : null}
      {projectsBinHandler ? (
        <ProjectsBin
          projectsCounter={projectsCounter}
          setProjectsCounter={setProjectsCounter}
          closeProjectsBin={closeProjectsBin}
          setCloseProjectsBin={setCloseProjectsBin}
          projectsBinHandler={projectsBinHandler}
          setProjectsBinHandler={setProjectsBinHandler}
        />
      ) : null}
      <div style={{ height: "6rem" }}></div>
      <Header
        closeProjectsBin={closeProjectsBin}
        setCloseProjectsBin={setCloseProjectsBin}
        closeImage={closeImage}
        setCloseImage={setCloseImage}
        closeBio={closeBio}
        setCloseBio={setCloseBio}
        bioHandler={bioHandler}
        setBioHandler={setBioHandler}
        imageHandler={imageHandler}
        setImageHandler={setImageHandler}
        projectsBinHandler={projectsBinHandler}
        setProjectsBinHandler={setProjectsBinHandler}
      />
    </>
  );
};

export default App;
