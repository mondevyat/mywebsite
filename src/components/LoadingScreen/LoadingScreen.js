import classes from "./LoadingScreen.module.css";

export const LoadingScreen = () => {
  return (
    <div className={classes.container}>
      <div className={classes.LoadingScreen}>
        <div className={classes.GreetingScreen}>
          <div className={classes.windowsLogo} />
          <div className={classes.greetingText}>
            <p className={classes.up}>
              Welcome <br />
              <strong className={classes.down}>&nbsp;Portfolio</strong>
            </p>
          </div>
        </div>
        <div className={classes.BottomLoader}></div>
      </div>
    </div>
  );
};
