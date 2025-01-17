import { makeStyles, tokens } from "@fluentui/react-components";

import { mainColor } from "@/styles/color";
import { mobileWidth } from "@/styles/size";

const useStyle = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "10px"
  },
  itemTop: {
    display: "flex",
    gap: "16px"
  },
  itemBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    gap: "8px",
    minWidth: 0,
    "&>*": {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis"
    }
  },
  itemName: {
    fontSize: "18px",
    fontWeight: "bold",
    color: tokens.colorNeutralForeground1,
    [`@media (max-width: ${mobileWidth})`]: {
      fontSize: "16px"
    }
  },
  itemDescription: {
    fontSize: "12px",
    fontWeight: "bold",
    color: mainColor,
    [`@media (max-width: ${mobileWidth})`]: {
      fontSize: "11px"
    }
  },
  itemDescription02: {
    fontSize: "12px",
    fontWeight: "bold",
    color: tokens.colorNeutralForeground4,
    [`@media (max-width: ${mobileWidth})`]: {
      fontSize: "11px"
    }
  },
  itemDetail: {
    marginLeft: "auto",
    marginBottom: "8px",
    fontSize: "14px",
    fontWeight: "bold",
    color: mainColor,
    cursor: "pointer",
    [`@media (max-width: ${mobileWidth})`]: {
      fontSize: "11px"
    }
  }
});

export default useStyle;
