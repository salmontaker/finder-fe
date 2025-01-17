import { makeStyles, tokens } from "@fluentui/react-components";

import { mainColor, skeletonColor } from "@/styles/color";
import { tabletWidth } from "@/styles/size";

const useStyles = makeStyles({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    [`@media (max-width: ${tabletWidth})`]: {
      height: "70vh"
    }
  },
  title: {
    color: tokens.colorNeutralForeground1,
    fontWeight: "bold",
    fontSize: "24px",
    marginBottom: "10px",
    [`@media (max-width: ${tabletWidth})`]: {
      fontSize: "20px",
      paddingLeft: "6vw"
    }
  },
  subTitle: {
    color: tokens.colorNeutralForeground2,
    marginBottom: "30px",
    [`@media (max-width: ${tabletWidth})`]: {
      fontSize: "12px",
      marginBottom: "10px",
      paddingLeft: "6vw"
    }
  },
  keywordSubmit: {
    width: "500px",
    marginBottom: "30px",
    [`@media (max-width: ${tabletWidth})`]: {
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "0px"
    }
  },
  placeholder: {
    width: "400px",
    height: "45px",
    paddingLeft: "20px",
    border: skeletonColor,
    borderRadius: "15px",
    fontSize: "16px",
    backgroundColor: tokens.colorNeutralBackground1Hover,
    [`@media (max-width: ${tabletWidth})`]: {
      width: "70vw",
      height: "45px"
    }
  },
  button: {
    padding: "8px 10px",
    fontSize: "16px",
    fontWeight: "bold",
    color: mainColor,
    marginLeft: "20px",
    border: "none",
    background: "none",
    [`@media (max-width: ${tabletWidth})`]: {
      marginLeft: "0px"
    }
  },
  keywordContainer: {
    [`@media (max-width: ${tabletWidth})`]: {
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  },
  keywordList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "500px",
    height: "50px",
    marginBottom: "18px",
    borderRadius: "15px",
    backgroundColor: tokens.colorNeutralBackground1Hover,
    [`@media (max-width: ${tabletWidth})`]: {
      width: "90vw",
      height: "45px",
      marginBottom: "0px",
      marginTop: "15px"
    }
  },
  keywordDetail: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "20px"
  },
  keywordName: {
    marginLeft: "10px"
  },
  circle: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: mainColor
  },
  delete: {
    marginRight: "20px",
    cursor: "pointer"
  }
});

export default useStyles;
