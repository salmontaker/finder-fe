import { Depths } from "@fluentui/react";
import { makeStyles, tokens } from "@fluentui/react-components";

import { mainColor } from "@/styles/color";
import { contentMargin, headerHeight } from "@/styles/margin";
import { mobileWidth, tabletWidth } from "@/styles/size";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: `calc(100dvh - ${headerHeight} - ${contentMargin})`,
    [`@media (max-width: ${tabletWidth})`]: {
      height: `calc(100dvh - ${headerHeight})`
    },
    [`@media (max-width: ${mobileWidth})`]: {
      height: "auto",
      marginTop: "10px"
    }
  },
  title: {
    display: "flex",
    [`@media (max-width: ${tabletWidth})`]: {
      display: "none"
    },
    [`@media (max-width: ${mobileWidth})`]: {
      display: "block"
    }
  },
  titleText: {
    marginLeft: "8px",
    fontSize: "20px",
    fontWeight: "bold",
    [`@media (max-width: ${tabletWidth})`]: {
      display: "none"
    },
    [`@media (max-width: ${mobileWidth})`]: {
      display: "block"
    }
  },
  titleBack: {
    display: "inline-block",
    marginLeft: "auto",
    fontSize: "14px",
    fontWeight: "bold",
    color: mainColor,
    cursor: "pointer",
    padding: "8px 16px",
    backgroundColor: tokens.colorNeutralBackground1,
    border: "none",
    borderRadius: "15px",
    textAlign: "center",
    transition: "background-color 0.3s",
    boxShadow: tokens.shadow2,
    [`@media (max-width: ${tabletWidth})`]: {
      display: "none"
    },
    [`@media (max-width: ${mobileWidth})`]: {
      display: "block",
      marginTop: "10px"
    },
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover
    }
  },
  subtitle: {
    marginLeft: "8px",
    color: mainColor,
    fontSize: "14px",
    fontWeight: "bold",
    [`@media (max-width: ${tabletWidth})`]: {
      display: "none"
    },
    [`@media (max-width: ${mobileWidth})`]: {
      display: "block"
    }
  },
  list: {
    height: "100%",
    marginTop: "18px",
    borderRadius: "20px",
    boxShadow: Depths.depth16,
    overflow: "auto",
    [`@media (max-width: ${tabletWidth})`]: {
      marginTop: "0px",
      borderRadius: "0px"
    },
    [`@media (max-width: ${mobileWidth})`]: {
      height: "65vh",
      borderRadius: 0,
      boxShadow: "none",
      marginTop: "10px"
    }
  },
  empty: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px"
  },
  contentImage: {
    width: "170px",
    height: "170px",
    marginTop: "40px",
    backgroundColor: tokens.colorNeutralBackground3,
    borderRadius: "30px",
    [`@media (max-width: ${tabletWidth})`]: {
      marginTop: "160px"
    },
    [`@media (max-width: ${mobileWidth})`]: {
      marginTop: "auto"
    }
  },
  contentTexts: {
    marginTop: "32px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    fontWeight: "bold",
    alignItems: "flex-start"
  },
  contentMain: {
    fontSize: "24px",
    lineHeight: "36px",
    color: tokens.colorNeutralForeground2
  },
  contentSub: {
    fontSize: "16px",
    lineHeight: "10px",
    color: mainColor
  },
  contentInfo: {
    fontSize: "16px",
    lineHeight: "10px",
    color: tokens.colorNeutralStroke1
  },
  contentInfo02: {
    width: "25vw",
    height: "160px",
    backgroundColor: tokens.colorNeutralBackground1Hover,
    borderRadius: "30px 30px 30px 30px",
    padding: "24px",
    color: tokens.colorNeutralForeground3Hover
  },
  spinner: {
    margin: "16px",
    "&>span": {
      backgroundColor: tokens.colorPaletteLightGreenBackground2
    }
  }
});

export default useStyles;
