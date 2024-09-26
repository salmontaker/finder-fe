import { Divider, Image, makeStyles, tokens } from "@fluentui/react-components";
import { useNavigate } from "react-router-dom";

import { LostFound } from "../../apis/lostfound";
import { Marker } from "../../apis/marker";
import useMainStore from "../../stores/main";
import { mainColor } from "../../styles/color";

const useStyle = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "10px"
  },
  itemTop: {
    display: "flex",
    gap: "16px"
  },
  itemBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    gap: "8px"
  },
  itemName: {
    fontSize: "20px",
    fontWeight: "bold",
    color: tokens.colorNeutralForeground1,
    "@media (max-width: 390px)": {
      fontSize: "16px",
    },
  },
  itemDescription: {
    fontSize: "14px",
    fontWeight: "bold",
    color: tokens.colorNeutralForeground4,
    "@media (max-width: 390px)": {
      fontSize: "11px",
    },
  },
  itemDetail: {
    marginLeft: "auto",
    marginBottom: "8px",
    fontSize: "14px",
    fontWeight: "bold",
    color: mainColor,
    cursor: "pointer",
    "@media (max-width: 390px)": {
      fontSize: "11px",
    },
  }
});

interface ItemProps {
  name: string;
  address: string;
  category: string;
  img?: string;
  marker?: Marker;
  item?: LostFound;
}

function Item({ name, address, category, img, marker, item }: ItemProps) {
  const styles = useStyle();
  const navigate = useNavigate();

  const { setSelectedMarker } = useMainStore();

  return (
    <div>
      <div className={styles.root}>
        <div className={styles.itemTop}>
          <Image
            fit="contain"
            src={img ? img : "/img105.png"}
            style={{ width: "112px", height: "112px" }}
          />
          <div className={styles.itemBox}>
            <div className={styles.itemName}>{name}</div>
            <div className={styles.itemDescription}>{address}</div>
            <div className={styles.itemDescription}>{category}</div>
          </div>
        </div>
        <div
          className={styles.itemDetail}
          onClick={() => {
            if (marker) {
              setSelectedMarker(marker);
            }
            if (item) {
              navigate(`/detail/${item.atcId}-${item.fdSn}`);
            }
          }}
        >
          {"상세보기 >"}
        </div>
      </div>
      <Divider />
    </div>
  );
}

export default Item;
