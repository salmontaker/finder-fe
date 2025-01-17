import { Depths } from "@fluentui/react";
import { makeStyles } from "@fluentui/react-components";

import { mainColor } from "@/styles/color";
import { contentMargin, headerHeight, headerMobileHeight } from "@/styles/margin";
import { mobileWidth, tabletWidth } from "@/styles/size";

const useStyle = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: `calc(100dvh - ${headerHeight} - ${contentMargin})`,
    gap: "15px",
    [`@media (max-width: ${tabletWidth})`]: {
      height: `calc(100dvh - ${headerHeight})`,
      padding: 0,
      zIndex: 0
    },
    [`@media (max-width: ${mobileWidth})`]: {
      height: `calc(100dvh - ${headerMobileHeight})`,
      padding: 0,
      zIndex: 0
    }
  },
  title: {
    display: "flex",
    alignItems: "flex-end",
    marginTop: "68px",
    marginLeft: "8px",
    [`@media (max-width: ${tabletWidth})`]: {
      display: "none"
    }
  },
  titleKor: {
    fontSize: "48px",
    lineHeight: "48px",
    fontWeight: "bold"
  },
  titleEng: {
    fontSize: "20px",
    lineHeight: "20px",
    fontWeight: "bold",
    color: mainColor
  },
  titleInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginLeft: "auto",
    [`@media (max-width: ${tabletWidth})`]: {
      display: "none"
    }
  },
  position: {
    color: mainColor,
    fontSize: "14px",
    fontWeight: "bold"
  },
  map: {
    width: "100%",
    height: "100%",
    padding: 0,
    borderRadius: "20px",
    boxShadow: Depths.depth16,
    [`@media (max-width: ${tabletWidth})`]: {
      borderRadius: 0,
      boxShadow: "none",
      zIndex: 0
    }
  },
  control: {
    position: "absolute",
    top: "14px",
    right: "14px",
    zIndex: 1,
    [`@media (max-width: ${tabletWidth})`]: {
      top: "8px"
    }
  },
  control02: {
    display: "none",
    [`@media (max-width: ${tabletWidth})`]: {
      display: "block",
      position: "absolute",
      top: "45px",
      right: "14px",
      zIndex: 1
    }
  },
  cardMap: {
    width: "100%",
    height: "100%",
    [`@media (max-width: ${tabletWidth})`]: {
      height: `calc(100dvh - ${headerHeight})`
    },
    [`@media (max-width: ${mobileWidth})`]: {
      height: `calc(100dvh - ${headerMobileHeight})`
    }
  }
});

export default useStyle;
