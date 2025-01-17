import { makeStyles, tokens } from "@fluentui/react-components";

import { mainColor, secondaryColor, skeletonColor } from "@/styles/color";
import { tabletWidth } from "@/styles/size";

const useStyles = makeStyles({
  root: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    width: "56vw",
    height: "540px",
    backgroundColor: tokens.colorNeutralBackground1,
    overflow: "auto",
    [`@media (max-width: ${tabletWidth})`]: {
      width: "90%",
      height: "60dvh",
      backgroundColor: tokens.colorNeutralBackground2,
      alignItems: "center"
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
  tableContainer: {
    width: "100%",
    [`@media (max-width: ${tabletWidth})`]: {
      justifyContent: "center",
      alignItems: "center",
      fontSize: "14px",
      marginLeft: "10vw"
    }
  },
  table: {
    width: "100%",
    display: "flex",
    marginTop: "20px",
    marginLeft: "8vw"
  },
  tableRow: {
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  tableCell: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    flex: "1 0 auto",
    height: "auto",
    padding: "16px 16px 16px 0px",
    "&::before": {
      content: "attr(data-label)",
      fontWeight: "bold",
      display: "block",
      marginBottom: "4px"
    }
  },
  itemTitle: {
    color: skeletonColor,
    fontSize: "16px",
    fontWeight: "bold"
  },
  categoryTitle: {
    color: mainColor,
    fontSize: "12px",
    fontWeight: "bold"
  },
  subTitle: {
    color: secondaryColor,
    fontSize: "12px",
    fontWeight: "bold"
  }
});

export default useStyles;
