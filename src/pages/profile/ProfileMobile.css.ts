import { makeStyles } from "@fluentui/react-components";

import { mainColor } from "@/styles/color";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "40vh",
    alignItems: "flex-start"
  },
  text: {
    paddingLeft: "30px",
    marginTop: "20px",
    marginBottom: "10px",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer"
  },
  keywordList: {
    display: "flex",
    marginBottom: "10px",
    fontWeight: "bold",
    color: mainColor,
    paddingLeft: "40px"
  },
  content: {
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },
  content02: {
    width: "100vw",
    alignItems: "center",
    justifyContent: "center"
  },
  close: {
    marginLeft: "auto",
    paddingRight: "30px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold"
  }
});

export default useStyles;
