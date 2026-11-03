import type { ImageData } from '@google/genai';

type ImagePayload = Pick<ImageData, 'data' | 'mimeType'>;

const STYLIST_FALLBACK = "I'm having trouble connecting to my fashion stylist right now. Please try again in a moment.";

export async function getFashionAdvice(prompt: string, imageData?: ImagePayload) {
  try {
    const response = await fetch('/api/ai/fashion-advice', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, imageData }),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.detail || 'Stylist request failed');
    return result.text || STYLIST_FALLBACK;
  } catch (error) {
    console.error('Fashion advice request failed:', error);
    return STYLIST_FALLBACK;
  }
}

export async function getPersonalizedRecommendations(userHistory: string[]) {
  try {
    const response = await fetch('/api/ai/recommendations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userHistory }),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.detail || 'Recommendation request failed');
    return Array.isArray(result.recommendations) ? result.recommendations : [];
  } catch (error) {
    console.error('Recommendation request failed:', error);
    return [];
  }
}
