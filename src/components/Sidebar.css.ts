import { makeStyles, tokens } from "@fluentui/react-components";

import { sideBarWidth, tabletWidth } from "@/styles/size";

const useStyle = makeStyles({
  root: {
    display: "flex",
    width: sideBarWidth,
    minWidth: sideBarWidth,
    height: "100%",
    backgroundColor: tokens.colorNeutralBackground1,
    position: "fixed",
    zIndex: 1,
    left: 0,
    top: 0,
    [`@media (max-width: ${tabletWidth})`]: {
      display: "none"
    }
  },
  tabList: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    gap: "32px"
  },
  tab: {
    justifyContent: "center",
    "&>span": {
      width: "60px",
      height: "60px",
      "&>svg": {
        width: "30px",
        height: "30px"
      }
    }
  }
});

export default useStyle;
