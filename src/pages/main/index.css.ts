import { makeStyles } from "@fluentui/react-components";

import { mobileWidth, tabletWidth } from "@/styles/size";

const useStyles = makeStyles({
  root: {
    flex: 1,
    position: "relative",
    [`@media (max-width: ${mobileWidth})`]: {
      padding: 0
    }
  },
  content: {
    display: "flex",
    gap: "32px",
    [`@media (max-width: ${tabletWidth})`]: {
      gap: "0px"
    },
    [`@media (max-width: ${mobileWidth})`]: {
      display: "block"
    }
  },
  left: {
    width: "35%",
    [`@media (max-width: ${tabletWidth})`]: {
      width: "33%"
    },
    [`@media (max-width: ${mobileWidth})`]: {
      display: "none"
    }
  },
  right: {
    width: "65%",
    [`@media (max-width: ${tabletWidth})`]: {
      width: "67%",
      position: "relative"
    },
    [`@media (max-width: ${mobileWidth})`]: {
      width: "100%",
      position: "relative"
    }
  }
});

export default useStyles;
