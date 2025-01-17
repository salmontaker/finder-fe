import { makeStyles, tokens } from "@fluentui/react-components";

import { mainColor } from "@/styles/color";
import { tabletWidth02 } from "@/styles/size";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: 0,
    right: 0,
    height: "100dvh",
    width: "70vw",
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    transition: "transform 0.3s ease-in-out",
    zIndex: 2,
    [`@media (min-width: ${tabletWidth02})`]: {
      display: "none"
    }
  },
  open: {
    transform: "translateX(0)",
    [`@media (min-width: ${tabletWidth02})`]: {
      display: "none"
    }
  },
  closed: {
    transform: "translateX(100%)",
    [`@media (min-width: ${tabletWidth02})`]: {
      display: "none"
    }
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100dvh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 0,
    [`@media (min-width: ${tabletWidth02})`]: {
      display: "none"
    }
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "70px"
  },
  subInfoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px"
  },
  subInfo01: {
    fontSize: "16px",
    fontWeight: "bold"
  },
  subInfo02: {
    fontSize: "12px",
    color: mainColor,
    fontWeight: "bold"
  },
  tab: {
    margin: "10px 0px 10px 20px"
  },
  bottomContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "auto",
    padding: "30px"
  }
});

export default useStyles;
