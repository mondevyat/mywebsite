import React from "react";
import classes from "./Menu.module.css";

export const Menu = () => {
  return (
    <div className={classes.Menu}>
      <div className={classes.container}>
        <div className={classes.win95plank}>
          <p>Socials</p>
        </div>
        <div className={classes.linksMenu}>
          <div className={classes.menuLink}>
            <a href="https://github.com/mondevyat" target="_blank" rel="noopener noreferrer">
              <div className={classes.linkContainer}>
                <img src="https://i.ibb.co/MZ0mM56/git.png" alt="git" />
                <div className={classes.linkContainerText}>
                  <p><u>G</u>ithub</p>
                </div>
                <p>►</p>
              </div>
            </a>
          </div>

          <div className={classes.menuLink}>
            <a href="https://t.me/mondevyat" target="_blank" rel="noopener noreferrer">
              <div className={classes.linkContainer}>
                <img src="https://i.ibb.co/Pxm5D5T/telega3.png" alt="tele" />
                <div className={classes.linkContainerText}>
                  <p><u>T</u>elegram</p>
                </div>
                <p>►</p>
              </div>
            </a>
          </div>

          <div className={classes.menuLink}>
            <a href="https://www.instagram.com/mondevyat/" target="_blank" rel="noopener noreferrer">
              <div className={classes.linkContainer}>
                <img src="https://i.ibb.co/Jrkbj95/insta2.png" alt="inst" />
                <div className={classes.linkContainerText}>
                  <p><u>In</u>stagram</p>
                </div>
                <p>►</p>
              </div>
            </a>
          </div>

          <div className={classes.menuLink}>
            <a href="https://www.facebook.com/artem.monchenko/" target="_blank" rel="noopener noreferrer">
              <div className={classes.linkContainer}>
                <img src="https://i.ibb.co/SxPxwGh/facebook.png" alt="vk" />
                <div className={classes.linkContainerText}>
                  <p><u>F</u>acebook</p>
                </div>
                <p>►</p>
              </div>
            </a>
          </div>

          <div className={classes.menuLink}>
            <a href={`mailto:artemii.origin@yandex.ru?subject=${'Frontend developer needed!'}`} target="_blank" rel="noopener noreferrer">
              <div className={classes.linkContainer}>
                <img src="https://i.ibb.co/Wyk8zvJ/letter.png" alt="xz" />
                <div className={classes.linkContainerText}>
                  <p><u>E</u>mail</p>
                </div>
                <p>►</p>
              </div>
            </a>
          </div>

          <hr />

          <div className={classes.menuLink}>
            <a href=' ' onClick={() => window.close()}>
              <div className={classes.linkContainer}>
                <img src="https://i.ibb.co/pRSLfNf/turn-off-computer-d.png" alt="shut" />
                <div className={classes.linkContainerText}>
                  <p>Sh<u>u</u>t Down...</p>
                </div>
                <p>►</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
