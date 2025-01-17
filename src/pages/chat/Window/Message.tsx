import { mergeClasses } from "@fluentui/react-components";

import useStyles from "@/pages/chat/Window/Message.css";

interface Props {
  message?: string;
  timestamp?: string;
  isMine?: boolean;
}

function ChatMessage({ message, timestamp, isMine }: Props) {
  const styles = useStyles();

  return (
    <div className={mergeClasses(styles.root, isMine ? styles.myRoot : styles.othersRoot)}>
      {isMine && <div className={styles.myChatTime}>{timestamp}</div>}
      <div className={isMine ? styles.myChat : styles.othersChat}>{message}</div>
      {!isMine && <div className={styles.othersChatTime}>{timestamp}</div>}
    </div>
  );
}

export default ChatMessage;
