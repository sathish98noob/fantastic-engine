export enum AppStatus {
  IDLE = 'IDLE',
  LOW_RATING = 'LOW_RATING',
  COMPLETE = 'COMPLETE',
}

// FIX: Added and exported the FeedbackAnalysis interface to resolve an import error in `services/geminiService.ts`.
export interface FeedbackAnalysis {
  category: string;
  summary: string;
}
