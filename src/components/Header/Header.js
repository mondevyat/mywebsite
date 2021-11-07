import React from "react";
import { currentTime } from "../../functions/currentTime";
import classes from "./Header.module.css";
import { Menu } from "../Menu/Menu";

export default function Header(handlers) {
  const [time, setTime] = React.useState(currentTime());
  const [menuHandler, setMenuHandler] = React.useState(false);

  setInterval(() => setTime(currentTime()), 1000);

  return (
    <>
      {menuHandler ? <Menu /> : null}
      <div className={classes.startPanel}>
        <div className={classes.Header}>
          <div className={classes.panelToolbox}>
            <img
              onClick={() => setMenuHandler(!menuHandler)}
              src="https://i.ibb.co/VJNDYdN/Start-Win2.png"
              alt="start"
              className={menuHandler ? `${classes.nowActive}` : null}
            />
            {!handlers.closeBio ? (
              <div
                onClick={() => {
                  handlers.setBioHandler(!handlers.bioHandler);
                  console.log('Bio Handler: ', handlers.bioHandler)

                  if (!handlers.bioHandler) {
                    handlers.setImageHandler(handlers.bioHandler);
                    handlers.setProjectsBinHandler(handlers.bioHandler);
                  }
                }}
                className={`${handlers.bioHandler ? classes.nowActive : null} ${
                  classes.applicationTray
                }`}
              >
                <img
                  src="https://i.ibb.co/HNbCz7w/notepad-document.png"
                  alt="notepad"
                />
                <p>About Me - Notepad</p>
              </div>
            ) : null}

            {!handlers.closeImage ? (
              <div
                onClick={() => {
                  handlers.setImageHandler(!handlers.imageHandler);

                  if (!handlers.imageHandler) {
                    handlers.setBioHandler(handlers.imageHandler);
                    handlers.setProjectsBinHandler(handlers.imageHandler);
                  }
                }}
                className={`${
                  handlers.imageHandler ? classes.nowActive : null
                } ${classes.applicationTray}`}
              >
                <img
                  src="https://i.ibb.co/mHGb879/sheet-with-painting.png"
                  alt="myPhoto"
                />
                <p>meChilling.png - Image</p>
              </div>
            ) : null}

            {!handlers.closeProjectsBin ? (
              <div
                onClick={() => {
                  handlers.setProjectsBinHandler(!handlers.projectsBinHandler);

                  if (!handlers.projectsBinHandler) {
                    handlers.setBioHandler(handlers.projectsBinHandler);
                    handlers.setImageHandler(handlers.projectsBinHandler);
                  }
                }}
                className={`${
                  handlers.projectsBinHandler ? classes.nowActive : null
                } ${classes.applicationTray}`}
              >
                <img
                  src="https://i.ibb.co/0jc9DLv/recycle-bin-with-pap.png"
                  alt="recycleBin"
                />
                <p>Projects Bin</p>
              </div>
            ) : null}
          </div>

          <div className={classes.timeBox}>{time}</div>
        </div>
      </div>
    </>
  );
}
