import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

let chatSession: Chat | null = null;

export const initializeChat = async () => {
  if (!process.env.API_KEY) {
    console.warn("API Key not found for Velvet AI");
    return null;
  }
  
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize chat:", error);
    return null;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    return "Lo siento, el servicio de asistente virtual no está disponible en este momento. Por favor contacta por Instagram @velvet_cuba.";
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text || "Disculpa, no entendí tu consulta.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Hubo un error de conexión. Por favor intenta de nuevo.";
  }
};