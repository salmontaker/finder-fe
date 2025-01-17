import { Depths } from "@fluentui/react";
import { makeStyles, tokens } from "@fluentui/react-components";

import { mainColor } from "@/styles/color";
import { mobileWidth, tabletWidth } from "@/styles/size";

const useStyles = makeStyles({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    [`@media (max-width: ${tabletWidth})`]: {
      width: "100vw",
      height: "85vh",
      position: "fixed",
      bottom: "0"
    },
    [`@media (max-width: ${mobileWidth})`]: {
      width: "100vw",
      height: `calc( 100dvh + 30vh )`,
      position: "absolute",
      bottom: "auto"
    }
  },
  content: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 0,
    borderRadius: "20px 20px 0 0",
    boxShadow: Depths.depth16,
    [`@media (max-width: ${tabletWidth})`]: {
      borderRadius: "0"
    },
    [`@media (max-width: ${mobileWidth})`]: {
      width: "100%",
      height: "100dvh",
      borderRadius: "0 0 0 0",
      marginLeft: "0px"
    }
  },
  contentTop: {
    display: "flex",
    justifyContent: "center",
    [`@media (max-width: ${mobileWidth})`]: {
      flexDirection: "column",
      height: "600px"
    }
  },
  contentTopImage: {
    width: "330px",
    height: "330px",
    marginLeft: "64px",
    marginTop: "40px",
    backgroundColor: tokens.colorNeutralBackground3,
    [`@media (max-width: ${tabletWidth})`]: {
      width: "300px",
      height: "300px"
    },
    [`@media (max-width: ${mobileWidth})`]: {
      width: "100%",
      height: "400px",
      marginLeft: "0px",
      marginTop: "0px",
      backgroundColor: tokens.colorNeutralBackground3
    }
  },
  contentTopTexts: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    fontWeight: "bold",
    marginTop: "36px",
    marginLeft: "44px",
    marginBottom: "42px",
    marginRight: "44px",
    [`@media (max-width: ${tabletWidth})`]: {
      fontSize: "16px",
      marginTop: "12px",
      marginLeft: "20px",
      marginRight: "0px",
      marginBottom: "12px",
      gap: "20px"
    },
    [`@media (max-width: ${mobileWidth})`]: {
      fontSize: "20px",
      marginTop: "12px",
      marginLeft: "20px",
      marginRight: "20px",
      marginBottom: "12px",
      gap: "20px"
    },
    minWidth: 0,
    "&>*": {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis"
    }
  },
  contentTopMain: {
    fontSize: "32px",
    lineHeight: "32px",
    paddingTop: "10px",
    color: tokens.colorNeutralForeground2,
    [`@media (max-width: ${tabletWidth})`]: {
      fontSize: "32px",
      fontWeight: "bold",
      paddingTop: "30px"
    },
    [`@media (max-width: ${mobileWidth})`]: {
      fontSize: "20px",
      paddingTop: "0px"
    }
  },
  contentTopSub: {
    fontSize: "20px",
    lineHeight: "20px",
    color: mainColor,
    [`@media (max-width: ${mobileWidth})`]: {
      fontSize: "14px",
      lineHeight: "14px"
    }
  },
  contentTopInfo: {
    fontSize: "16px",
    color: tokens.colorNeutralStroke1,
    [`@media (max-width: ${mobileWidth})`]: {
      fontSize: "14px",
      lineHeight: "14px"
    }
  },
  contentTopChat: {
    display: "flex",
    alignItems: "center",
    marginTop: "36px",
    marginLeft: "auto",
    marginRight: "36px",
    marginBottom: "auto",
    gap: "4px",
    fontSize: "14px",
    fontWeight: "bold",
    color: mainColor,
    textDecorationLine: "none",
    [`@media (max-width: ${mobileWidth})`]: {
      marginTop: "12px",
      marginRight: "16px"
    }
  },
  contentBottom: {
    flex: 1,
    borderRadius: "20px",
    margin: "0 32px",
    padding: "32px",
    color: tokens.colorNeutralForeground2,
    backgroundColor: tokens.colorNeutralBackground1Hover,
    fontSize: "16px",
    fontWeight: "bold",
    whiteSpace: "pre-line",
    [`@media (max-width: ${tabletWidth})`]: {
      marginTop: "20px"
    },
    [`@media (max-width: ${mobileWidth})`]: {
      width: "100%",
      height: "50%",
      display: "flex",
      borderRadius: "0px",
      marginLeft: "0px",
      marginRight: "0px",
      marginTop: "40px",
      fontSize: "14px",
      color: tokens.colorNeutralForeground2,
      backgroundColor: "none",
      padding: "0px",
      justifyContent: "center"
    }
  },
  contentBottomDetail: {
    width: "100%",
    [`@media (max-width: ${mobileWidth})`]: {
      width: "90%",
      marginTop: "20px"
    }
  }
});

export default useStyles;
