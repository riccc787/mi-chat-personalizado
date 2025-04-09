import React, { useRef, useEffect } from 'react';
import Message from './Message';
import ChatInput from './ChatInput';
import { useChatStore } from '@/lib/store';

const ChatContainer: React.FC = () => {
  const { messages, isLoading, error, sendMessageToAPI, clearMessages } = useChatStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (content: string) => {
    sendMessageToAPI(content);
  };

  return (
    <div className="chat-container">
      <div className="chat-header flex justify-between items-center">
        <h1 className="text-xl font-bold">Chat Personalizado</h1>
        {messages.length > 0 && (
          <button 
            onClick={clearMessages}
            className="text-sm text-gray-400 hover:text-white"
          >
            Limpiar chat
          </button>
        )}
      </div>
      
      <div className="chat-messages">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-400">Envía un mensaje para comenzar la conversación</p>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
            {error && (
              <div className="text-red-500 p-3 rounded-lg bg-red-900/20 my-2">
                Error: {error}
              </div>
            )}
          </>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default ChatContainer;
