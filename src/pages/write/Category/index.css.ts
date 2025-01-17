import { makeStyles } from "@fluentui/react-components";

import { mainColor, skeletonColor } from "@/styles/color";
import { mobileWidth } from "@/styles/size";

const useStyles = makeStyles({
  title: {
    marginLeft: "40px",
    [`@media (max-width: ${mobileWidth})`]: {
      marginLeft: "20px",
      fontSize: "24px"
    }
  },
  modalContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "60vw",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "20px",
    transition: "width 0.3s",
    overflowY: "auto",
    [`@media (max-width: ${mobileWidth})`]: {
      width: "80vw",
      maxHeight: "75vh",
      top: "50%"
    }
  },
  modalContentSmall: {
    width: "80vw",
    [`@media (max-width: ${mobileWidth})`]: {
      transition: "width 0.3s"
    }
  },
  modalOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1000
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridGap: "40px",
    [`@media (max-width: ${mobileWidth})`]: {
      gridTemplateColumns: "repeat(4, 1fr)",
      gridGap: "10px",
      padding: "0px 10px 10px 10px"
    }
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "15px",
    backgroundColor: "#fff",
    textAlign: "center",
    cursor: "pointer",
    border: "none",
    outline: "none",
    fontSize: "16px",
    color: skeletonColor,
    fontWeight: "bold"
  },
  icon: {
    fontSize: "46px",
    marginBottom: "16px",
    color: mainColor,
    [`@media (max-width: ${mobileWidth})`]: {
      fontSize: "32px",
      marginBottom: "10px"
    }
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px"
  },
  button: {
    backgroundColor: "transparent",
    border: "1px solid " + skeletonColor,
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    color: skeletonColor,
    fontSize: "16px",
    outline: "none",
    transition: "background-color 0.3s, color 0.3s",
    margin: "40px 10px 0 10px",
    [`@media (max-width: ${mobileWidth})`]: {
      padding: "8px 16px",
      fontSize: "12px",
      marginTop: "20px",
      color: skeletonColor
    }
  },
  subcategoryList: {
    listStyle: "none",
    paddingLeft: "40px",
    marginTop: "32px"
  },
  subcategoryItem: {
    cursor: "pointer",
    padding: "10px",
    borderRadius: "5px",
    color: skeletonColor,
    transition: "background-color 0.3s, color 0.3s",
    marginBottom: "5px"
  },
  subcategoryItemHover: {
    color: skeletonColor,
    fontSize: "16px"
  }
});

export default useStyles;
