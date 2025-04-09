import { MessageType } from '@/types/chat';

// Función para enviar mensajes a la API interna de Next.js
export const sendMessage = async (messages: MessageType[], temperature: number = 0.7) => {
  try {
    // Convertir mensajes al formato esperado por la API
    const formattedMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }));
    
    // Llamar a nuestra API interna
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: formattedMessages,
        temperature,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al comunicarse con la API');
    }

    const data = await response.json();
    
    // Devolver el mensaje en el formato de nuestra aplicación
    return {
      id: Date.now().toString(),
      role: 'assistant' as const,
      content: data.message.content,
      timestamp: Date.now()
    };
  } catch (error) {
    console.error('Error al enviar mensaje a la API:', error);
    throw new Error('Error al comunicarse con la API. Por favor, intenta de nuevo más tarde.');
  }
};
