
import { GoogleGenAI, Type } from "@google/genai";
import { FeedbackAnalysis } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const analyzeFeedback = async (feedbackText: string): Promise<FeedbackAnalysis> => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Analyze the following customer feedback and provide a category and a one-sentence summary. Feedback: "${feedbackText}"`,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        category: {
                            type: Type.STRING,
                            description: "A category for the feedback (e.g., 'Product Quality', 'Customer Service', 'Website Usability', 'Shipping', 'Other')."
                        },
                        summary: {
                            type: Type.STRING,
                            description: "A concise one-sentence summary of the feedback."
                        }
                    },
                    required: ["category", "summary"]
                },
            },
        });

        const jsonString = response.text.trim();
        const analysisResult = JSON.parse(jsonString) as FeedbackAnalysis;
        
        return analysisResult;

    } catch (error) {
        console.error("Error analyzing feedback with Gemini API:", error);
        // Fallback in case of API error
        return {
            category: "Uncategorized",
            summary: "Could not automatically analyze feedback."
        };
    }
};
