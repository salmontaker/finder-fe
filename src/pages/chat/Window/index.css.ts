import { Depths } from "@fluentui/react";
import { makeStyles, tokens } from "@fluentui/react-components";

import { contentMargin, headerHeight } from "@/styles/margin";
import { tabletWidth } from "@/styles/size";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: `calc(100dvh - ${headerHeight} - ${contentMargin})`,
    [`@media (max-width: ${tabletWidth})`]: {
      height: `calc(100dvh - ${headerHeight})`
    }
  },
  chatMenu: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: "5%"
  },
  chatMenuText: {
    height: "auto",
    paddingRight: "16px",
    fontSize: "14px",
    fontWeight: "bold"
  },
  chatBox: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    height: "95%",
    borderRadius: "20px 20px 0 0",
    boxShadow: Depths.depth16,
    backgroundColor: tokens.colorNeutralBackground3
  },
  chatBoxTop: {
    display: "flex",
    alignItems: "center",
    height: "64px",
    borderRadius: "20px 20px 0 0",
    backgroundColor: tokens.colorNeutralBackground1
  },
  profileImg: {
    position: "absolute",
    top: "-32px",
    left: "32px",
    maxWidth: "128px",
    maxHeight: "128px",
    boxShadow: Depths.depth16,
    backgroundColor: tokens.colorNeutralBackground1,
    [`@media (max-width: ${tabletWidth})`]: {
      maxWidth: "64px",
      maxHeight: "64px",
      top: "6px",
      left: "24px"
    }
  },
  profileText: {
    marginLeft: "184px",
    fontSize: "18px",
    fontWeight: "bold",
    [`@media (max-width: ${tabletWidth})`]: {
      marginLeft: "102px",
      fontSize: "16px"
    }
  },
  chatBoxMiddle: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "32px",
    paddingTop: "48px",
    gap: "16px",
    overflow: "auto"
  },
  chatBoxBottom: {
    display: "flex",
    alignItems: "center",
    height: "auto",
    minHeight: "72px",
    maxHeight: "300px",
    overflow: "hidden",
    borderRadius: "20px 20px 0 0",
    backgroundColor: tokens.colorNeutralBackground1,
    paddingLeft: "32px",
    paddingRight: "32px",
    gap: "16px"
  },
  chatBoxTextArea: {
    flex: 1,
    color: tokens.colorNeutralForeground1,
    fontSize: "16px",
    fontFamily: "inherit",
    lineHeight: "24px",
    maxHeight: "300px",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    resize: "none"
  }
});

export default useStyles;
