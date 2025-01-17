import { Depths } from "@fluentui/react";
import { makeStyles, tokens } from "@fluentui/react-components";

import { mainColor } from "@/styles/color";
import { contentMargin, headerHeight } from "@/styles/margin";
import { tabletWidth } from "@/styles/size";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: `calc(100dvh - ${headerHeight} - ${contentMargin} - 32px)`,
    padding: "16px",
    borderRadius: "20px 20px 0 0",
    boxShadow: Depths.depth16,
    backgroundColor: tokens.colorNeutralBackground1,
    [`@media (max-width: ${tabletWidth})`]: {
      height: `calc(100dvh - ${headerHeight} - 20px)`
    }
  },
  title: {
    marginTop: "16px",
    marginBottom: "24px",
    marginLeft: "10px",
    fontSize: "20px",
    fontWeight: "bold",
    color: mainColor
  },
  content: {
    display: "flex",
    flexDirection: "column",
    overflow: "auto"
  }
});

export default useStyles;
