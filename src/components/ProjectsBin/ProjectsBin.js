import { useEffect } from "react";
import classes from "./ProjectsBin.module.css";

export const ProjectsBin = (handlers) => {
  let projectsArray = [
    {
      name: "Itdoxy",
      url: "https://itdoxy.com/",
      pic: "https://i.ibb.co/LPmV70R/itdoxy.png",
    },
    {
      name: "Empty",
      url: "#",
      pic: "https://i.ibb.co/q0YhQgR/opened-folder.png",
    },
    {
      name: "Empty",
      url: "#",
      pic: "https://i.ibb.co/q0YhQgR/opened-folder.png",
    },
    {
      name: "Empty",
      url: "#",
      pic: "https://i.ibb.co/q0YhQgR/opened-folder.png",
    },
    {
      name: "Empty",
      url: "#",
      pic: "https://i.ibb.co/q0YhQgR/opened-folder.png",
    },
    {
      name: "Empty",
      url: "#",
      pic: "https://i.ibb.co/q0YhQgR/opened-folder.png",
    },
    {
      name: "Empty",
      url: "#",
      pic: "https://i.ibb.co/q0YhQgR/opened-folder.png",
    },
    {
      name: "Empty",
      url: "#",
      pic: "https://i.ibb.co/q0YhQgR/opened-folder.png",
    },
    {
      name: "Empty",
      url: "#",
      pic: "https://i.ibb.co/q0YhQgR/opened-folder.png",
    },
    {
      name: "Empty",
      url: "#",
      pic: "https://i.ibb.co/q0YhQgR/opened-folder.png",
    },
    {
      name: "Empty",
      url: "#",
      pic: "https://i.ibb.co/q0YhQgR/opened-folder.png",
    },
    {
      name: "Empty",
      url: "#",
      pic: "https://i.ibb.co/q0YhQgR/opened-folder.png",
    },
  ];

  useEffect(() => handlers.setProjectsCounter(projectsArray.length), []);

  return (
    <div className={classes.ProjectsBin}>
      <div className={classes.notepad}>
        <div className={classes.topPanel}>
          <div className={classes.topPanelLeft}>
            <img
              src="https://i.ibb.co/0jc9DLv/recycle-bin-with-pap.png"
              alt="recycleBin"
            />
            <p>Projects Bin</p>
          </div>
          <div className={classes.topPanelRight}>
            <div
              onClick={() =>
                handlers.setProjectsBinHandler(!handlers.projectsBinHandler)
              }
            >
              _
            </div>
            <div>☐</div>
            <div
              onClick={() => {
                handlers.setProjectsBinHandler(!handlers.projectsBinHandler);
                handlers.setCloseProjectsBin(true);
              }}
            >
              ✕
            </div>
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
          {/* <p onClick={() => projectsArray = []} className={classes.clearAll}>
            <u>C</u>lear All
          </p> */}
          <p>
            <u>H</u>elp
          </p>
        </div>
        <div className={classes.bottomPanel}>
          <div className={classes.mainPanel}>
            {projectsArray.map((project, index) => {
              return (
                <div className={classes.Project} key={index}>
                  <a
                    href={project.url}
                    target="_blank"
                    onClick={
                      project.name === "Empty"
                        ? (event) => event.preventDefault(event)
                        : null
                    }
                    rel="noopener noreferrer"
                    className={classes.ProjectLink}
                  >
                    <img src={project.pic} alt="projectPic" />
                    <p>{project.name}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.downPanel}>
          <div className={classes.leftDownPanel}>
            <p>{`${handlers.projectsCounter} project(s)`}</p>
          </div>
          <div className={classes.rightDownPanel}>
            <p>{`${handlers.projectsCounter * 7}.00 KB`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
