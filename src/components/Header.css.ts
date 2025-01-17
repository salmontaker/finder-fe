import { Depths } from "@fluentui/react";
import { makeStyles, tokens } from "@fluentui/react-components";

import { backgroundColor, mainColor } from "@/styles/color";
import {
  contentMargin,
  contentMobileMargin,
  headerHeight,
  headerMobileHeight
} from "@/styles/margin";
import { mobileWidth, sideBarWidth, tabletWidth, tabletWidth02 } from "@/styles/size";

const useStyles = makeStyles({
  root: {
    alignItems: "center",
    display: "flex",
    width: `calc(100vw - ${sideBarWidth})`,
    height: headerHeight,
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: Depths.depth16,
    position: "fixed",
    zIndex: 2,
    [`@media (max-width: ${tabletWidth})`]: {
      justifyContent: "space-between",
      width: "100vw"
    },
    [`@media (max-width: ${mobileWidth})`]: {
      height: headerMobileHeight
    }
  },
  title: {
    marginLeft: contentMargin,
    display: "flex",
    alignItems: "center",
    gap: "15px",
    cursor: "pointer",
    [`@media (max-width: ${tabletWidth})`]: {
      marginLeft: `calc(${contentMobileMargin} - 12px)`,
      gap: "8px"
    }
  },
  titleIcon: {
    color: backgroundColor,
    fontSize: "20px",
    [`@media (max-width: ${mobileWidth})`]: {
      display: "none"
    }
  },
  titleText: {
    color: mainColor,
    fontSize: "32px",
    fontWeight: "bold",
    [`@media (max-width: ${tabletWidth})`]: {
      fontSize: "24px"
    },
    [`@media (max-width: ${mobileWidth})`]: {
      fontSize: "20px"
    }
  },
  menu: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: contentMargin,
    gap: "32px",
    [`@media (max-width: ${tabletWidth})`]: {
      display: "none"
    }
  },
  signup: {
    color: backgroundColor,
    cursor: "pointer"
  },
  login: {
    color: mainColor,
    cursor: "pointer"
  },
  menuIcon: {
    color: backgroundColor,
    fontSize: "28px",
    marginTop: "8px",
    marginRight: `calc(${contentMobileMargin} - 16px)`,
    [`@media (min-width: ${tabletWidth02})`]: {
      display: "none"
    }
  }
});

export default useStyles;
