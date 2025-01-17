import { Depths } from "@fluentui/react";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  popup: {
    display: "flex",
    gap: "8px"
  },
  popupCards: {
    padding: "18px",
    justifyContent: "center",
    boxShadow: Depths.depth16,
    borderRadius: "20px",
    fontSize: "14px"
  }
});

export default useStyles;
