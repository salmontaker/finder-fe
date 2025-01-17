import { GlobeLocationRegular } from "@fluentui/react-icons";

import useStyles from "@/pages/profile/BookmarkList/index.css";
import BookmarkListItem from "@/pages/profile/BookmarkList/Item";
import useGlobalStore from "@/stores/global";

interface Props {
  img?: string;
}

function BookmarkList({ img }: Props) {
  const styles = useStyles();
  const { bookmarkMap } = useGlobalStore();

  return (
    <div className={styles.root}>
      <div className={styles.title}>장소 바로가기</div>
      {bookmarkMap.size > 0 ? (
        Array.from(bookmarkMap.values()).map((bookmark) => (
          <BookmarkListItem
            key={bookmark.id}
            bookmark={bookmark}
            img={img || "/profilePlaceIcon.png"}
          />
        ))
      ) : (
        <div className={styles.empty}>
          <GlobeLocationRegular fontSize={128} />
          <div>즐겨찾기한 장소가 없습니다.</div>
        </div>
      )}
    </div>
  );
}

export default BookmarkList;
