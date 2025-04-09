import React from 'react';
import { MessageType } from '@/types/chat';

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={`message ${isUser ? 'message-user' : 'message-assistant'}`}>
      <div className="message-content">
        {message.content}
      </div>
    </div>
  );
};

export default Message;
