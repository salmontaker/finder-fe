import { Instance } from "@/utils/axios";

interface ChatRoom {
  userId: number;
  username: string;
  profileImage: string;
  thumbnailImage: string;
  message: string;
  messageDate: string;
}

interface Chat {
  messageId: number;
  sender: number;
  message: string;
  messageType: string;
  messageDate: string;
  messageTime: string;
}

const getChatRooms = async (userId: number) => {
  const { data } = await Instance.get<ChatRoom[]>("/api/chat/histories", {
    params: { userId: userId }
  });

  return data;
};

const getMessages = async (userId1: number, userId2: number) => {
  const roomId = [userId1, userId2].sort().join("_");
  const { data } = await Instance.get<Chat[]>("/api/chat/messages", {
    params: {
      roomId: roomId
    }
  });

  return data;
};

const createChatRoom = async (userId1: number, userId2: number) => {
  const { data } = await Instance.post<Chat>("api/chat", {
    userId: userId1,
    targetId: userId2
  });

  return data;
};

export type { Chat, ChatRoom };
export { createChatRoom, getChatRooms, getMessages };
