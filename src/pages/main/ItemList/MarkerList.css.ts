import { Depths } from "@fluentui/react";
import { makeStyles } from "@fluentui/react-components";

import { mainColor } from "@/styles/color";
import { contentMargin, headerHeight } from "@/styles/margin";
import { mobileWidth, tabletWidth } from "@/styles/size";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: `calc(100dvh - ${headerHeight} - ${contentMargin})`,
    [`@media (max-width: ${tabletWidth})`]: {
      height: `calc(100dvh - ${headerHeight})`
    },
    [`@media (max-width: ${mobileWidth})`]: {
      height: "auto",
      marginTop: "10px"
    }
  },
  title: {
    marginLeft: "8px",
    fontSize: "20px",
    fontWeight: "bold",
    [`@media (max-width: ${tabletWidth})`]: {
      display: "none"
    },
    [`@media (max-width: ${mobileWidth})`]: {
      display: "block"
    }
  },
  subtitle: {
    marginLeft: "8px",
    color: mainColor,
    fontSize: "14px",
    fontWeight: "bold",
    [`@media (max-width: ${tabletWidth})`]: {
      display: "none"
    },
    [`@media (max-width: ${mobileWidth})`]: {
      display: "block"
    }
  },
  list: {
    height: "100%",
    marginTop: "18px",
    borderRadius: "20px",
    boxShadow: Depths.depth16,
    overflow: "auto",
    // "::-webkit-scrollbar": {
    //   display: "none"
    // }
    [`@media (max-width: ${tabletWidth})`]: {
      marginTop: "0px",
      borderRadius: "0px"
    },
    [`@media (max-width: ${mobileWidth})`]: {
      height: "75vh",
      borderRadius: 0,
      boxShadow: "none",
      marginTop: "10px"
    }
  },
  empty: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px"
  }
});

export default useStyles;
