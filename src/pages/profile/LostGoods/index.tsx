import { TableCell, TableRow } from "@fluentui/react-table";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Marker } from "@/apis/marker";
import { getUserLostGoods } from "@/apis/user";
import useStyles from "@/pages/profile/LostGoods/index.css";
import useAuthStore from "@/stores/auth";
import useMainStore from "@/stores/main";
import usePositionStore from "@/stores/position";

function ProfileLostGoods() {
  const styles = useStyles();
  const navigate = useNavigate();

  const { userId } = useAuthStore();
  const { setSelectedMarker, setShowLostGoods } = useMainStore();
  const { setLatitude, setLongitude } = usePositionStore();

  const [lostGoods, setLostGoods] = useState<Marker[]>([]);

  const handleClick = (lostGoods: Marker) => {
    setSelectedMarker(undefined);
    setShowLostGoods(true);
    setLatitude(lostGoods.lat);
    setLongitude(lostGoods.lng);
    navigate("/", {
      state: {
        target: lostGoods._id
      }
    });
  };

  useEffect(() => {
    if (userId) {
      getUserLostGoods(userId).then((res) => {
        setLostGoods(res);
      });
    }
  }, [userId]);

  return (
    <div className={styles.root}>
      <div className={styles.title}>내가 쓴 글</div>
      <div className={styles.tableContainer}>
        {lostGoods.map((row) => (
          <TableRow key={row._id} onClick={() => handleClick(row)} className={styles.tableRow}>
            <TableCell className={styles.tableCell}>
              <div className={styles.categoryTitle}>{row.category}</div>
              <div className={styles.itemTitle}>{row.name}</div>
              <div className={styles.subTitle}>{row.date}</div>
            </TableCell>
          </TableRow>
        ))}
      </div>
    </div>
  );
}

export default ProfileLostGoods;
