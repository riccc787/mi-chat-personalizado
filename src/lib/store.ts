import { create } from 'zustand';
import { MessageType, ChatState } from '@/types/chat';
import { sendMessage } from '@/lib/api';

interface ChatStore extends ChatState {
  addMessage: (message: MessageType) => void;
  sendMessageToAPI: (content: string) => Promise<void>;
  clearMessages: () => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useChatStore = create<ChatStore>((set, get) => ({
  messages: [],
  isLoading: false,
  error: null,
  
  addMessage: (message) => {
    set((state) => ({
      messages: [...state.messages, message]
    }));
  },
  
  sendMessageToAPI: async (content) => {
    try {
      // Agregar mensaje del usuario
      const userMessage: MessageType = {
        id: Date.now().toString(),
        role: 'user',
        content,
        timestamp: Date.now()
      };
      
      get().addMessage(userMessage);
      set({ isLoading: true, error: null });
      
      // Enviar a la API
      const assistantMessage = await sendMessage([...get().messages, userMessage]);
      
      // Agregar respuesta del asistente
      get().addMessage(assistantMessage);
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Error desconocido al enviar mensaje' 
      });
      console.error('Error en sendMessageToAPI:', error);
    } finally {
      set({ isLoading: false });
    }
  },
  
  clearMessages: () => {
    set({ messages: [] });
  },
  
  setLoading: (isLoading) => {
    set({ isLoading });
  },
  
  setError: (error) => {
    set({ error });
  }
}));
