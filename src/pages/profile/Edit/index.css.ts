import { makeStyles, tokens } from "@fluentui/react-components";

import { skeletonColor } from "@/styles/color";
import { tabletWidth } from "@/styles/size";

const useStyles = makeStyles({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    [`@media (max-width: ${tabletWidth})`]: {
      height: "40vh",
      paddingTop: "30px"
    }
  },
  title: {
    color: tokens.colorNeutralForeground1,
    fontWeight: "bold",
    fontSize: "24px",
    marginBottom: "30px"
  },
  optionRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px"
  },
  statusText: {
    marginLeft: "10px"
  },
  a: {
    fontWeight: "bold",
    fontSize: "16px",
    color: skeletonColor
  },
  unlinkButton: {
    color: "red"
  }
});

export default useStyles;
