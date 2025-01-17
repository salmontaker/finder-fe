import { makeStyles, tokens } from "@fluentui/react-components";

import { tabletWidth } from "@/styles/size";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "30px",
    padding: "20px 44px 20px 44px",
    backgroundColor: tokens.colorNeutralBackground1Hover,
    cursor: "pointer",
    [`@media (max-width: ${tabletWidth})`]: {
      backgroundColor: "none",
      padding: "0px 0px 0px 0px",
      width: "80vw",
      height: "45px"
    }
  },
  imageContainer: {
    marginRight: "20px",
    [`@media (max-width: ${tabletWidth})`]: {
      display: "none"
    }
  },
  textContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  bookmarkTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: tokens.colorNeutralForeground1,
    marginBottom: "10px",
    [`@media (max-width: ${tabletWidth})`]: {
      fontSize: "16px"
    }
  },
  bookmarkDetail: {
    fontSize: "14px",
    color: tokens.colorNeutralForeground3,
    [`@media (max-width: ${tabletWidth})`]: {
      fontSize: "12px"
    }
  }
});

export default useStyles;
