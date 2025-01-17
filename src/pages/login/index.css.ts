import { makeStyles, tokens } from "@fluentui/react-components";

import { mainColor } from "@/styles/color";
import { headerHeight, headerMobileHeight } from "@/styles/margin";
import { mobileWidth } from "@/styles/size";

const useStyles = makeStyles({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: `calc(100dvh - ${headerHeight})`,
    [`@media (max-width: ${mobileWidth})`]: {
      height: `calc(100dvh - ${headerMobileHeight})`
    }
  },
  container: {
    width: "82vw",
    height: "80vh",
    boxShadow: "0 0px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: "30px 30px 0px 0px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    bottom: 0,
    [`@media (max-width: ${mobileWidth})`]: {
      width: "100vw",
      height: "100dvh"
    }
  },
  leftContainer: {
    width: "40vw",
    height: "100%",
    backgroundColor: mainColor,
    borderRadius: "30px 0px 0px 0px",
    [`@media (max-width: ${mobileWidth})`]: {
      display: "none"
    }
  },
  rightContainer: {
    width: "60vw",
    height: "100%",
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: "0px 30px 0px 0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [`@media (max-width: ${mobileWidth})`]: {
      width: "100vw",
      height: "100dvh"
    }
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    color: mainColor,
    width: "auto",
    marginBottom: "10px"
  },
  loginText: {
    fontSize: "42px",
    fontWeight: "bold",
    color: tokens.colorNeutralForeground2,
    width: "auto",
    marginBottom: "30px",
    [`@media (max-width: ${mobileWidth})`]: {
      fontSize: "36px"
    }
  },
  detailText: {
    fontSize: "16px",
    fontWeight: "bold",
    color: tokens.colorNeutralForegroundDisabled,
    width: "auto",
    marginBottom: "5px"
  },
  detailTextStylePlus: {
    fontSize: "12px",
    fontWeight: "bold",
    color: tokens.colorNeutralForeground2,
    width: "auto"
  },
  image: {
    cursor: "pointer",
    width: "40%",
    marginTop: "20px",
    marginBottom: "10px",
    [`@media (max-width: ${mobileWidth})`]: {
      width: "70%"
    }
  },
  fullImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "30px 0px 0px 0px",
    opacity: "40%"
  }
});

export default useStyles;
