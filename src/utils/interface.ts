export enum MessageType {
  USER = "USER",
  CHAT_BOT = "CHAT_BOT",
}

export enum ChatType {
  DOCUMENT = "DOCUMENT",
  DATABASE = "DATABASE",
  LEGAL = "LEGAL",
  // PNGTOSVG = "PNGTOSVG",
}

export interface IChatSession {
  id: string;
  index: number;
  type: ChatType;
}

export interface IChatItem {
  id?: string;
  message: string;
  type: MessageType;
  time: string;
}

export interface Session {
  id: string;
  name: string;
  uploads: string[];
  chats: IChatItem[];
  queryCount: number;
  snowflakeConnected: boolean;
  started: boolean;
  type: MessageType;
}
