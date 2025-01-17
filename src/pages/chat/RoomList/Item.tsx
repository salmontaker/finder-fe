import { Image } from "@fluentui/react-components";

import { ChatRoom } from "@/apis/chat";
import { getUser, User } from "@/apis/user";
import useStyles from "@/pages/chat/RoomList/Item.css";

interface Props {
  recipient: User | undefined;
  setRecipient: (user: User | undefined) => void;
  history: ChatRoom;
  setIsRightVisible: (isVisible: boolean) => void;
}

function RoomListItem({ recipient, setRecipient, history, setIsRightVisible }: Props) {
  const styles = useStyles();

  return (
    <div
      className={styles.root}
      onClick={() => {
        if (recipient?.userId !== history.userId) {
          getUser(history.userId).then((res) => {
            setRecipient(res);
            setIsRightVisible(true);
          });
        }
      }}
    >
      <Image
        className={styles.profileImg}
        shape="circular"
        src={history.thumbnailImage ? history.thumbnailImage : "/logo192.png"}
      />
      <div className={styles.room}>
        <div className={styles.roomName}>
          {history.username ? history.username : "탈퇴한 사용자"}
        </div>
        <div className={styles.roomMsg}>{history.message}</div>
      </div>
      <div className={styles.roomDate}>{history.messageDate.split("T")[0]}</div>
    </div>
  );
}

export default RoomListItem;
