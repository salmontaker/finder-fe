import { useState } from "react";

import ItemList from "@/pages/main/ItemList";
import MarkerList from "@/pages/main/ItemList/MarkerList";
import useStyles from "@/pages/main/ItemModal.css";
import useMainStore from "@/stores/main";

interface Props {
  handleBookmark: (name: string) => void;
}

function ItemModal({ handleBookmark }: Props) {
  const styles = useStyles();
  const { selectedMarker } = useMainStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={styles.modalTrigger} onClick={() => setIsModalOpen(!isModalOpen)}>
        목록 보기
      </div>

      <div className={`${styles.contentContainer} ${isModalOpen ? styles.contentVisible : ""}`}>
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
          {selectedMarker ? <ItemList /> : <MarkerList handleBookmark={handleBookmark} />}
        </div>
      </div>
    </>
  );
}

export default ItemModal;
