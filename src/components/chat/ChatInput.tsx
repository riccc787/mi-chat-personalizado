"use client";
import React, { useState, FormEvent } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="chat-input-container">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="flex-1 p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-500"
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className="primary-button px-4 py-2 rounded-lg disabled:opacity-50"
          disabled={isLoading || !input.trim()}
        >
          Enviar
        </button>
      </form>
      {isLoading && (
        <div className="typing-indicator mt-2 ml-2">
          <div className="typing-dot"></div>
          <div className="typing-dot"></div>
          <div className="typing-dot"></div>
        </div>
      )}
    </div>
  );
};

export default ChatInput;
