import { Card } from "@fluentui/react-components";
import { BookExclamationMarkRegular } from "@fluentui/react-icons";

import Item from "@/pages/main/ItemList/Item";
import useStyles from "@/pages/main/ItemList/MarkerList.css";
import useGlobalStore from "@/stores/global";
import useMainStore from "@/stores/main";

interface Props {
  handleBookmark: (name: string) => void;
}

function MarkerList({ handleBookmark }: Props) {
  const styles = useStyles();
  const { markerList, showLostGoods } = useMainStore();
  const { bookmarkMap } = useGlobalStore();

  const renderList = () => {
    if (markerList.length > 0) {
      return markerList.map((marker, index) => (
        <Item
          key={index}
          address={marker.address}
          category={marker.category}
          handleBookmark={handleBookmark}
          isBookmarked={bookmarkMap.has(marker.name)}
          marker={marker}
          name={marker.name}
        />
      ));
    } else {
      return (
        <div className={styles.empty}>
          <BookExclamationMarkRegular fontSize="128px" />
          <div>{`${showLostGoods ? "분실물" : "습득물"}이 없습니다.`}</div>
        </div>
      );
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.subtitle}>현재 지역</div>
      <div className={styles.title}>{`${showLostGoods ? "분실물 목록" : "습득물 보관장소"}`}</div>
      <Card className={styles.list}>{renderList()}</Card>
    </div>
  );
}

export default MarkerList;
