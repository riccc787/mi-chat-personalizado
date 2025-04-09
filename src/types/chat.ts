export interface MessageType {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface ChatState {
  messages: MessageType[];
  isLoading: boolean;
  error: string | null;
}
