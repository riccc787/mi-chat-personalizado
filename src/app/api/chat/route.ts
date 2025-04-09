import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Configuración del cliente OpenAI en el servidor
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'sk-c799d0a88aa8496ca79e02346ccc6029',
});

export async function POST(request: Request) {
  try {
    const { messages, temperature = 0.7 } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Se requiere un array de mensajes' },
        { status: 400 }
      );
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
      temperature,
    });

    return NextResponse.json({
      message: response.choices[0].message,
      usage: response.usage,
    });
  } catch (error) {
    console.error('Error en la API de chat:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}
