import { makeStyles, tokens } from "@fluentui/react-components";

import { mainColor } from "@/styles/color";
import { tabletWidth } from "@/styles/size";

const useStyles = makeStyles({
  root: {
    display: "flex",
    maxWidth: "60%",
    [`@media (max-width: ${tabletWidth})`]: {
      maxWidth: "100%",
      fontSize: "12px"
    }
  },
  myRoot: { marginLeft: "auto" },
  myChat: {
    color: tokens.colorNeutralBackground1,
    borderRadius: "20px 20px 0 20px",
    backgroundColor: mainColor,
    padding: "16px"
  },
  myChatTime: {
    marginRight: "16px",
    alignContent: "end",
    color: mainColor,
    [`@media (max-width: ${tabletWidth})`]: {
      marginRight: "10px"
    }
  },
  othersRoot: { marginRight: "auto" },
  othersChat: {
    color: tokens.colorNeutralForeground1,
    borderRadius: "20px 20px 20px 0",
    backgroundColor: tokens.colorNeutralStroke1,
    padding: "16px"
  },
  othersChatTime: {
    marginLeft: "16px",
    alignContent: "end",
    color: tokens.colorNeutralStroke1,
    [`@media (max-width: ${tabletWidth})`]: {
      marginLeft: "10px"
    }
  }
});

export default useStyles;
