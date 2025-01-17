import { Depths } from "@fluentui/react";
import { makeStyles } from "@fluentui/react-components";

import { mobileWidth } from "@/styles/size";

const useStyles = makeStyles({
  popup: {
    display: "flex",
    gap: "8px"
  },
  popupCards: {
    padding: "24px",
    justifyContent: "center",
    boxShadow: Depths.depth16,
    borderRadius: "20px",
    fontSize: "20px",
    [`@media (max-width: ${mobileWidth})`]: {
      padding: "18px",
      fontSize: "16px"
    }
  }
});

export default useStyles;
