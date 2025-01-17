import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useWebSocket from "react-use-websocket";

import { Chat, ChatRoom, createChatRoom, getChatRooms, getMessages } from "@/apis/chat";
import { getUser, User } from "@/apis/user";
import useStyles from "@/pages/chat/index.css";
import RoomList from "@/pages/chat/RoomList";
import ChatWindow from "@/pages/chat/Window";
import useAuthStore from "@/stores/auth";
import { BASE_URL } from "@/utils/axios";

function ChatPage() {
  const styles = useStyles();
  const location = useLocation();

  const [isRightVisible, setIsRightVisible] = useState(false);
  const [recipient, setRecipient] = useState<User>();
  const [histories, setHistories] = useState<ChatRoom[]>();
  const [messages, setMessages] = useState<Chat[]>([]);

  const { userId } = useAuthStore();

  const protocol = BASE_URL.split("://")[0] === "https" ? "wss" : "ws";
  const wsUrl = `${protocol}://${BASE_URL.split("://")[1]}/api/ws/chat?userId=${userId}`;
  const { sendJsonMessage, lastJsonMessage } = useWebSocket(wsUrl, {
    shouldReconnect: () => true,
    reconnectAttempts: 5,
    reconnectInterval: (attemptNumber) => Math.min(Math.pow(2, attemptNumber) * 1000, 10000)
  });

  // 메시지 목록 갱신
  const fetchHistories = () => {
    if (userId) {
      getChatRooms(userId).then((res) => {
        setHistories(res);
      });
    }
  };

  // 메시지 송신
  const sendMessage = (message: string) => {
    sendJsonMessage({
      sender: userId,
      recipient: recipient?.userId,
      message: message
    });
  };

  // 연락하기 기능으로 채팅 시작 시
  useEffect(() => {
    if (location.state) {
      const targetId = location.state.targetId;

      if (userId) {
        getUser(targetId)
          .then((target) => {
            getMessages(userId, targetId).then((messages) => {
              if (messages.length > 0) {
                setRecipient(target);
                setIsRightVisible(true);
                fetchHistories();
              } else {
                createChatRoom(userId, targetId).then(() => {
                  setRecipient(target);
                  setIsRightVisible(true);
                  fetchHistories();
                });
              }
            });
          })
          .catch((err: AxiosError) => {
            if (err.response?.status !== 404) {
              console.error(err);
            }
          })
          .finally(() => {
            location.state = null;
          });
      }
    }
  }, [location]);

  // 메시지 수신
  useEffect(() => {
    if (lastJsonMessage && recipient) {
      const data = lastJsonMessage as Chat;

      if (data.sender === userId || data.sender === recipient.userId)
        setMessages([...messages, data]);
    }
    fetchHistories();
  }, [lastJsonMessage]);

  // 채팅 목록 선택
  useEffect(() => {
    if (userId && recipient?.userId) {
      getMessages(userId, recipient.userId).then((messages) => {
        setMessages(messages);
      });
    }
    if (!recipient) {
      setMessages([]);
    }
  }, [recipient]);

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.left}>
          <RoomList
            histories={histories}
            recipient={recipient}
            setIsRightVisible={setIsRightVisible}
            setRecipient={setRecipient}
          />
        </div>

        <div className={isRightVisible ? styles.rightVisible : styles.rightVisible02}>
          <ChatWindow
            messages={messages}
            recipient={recipient}
            sendMessage={sendMessage}
            setIsRightVisible={setIsRightVisible}
            setRecipient={setRecipient}
          />
        </div>

        <div className={styles.right}>
          <ChatWindow
            messages={messages}
            recipient={recipient}
            sendMessage={sendMessage}
            setRecipient={setRecipient}
          />
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
