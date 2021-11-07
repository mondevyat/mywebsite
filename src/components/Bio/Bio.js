import classes from "./Bio.module.css";

export const Bio = (handlers) => {

  return (
    <div className={classes.Bio}>
      <div className={classes.notepad}>
        <div className={classes.topPanel}>
          <div className={classes.topPanelLeft}>
            <img
              src="https://i.ibb.co/HNbCz7w/notepad-document.png"
              alt="notepad"
            />
            <p>About me - Notepad</p>
          </div>
          <div className={classes.topPanelRight}>
            <div onClick={() => handlers.setBioHandler(!handlers.bioHandler)}>
              _
            </div>
            <div>☐</div>
            <div onClick={() => {
              handlers.setBioHandler(!handlers.bioHandler)
              handlers.setCloseBio(true)
            }}>✕</div>
          </div>
        </div>
        <div className={classes.linksPanel}>
          <p>
            <u>F</u>ile
          </p>
          <p>
            <u>E</u>dit
          </p>
          <p>
            <u>S</u>earch
          </p>
          <p>
            <u>H</u>elp
          </p>
        </div>
        <div className={classes.bottomPanel}>
          <div className={classes.mainPanel}>
            <textarea
              onChange={() => handlers.setBio(document.getElementById('myBio').value)}
              placeholder="Put it back >:c"
              id="myBio"
              cols="25"
              rows="20"
              value={handlers.bio}
            >
            </textarea>
          </div>
        </div>
      </div>
    </div>
  );
};
