import { Image } from "@fluentui/react-components";
import { AddRegular, SendRegular } from "@fluentui/react-icons";
import { useEffect, useRef } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

import { Chat } from "@/apis/chat";
import { User } from "@/apis/user";
import useStyles from "@/pages/chat/Window/index.css";
import ChatMessage from "@/pages/chat/Window/Message";
import useAuthStore from "@/stores/auth";
import { mainColor } from "@/styles/color";

interface Props {
  recipient: User | undefined;
  setRecipient: (user: User | undefined) => void;
  messages: Chat[];
  sendMessage: (message: string) => void;
  setIsRightVisible?: (isVisible: boolean) => void;
}

function ChatWindow({ recipient, setRecipient, messages, sendMessage, setIsRightVisible }: Props) {
  const styles = useStyles();
  const messageBox = useRef<HTMLDivElement | null>(null);
  const messageArea = useRef<HTMLTextAreaElement | null>(null);

  const { userId } = useAuthStore();

  const handleSendMessage = () => {
    if (messageArea.current) {
      const message = messageArea.current.value;

      if (!message) return;

      sendMessage(message);

      messageArea.current.value = "";
    }
  };

  useEffect(() => {
    if (messageBox.current) {
      messageBox.current.scrollTop = messageBox.current.scrollHeight;
    }
  }, [messages]);

  const handleEndConversation = () => {
    if (setIsRightVisible) {
      setIsRightVisible(false);
    }
    setRecipient(undefined);
  };

  return (
    <div className={styles.root}>
      <div className={styles.chatMenu}>
        <div
          className={styles.chatMenuText}
          style={{
            color: mainColor,
            cursor: `${recipient ? "pointer" : "not-allowed"}`
          }}
          onClick={handleEndConversation}
        >
          대화 끝내기
        </div>
      </div>
      <div className={styles.chatBox}>
        <div className={styles.chatBoxTop}>
          <Image
            className={styles.profileImg}
            fit="cover"
            shape="circular"
            src={recipient?.profileImage ? recipient.profileImage : "/logo192.png"}
          />
          <div className={styles.profileText}>
            {!recipient
              ? "채팅할 상대 선택..."
              : recipient.username
                ? recipient.username
                : "탈퇴한 사용자"}
          </div>
        </div>
        <div ref={messageBox} className={styles.chatBoxMiddle}>
          {messages
            ?.filter((message) => message.messageType !== "ENTER")
            .map((message) => (
              <ChatMessage
                key={message.messageId}
                isMine={message.sender === userId}
                message={message.message}
                timestamp={message.messageTime}
              />
            ))}
        </div>
        <form
          className={styles.chatBoxBottom}
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
        >
          <AddRegular fontSize={"32px"} style={{ cursor: "not-allowed" }} />
          <ReactTextareaAutosize
            ref={messageArea}
            className={styles.chatBoxTextArea}
            disabled={!recipient}
            placeholder={recipient ? "Type a message..." : "Select user..."}
          />
          <SendRegular
            color={mainColor}
            fontSize={"32px"}
            style={{ cursor: `${recipient ? "pointer" : "not-allowed"}` }}
            onClick={() => handleSendMessage()}
          />
        </form>
      </div>
    </div>
  );
}

export default ChatWindow;
