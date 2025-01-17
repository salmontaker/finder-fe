import { Image } from "@fluentui/react-components";

import { BookMark } from "@/apis/bookmark";
import useMarkerRedirect from "@/hooks/useMarkerRedirect";
import useStyles from "@/pages/profile/BookmarkList/Item.css";

interface Props {
  img?: string;
  bookmark?: BookMark;
}

function BookmarkListItem({ img, bookmark }: Props) {
  const styles = useStyles();
  const redirect = useMarkerRedirect();

  const handlePlaceClick = () => {
    if (bookmark) {
      redirect(false, bookmark.lat, bookmark.lng, bookmark.location);
    }
  };

  return (
    <div
      className={styles.root}
      onClick={() => {
        handlePlaceClick();
      }}
    >
      <div className={styles.imageContainer}>
        <Image
          shape="circular"
          src={img || "/profileIMGimsi.png"}
          style={{ width: "85px", height: "85px" }}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.bookmarkTitle}>{bookmark?.location}</div>
        <div className={styles.bookmarkDetail}>{bookmark?.address}</div>
      </div>
    </div>
  );
}

export default BookmarkListItem;
