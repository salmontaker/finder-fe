import { makeStyles, tokens } from "@fluentui/react-components";

import { mainColor, skeletonColor } from "@/styles/color";
import { mobileWidth, tabletWidth } from "@/styles/size";

const useStyles = makeStyles({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    margin: "0 128px",
    [`@media (max-width: ${tabletWidth})`]: {
      marginTop: "32px",
      marginLeft: "32px",
      marginRight: "32px"
    }
  },
  title: {
    color: mainColor,
    display: "flex",
    justifyContent: "space-between",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "24px",
    [`@media (max-width: ${mobileWidth})`]: {
      fontSize: "12px",
      marginBottom: "20px"
    }
  },
  subTitle: {
    color: skeletonColor,
    fontSize: "20px",
    fontWeight: "bold",
    [`@media (max-width: ${mobileWidth})`]: {
      fontSize: "14px"
    }
  },
  listContainer: {
    position: "relative",
    marginTop: "10px"
  },
  listMargin: {
    marginBottom: "30px",
    [`@media (max-width: ${mobileWidth})`]: {
      marginBottom: "30px"
    }
  },
  input: {
    width: "100%",
    height: "46px",
    border: "1px solid #D9D9D9",
    boxSizing: "border-box",
    fontSize: "14px",
    outline: "none",
    [`@media (max-width: ${mobileWidth})`]: {
      height: "40px"
    }
  },
  addInput: {
    width: "100%",
    height: "140px",
    border: "1px solid #D9D9D9",
    boxSizing: "border-box",
    fontSize: "14px",
    outline: "none",
    [`@media (max-width: ${mobileWidth})`]: {
      height: "160px"
    }
  },
  datePicker: {
    display: "unset!important"
  },
  submitButtonContainer: {
    display: "flex",
    justifyContent: "flex-end"
  },
  submitButton: {
    marginBottom: "12px",
    padding: "20px 30px",
    backgroundColor: tokens.colorBrandBackground,
    color: "white",
    borderRadius: "4px",
    outline: "none",
    fontSize: "16px",
    boxShadow: tokens.shadow4,
    ":active": {
      backgroundColor: tokens.colorBrandBackgroundHover
    },
    ":hover": {
      backgroundColor: tokens.colorBrandBackgroundHover
    },
    ":disabled": {
      backgroundColor: tokens.colorNeutralBackgroundDisabled,
      ":active": {
        backgroundColor: tokens.colorNeutralBackgroundDisabled
      },
      ":hover": {
        backgroundColor: tokens.colorNeutralBackgroundDisabled
      }
    }
  }
});

export default useStyles;
