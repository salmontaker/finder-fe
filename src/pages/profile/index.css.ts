import { makeStyles, tokens } from "@fluentui/react-components";

import { headerMobileHeight } from "@/styles/margin";
import { tabletWidth } from "@/styles/size";

const useStyles = makeStyles({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    borderRadius: "30px 30px 0px 0px",
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: tokens.shadow16,
    paddingLeft: "120px",
    paddingRight: "120px",
    [`@media (max-width: ${tabletWidth})`]: {
      width: "100%",
      height: `calc(100dvh - ${headerMobileHeight})`,
      flexDirection: "column",
      borderRadius: "0px 0px 0px 0px",
      paddingLeft: "0px",
      paddingRight: "0px",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: tokens.colorNeutralBackground2,
      boxShadow: "none"
    }
  },
  content: {
    flex: 1,
    display: "flex",
    [`@media (max-width: ${tabletWidth})`]: {
      display: "none"
    }
  },
  left: {
    width: "55%",
    [`@media (max-width: ${tabletWidth})`]: {
      width: "100%"
    }
  },
  right: {
    width: "45%",
    [`@media (max-width: ${tabletWidth})`]: {
      width: "100%"
    }
  },
  mobileContent: {
    display: "none",
    [`@media (max-width: ${tabletWidth})`]: {
      display: "block"
    }
  }
});

export default useStyles;
