import { useState } from "react";
import { makeStyles } from "@fluentui/react-components";
import ItemList from "./ItemList";
import MarkerList from "./MarkerList";
import useMainStore from "../../stores/main";

const useStyles = makeStyles({
  modalTrigger: {
    position: "fixed",
    bottom: "16px",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    padding: "8px 16px",
    backgroundColor: "#fff",
    cursor: "pointer",
    zIndex: 0,
    borderRadius: "4px",
    boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.1)",
    "@media (min-width: 391px)": {
      display: "none",
    },
  },
  contentContainer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "80vh",
    backgroundColor: "#fff",
    zIndex: 1,
    overflowY: "auto",
    transform: "translateY(100%)",
    transition: "transform 0.3s ease",
    borderRadius: "40px 40px 0px 0px"
  },
  contentVisible: {
    transform: "translateY(0)",
  },
  closeButton: {
    position: "absolute",
    top: "30px",
    right: "30px",
    cursor: "pointer",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  },
});

function ItemModal() {
  const styles = useStyles();
  const { selectedMarker } = useMainStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className={styles.modalTrigger}
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        {selectedMarker ? "Item 목록 보기" : "Marker 목록 보기"}
      </div>

      <div
        className={`${styles.contentContainer} ${isModalOpen ? styles.contentVisible : ""}`}
      >
        <div style={{ padding: "16px", position: "relative" }}>
          <div
            className={styles.closeButton}
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(false);
            }}
          >
            ✕
          </div>
          {selectedMarker ? <ItemList /> : <MarkerList />}
        </div>
      </div>
    </>
  );
}

export default ItemModal;