import classes from "./Picture.module.css";

export const Picture = (handlers) => (
  <div className={classes.Picture}>
    <div className={classes.notepad}>
      <div className={classes.topPanel}>
        <div className={classes.topPanelLeft}>
          <img
            src="https://i.ibb.co/mHGb879/sheet-with-painting.png"
            alt="pic"
          />
          <p>meChilling.png - Image</p>
        </div>
        <div className={classes.topPanelRight}>
          <div onClick={() => handlers.setImageHandler(!handlers.imageHandler)}>
            _
          </div>
          <div>☐</div>
          <div
            onClick={() => {
              handlers.setImageHandler(!handlers.imageHandler);
              handlers.setCloseImage(true);
            }}
          >
            ✕
          </div>
        </div>
      </div>
      <div className={classes.bottomPanel}>
        <div className={classes.mainPanel}></div>
      </div>
    </div>
  </div>
);
