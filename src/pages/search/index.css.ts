import { makeStyles } from "@fluentui/react-components";

import {
  contentMargin,
  contentMobileMargin,
  headerHeight,
  headerMobileHeight
} from "@/styles/margin";
import { mobileWidth, tabletWidth } from "@/styles/size";

const useStyles = makeStyles({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    height: `calc(100dvh - ${headerHeight} - ${contentMargin})`,
    [`@media (max-width: ${tabletWidth})`]: {
      position: "fixed",
      bottom: 0,
      width: "100%"
    },
    [`@media (max-width: ${mobileWidth})`]: {
      height: `calc(100dvh - ${headerMobileHeight} - ${contentMobileMargin})`
    }
  }
});

export default useStyles;
