import { Depths } from "@fluentui/react";
import { Card, makeStyles } from "@fluentui/react-components";
import { BookExclamationMarkRegular } from "@fluentui/react-icons";

import Item from "./Item";
import useGlobalStore from "../../stores/global";
import useMainStore from "../../stores/main";
import { mainColor } from "../../styles/color";
import { contentMargin, headerHeight } from "../../styles/margin";
import { mobileWidth } from "../../styles/size";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: `calc(100vh - ${headerHeight} - ${contentMargin})`,
    [`@media (max-width: ${mobileWidth})`]: {
      height: "auto",
    },
  },
  title: {
    marginLeft: "8px",
    fontSize: "20px",
    fontWeight: "bold"
  },
  subtitle: {
    marginLeft: "8px",
    color: mainColor,
    fontSize: "14px",
    fontWeight: "bold"
  },
  list: {
    height: "100%",
    marginTop: "18px",
    borderRadius: "20px",
    boxShadow: Depths.depth16,
    overflow: "auto",
        // "::-webkit-scrollbar": {
    //   display: "none"
    // }
    [`@media (max-width: ${mobileWidth})`]: {
      height: "70vh",
      borderRadius: 0,
      boxShadow: "none"
    },
  },
  empty: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px"
  }
});

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
      <div
        className={styles.title}
      >{`${showLostGoods ? "분실물 목록" : "습득물 보관장소"}`}</div>
      <Card className={styles.list}>{renderList()}</Card>
    </div>
  );
}

export default MarkerList;
