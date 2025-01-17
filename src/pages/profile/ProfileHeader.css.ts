import { makeStyles, tokens } from "@fluentui/react-components";

import { mainColor } from "@/styles/color";
import { tabletWidth } from "@/styles/size";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    top: "-32px",
    [`@media (max-width: ${tabletWidth})`]: {
      flexDirection: "column",
      top: "auto"
    }
  },
  profile: {
    flex: 1,
    marginLeft: "36px",
    [`@media (max-width: ${tabletWidth})`]: {
      marginLeft: "0px",
      marginTop: "10px"
    }
  },
  profile_01: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    [`@media (max-width: ${tabletWidth})`]: {
      justifyContent: "center",
      flexDirection: "column"
    }
  },
  nickname: {
    color: tokens.colorNeutralForeground1,
    fontWeight: "bold",
    fontSize: "32px",
    marginBottom: "12px",
    [`@media (max-width: ${tabletWidth})`]: {
      textAlign: "center",
      fontSize: "24px",
      marginBottom: "4px"
    }
  },
  id: {
    color: mainColor,
    fontSize: "16px",
    [`@media (max-width: ${tabletWidth})`]: {
      textAlign: "center",
      marginBottom: "20px",
      fontSize: "12px"
    }
  },
  achieveButton: {
    marginBottom: "12px",
    padding: "20px 30px",
    backgroundColor: tokens.colorBrandBackground,
    color: "white",
    border: tokens.colorBrandBackground,
    borderRadius: "50px",
    fontSize: "16px",
    boxShadow: tokens.shadow4,
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: tokens.colorBrandBackgroundHover
    },
    "&:active": {
      backgroundColor: tokens.colorBrandBackgroundPressed
    },
    [`@media (max-width: ${tabletWidth})`]: {
      padding: "10px 15px",
      fontSize: "12px",
      marginLeft: "0px",
      marginBottom: "0px"
    }
  },
  profileChangeButton: {
    marginLeft: "12px",
    marginBottom: "12px",
    padding: "20px 30px",
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorBrandBackground,
    border: "white",
    borderRadius: "50px",
    fontSize: "16px",
    boxShadow: tokens.shadow4,
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: tokens.colorBrandBackgroundHover
    },
    "&:active": {
      backgroundColor: tokens.colorBrandBackgroundPressed
    },
    [`@media (max-width: ${tabletWidth})`]: {
      padding: "10px 15px",
      fontSize: "12px",
      marginLeft: "0px",
      marginBottom: "0px"
    }
  },
  progressBar: {
    [`@media (max-width: ${tabletWidth})`]: {
      display: "none"
    }
  },
  image: {
    width: "220px",
    height: "220px",
    [`@media (max-width: ${tabletWidth})`]: {
      width: "148px",
      height: "148px"
    }
  }
});

export default useStyles;
