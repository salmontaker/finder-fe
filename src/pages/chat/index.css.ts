import { makeStyles } from "@fluentui/react-components";

import { headerHeight } from "@/styles/margin";
import { tabletWidth } from "@/styles/size";

const useStyles = makeStyles({
  root: {
    flex: 1
  },
  content: {
    display: "flex",
    gap: "32px",
    [`@media (max-width: ${tabletWidth})`]: {
      position: "relative"
    }
  },
  left: {
    width: "30%",
    [`@media (max-width: ${tabletWidth})`]: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: `calc(100dvh - ${headerHeight})`,
      marginTop: "20px",
      position: "relative",
      zIndex: 1
    }
  },
  right: {
    width: "70%",
    [`@media (max-width: ${tabletWidth})`]: {
      display: "none"
    }
  },
  rightVisible: {
    display: "none",
    [`@media (max-width: ${tabletWidth})`]: {
      display: "block",
      width: "100%",
      height: `calc(100dvh - ${headerHeight})`,
      marginTop: "20px",
      position: "absolute",
      zIndex: 3,
      top: 0,
      left: 0
    }
  },
  rightVisible02: {
    display: "none"
  }
});

export default useStyles;
