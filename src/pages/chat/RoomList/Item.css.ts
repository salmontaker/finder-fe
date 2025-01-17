import { makeStyles, tokens } from "@fluentui/react-components";

import { backgroundColor, secondaryColor, skeletonColor } from "@/styles/color";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-around",
    border: `solid ${secondaryColor}`,
    borderTopWidth: 0,
    borderBottomWidth: "0.5px",
    borderLeftWidth: 0,
    borderRightWidth: 0,
    padding: "16px",
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground2
    }
  },
  profileImg: {
    maxWidth: "64px",
    maxHeight: "64px",
    backgroundColor: tokens.colorNeutralBackground1
  },
  room: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "10px",
    gap: "4px",
    minWidth: 0,
    "&>*": {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis"
    }
  },
  roomName: { fontWeight: "bold", color: skeletonColor },
  roomMsg: { fontWeight: "bold", color: backgroundColor },
  roomDate: { fontWeight: "bold", color: backgroundColor }
});

export default useStyles;
