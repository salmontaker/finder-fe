import { makeStyles, tokens } from "@fluentui/react-components";

import { contentMargin, headerHeight, headerMobileHeight } from "@/styles/margin";
import { mobileWidth, sideBarWidth, tabletWidth } from "@/styles/size";

const useStyles = makeStyles({
  root: {
    display: "flex",
    minHeight: "100dvh",
    backgroundColor: tokens.colorNeutralBackground2,
    overflowX: "hidden"
  },
  wrapper: {
    display: "flex",
    width: `calc(100% - ${sideBarWidth})`,
    marginLeft: sideBarWidth,
    [`@media (max-width: ${tabletWidth})`]: {
      height: `calc(100dvh - ${headerHeight})`,
      width: "100%",
      marginLeft: 0
    },
    [`@media (max-width: ${mobileWidth})`]: {
      height: `calc(100dvh - ${headerMobileHeight})`
    }
  },
  content: {
    flex: 1,
    display: "flex",
    marginTop: `calc(${contentMargin} + ${headerHeight})`,
    marginLeft: contentMargin,
    marginRight: contentMargin,
    [`@media (max-width: ${tabletWidth})`]: {
      marginTop: headerHeight,
      marginLeft: 0,
      marginRight: 0
    },
    [`@media (max-width: ${mobileWidth})`]: {
      marginTop: headerMobileHeight,
      marginLeft: 0,
      marginRight: 0
    }
  }
});

export default useStyles;
