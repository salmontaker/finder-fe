import { makeStyles, tokens } from "@fluentui/react-components";

import { tabletWidth } from "@/styles/size";

const useStyles = makeStyles({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    [`@media (max-width: ${tabletWidth})`]: {
      height: "40vh"
    }
  },
  title: {
    color: tokens.colorNeutralForeground1,
    fontWeight: "bold",
    fontSize: "24px",
    marginBottom: "10px",
    [`@media (max-width: ${tabletWidth})`]: {
      fontSize: "20px",
      paddingLeft: "6vw"
    }
  },
  empty: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default useStyles;
