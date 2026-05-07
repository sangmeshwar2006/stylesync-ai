import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getFashionAdvice(prompt: string, imageData?: { data: string; mimeType: string }) {
  try {
    const contents: any[] = [
      "You are a luxury fashion consultant for StyleSync AI. Provide expert advice on outfits, color matching, and style trends. Keep it concise, sophisticated, and helpful. "
    ];

    if (imageData) {
      contents.push({
        inlineData: {
          data: imageData.data,
          mimeType: imageData.mimeType
        }
      });
      contents.push(`User has uploaded an image of clothing. Analyze this image and provide a styling recommendation for it. ${prompt}`);
    } else {
      contents.push(`User's question: ${prompt}`);
    }

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ role: "user", parts: contents.map(c => typeof c === 'string' ? { text: c } : c) }]
    });

    return response.text || "I'm having trouble connecting to my fashion database. Please try again in a moment.";
  } catch (error) {
    console.error("Gemini API error:", error);
    return "I'm having trouble connecting to my fashion database. Please try again in a moment.";
  }
}

export async function getPersonalizedRecommendations(userHistory: any) {
  try {
    const prompt = `Based on these recently viewed items categories: ${userHistory.join(", ")}, suggest 3 fashion categories to explore next. Return as a simple comma-separated list.`;
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt
    });
    return response.text?.split(",").map(s => s.trim()) || [];
  } catch (error) {
    console.error("Gemini API error:", error);
    return [];
  }
}
