import { ChatRoom } from "@/apis/chat";
import { User } from "@/apis/user";
import useStyles from "@/pages/chat/RoomList/index.css";
import RoomListItem from "@/pages/chat/RoomList/Item";

interface Props {
  recipient: User | undefined;
  setRecipient: (user: User | undefined) => void;
  histories: ChatRoom[] | undefined;
  setIsRightVisible: (isVisible: boolean) => void;
}

function RoomList({ recipient, setRecipient, histories, setIsRightVisible }: Props) {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.title}>대화 목록</div>
      <div className={styles.content}>
        {histories?.map((history) => (
          <RoomListItem
            key={history.userId}
            history={history}
            recipient={recipient}
            setIsRightVisible={setIsRightVisible}
            setRecipient={setRecipient}
          />
        ))}
      </div>
    </div>
  );
}

export default RoomList;
